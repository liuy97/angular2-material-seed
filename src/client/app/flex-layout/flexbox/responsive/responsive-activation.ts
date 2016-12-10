/* tslint:disable */
import {Directive} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import {extendObject} from '../../utils/object-extend';

import {MediaChange, MediaQuerySubscriber} from '../../media-query/media-change';
import {BreakPoint} from '../../media-query/breakpoints/break-point';
import {MediaMonitor} from '../../media-query/media-monitor';

export declare type SubscriptionList = Subscription[ ];
export interface BreakPointX extends BreakPoint{
  key : string;
  baseKey : string;
}
export class KeyOptions {
  constructor(public baseKey : string, public defaultValue : string|number|boolean) { }
}

/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery changes)
 * and the fx API directives. The MQA proxies mediaQuery change events and notifies the directive
 * via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
export class ResponsiveActivation {
  private _subscribers : SubscriptionList = [ ];
  private _activatedInputKey: string;

  /**
   * Constructor
   */
  constructor(
      private _directive: Directive,
      private _options : KeyOptions,
      private _onMediaChanges : MediaQuerySubscriber )
  {
    this._subscribers = this._configureChangeObservers();
  }

  /**
   * Accessor to the DI'ed directive property
   * Each directive instance has a reference to the MediaMonitor which is
   * used HERE to subscribe to mediaQuery change notifications.
   */
  get mediaMonitor() : MediaMonitor {
    return this._directive["mediaMonitor"];
  }

  /**
   * Determine which directive @Input() property is currently active (for the viewport size):
   * The key must be defined (in use) or fallback to the 'closest' overlapping property key
   * that is defined; otherwise the default property key will be used.
   * e.g.
   *      if `<div fx-hide fx-hide.gt-sm="false">` is used but the current activated mediaQuery alias
   *      key is `.md` then `.gt-sm` should be used instead
   */
  get activatedInputKey(): string {
    return this._activatedInputKey || this._options.baseKey;
  }

  /**
   * Get the currently activated @Input value or the fallback default @Input value
   */
  get activatedInput(): any {
    return this._directive[this.activatedInputKey] || this._options.defaultValue;
  }

  /**
   * Remove interceptors, restore original functions, and forward the onDestroy() call
   */
  destroy() {
    this._subscribers.forEach((link: Subscription) => {
      link.unsubscribe();
    });
  }

  /**
   * For each *defined* API property, register a callback to `_onMonitorEvents( )`
   * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
   */
  private _configureChangeObservers(): SubscriptionList {
    let subscriptions = [];

    this._buildRegistryMap().forEach((bp:BreakPointX)=> {
      if ( this._keyInUse(bp.key) ) {
        // Inject directive default property key name: to let onMediaChange() calls
        // know which property is being triggered...
        let buildChanges = (change: MediaChange) => {
              change.property = this._options.baseKey;
              return change;
            };

        subscriptions.push(
          this.mediaMonitor.observe(bp.alias)
              .map(buildChanges)
              .subscribe(change => {
                this._onMonitorEvents(change);
              })
        );
      }
    });

    return subscriptions;
  }

  /**
   * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
   * in the HTML markup
   */
  private _buildRegistryMap() {
    return this.mediaMonitor.breakpoints
        .map(bp => {
          return <BreakPointX> extendObject({}, bp, {
            baseKey : this._options.baseKey,              // e.g.  layout, hide, self-align, flex-wrap
            key     : this._options.baseKey + bp.suffix   // e.g.  layoutGtSm, layoutMd, layoutGtLg
          });
        })
        .filter( bp => this._keyInUse(bp.key) );
  }

  /**
   * Synchronizes change notifications with the current mq-activated @Input and calculates the
   * mq-activated input value or the default value
   */
  _onMonitorEvents(change: MediaChange) {
    if ( change.property == this._options.baseKey ) {
      change.value = this._calculateActivatedValue(change);

      this._onMediaChanges.call(this._directive, change);
    }
  }

  /**
   * Has the key been specified in the HTML markup and thus is intended
   * to participate in activation processes.
   */
  private _keyInUse(key ):boolean {
    return this._directive[key] !== undefined;
  }

  /**
   *  Map input key associated with mediaQuery activation to closest defined input key
   *  then return the values associated with the targeted input property
   *
   *  !! change events may arrive out-of-order (activate before deactivate)
   *     so make sure the deactivate is used ONLY when the keys match
   *     (since a different activate may be in use)
   */
  private _calculateActivatedValue(current:MediaChange): any  {
    const currentKey = this._options.baseKey + current.suffix;    // e.g. suffix == 'GtSm', _baseKey == 'hide'
    let   newKey = this._activatedInputKey;                     // e.g. newKey == hideGtSm

          newKey = current.matches ? currentKey : ((newKey == currentKey) ? null : newKey);

    this._activatedInputKey = this._validateInputKey(newKey);
    return this.activatedInput;
  }

  /**
   * For the specified input property key, validate it is defined (used in the markup)
   * If not see if a overlapping mediaQuery-related input key fallback has been defined
   *
   * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
   */
  private _validateInputKey(inputKey) {
    let items: BreakPoint[] = this.mediaMonitor.activeOverlaps;
    let isMissingKey = (key) => !this._keyInUse(key);

    if ( isMissingKey( inputKey ) ) {
      items.some(bp => {
        let key = this._options.baseKey + bp.suffix;
        if ( !isMissingKey(key) ) {
          inputKey = key;
          return true;  // exit .some()
        }
        return false;
      });
    }
    return inputKey;
  }

}

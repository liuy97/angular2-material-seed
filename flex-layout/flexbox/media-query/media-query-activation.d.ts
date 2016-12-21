import { Directive, OnDestroy } from '@angular/core';
import { MediaQueries } from '../../media-query/media-queries';
import { MediaQueryChanges, OnMediaQueryChanges } from './media-query-changes';
/**
 * MediaQueryActivation acts as a proxy between the MediaQuery service (which emits mediaQuery changes)
 * and the fx API directives. The MQA proxies (head-hooks) both the `onMediaQueryChanges()` and
 * `ngOnDestroy()` methods of the directive instance.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
export declare class MediaQueryActivation implements OnMediaQueryChanges, OnDestroy {
    private _mq;
    private _directive;
    private _baseKey;
    private _defaultValue;
    private _onDestroy;
    private _onMediaQueryChanges;
    private _activatedInputKey;
    /**
     * Determine which directive @Input() property is currently active (for the viewport size):
     * The key must be defined (in use) or fallback to the 'closest' overlapping property key
     * that is defined; otherwise the default property key will be used.
     * e.g.
     *      if `<div fx-hide fx-hide.gt-sm="false">` is used but the current activated mediaQuery alias
     *      key is `.md` then `.gt-sm` should be used instead
     */
    readonly activatedInputKey: string;
    /**
     * Get the currently activated @Input value or the fallback default @Input value
     */
    readonly activatedInput: any;
    /**
     *
     */
    constructor(_mq: MediaQueries, _directive: Directive, _baseKey: string, _defaultValue: string | number | boolean);
    /**
     * MediaQueryChanges interceptor that tracks the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    onMediaQueryChanges(changes: MediaQueryChanges): void;
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    ngOnDestroy(): void;
    /**
     * Head-hook onDestroy and onMediaQueryChanges methods on the directive instance
     */
    private _interceptLifeCyclEvents();
    /**
     */
    private _logMediaQueryChanges(changes);
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     */
    private _calculateActivatedValue(current);
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     */
    private _validateInputKey(inputKey);
}

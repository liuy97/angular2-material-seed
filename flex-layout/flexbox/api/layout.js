var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
export var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
export var LayoutDirective = (function (_super) {
    __extends(LayoutDirective, _super);
    /**
     *
     */
    function LayoutDirective(monitor, elRef, renderer) {
        _super.call(this, monitor, elRef, renderer);
        this._announcer = new BehaviorSubject("row");
        this.layout$ = this._announcer.asObservable();
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        set: function (val) { this._cacheInput("layout", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fx-layout')
     * Then conditionally override with the mq-activated Input's current value
     */
    LayoutDirective.prototype.ngOnChanges = function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
        this._updateWithDirection();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     */
    LayoutDirective.prototype._updateWithDirection = function (direction) {
        direction = direction || this._queryInput("layout") || 'row';
        if (this._mqActivation) {
            direction = this._mqActivation.activatedInput;
        }
        direction = this._validateValue(direction);
        // Update styles and announce to subscribers the *new* direction
        this._applyStyleToElement(this._buildCSS(direction));
        this._announcer.next(direction);
    };
    /**
     * Build the CSS that should be assigned to the element instance
     * BUG:
     *
     *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
     *      Use height instead if possible; height : <xxx>vh;
     *
     * @todo - update all child containers to have "box-sizing: border-box"
     *         This way any padding or border specified on the child elements are
     *         laid out and drawn inside that element's specified width and height.
     *
     */
    LayoutDirective.prototype._buildCSS = function (value) {
        return { 'display': 'flex', 'box-sizing': 'border-box', 'flex-direction': value };
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of "row"
     */
    LayoutDirective.prototype._validateValue = function (value) {
        value = value ? value.toLowerCase() : '';
        return LAYOUT_VALUES.find(function (x) { return x === value; }) ? value : LAYOUT_VALUES[0]; // "row"
    };
    __decorate([
        Input('fx-layout'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layout", null);
    __decorate([
        Input('fx-layout.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutXs", null);
    __decorate([
        Input('fx-layout.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutGtXs", null);
    __decorate([
        Input('fx-layout.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutSm", null);
    __decorate([
        Input('fx-layout.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutGtSm", null);
    __decorate([
        Input('fx-layout.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutMd", null);
    __decorate([
        Input('fx-layout.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutGtMd", null);
    __decorate([
        Input('fx-layout.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutLg", null);
    __decorate([
        Input('fx-layout.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutGtLg", null);
    __decorate([
        Input('fx-layout.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutDirective.prototype, "layoutXl", null);
    LayoutDirective = __decorate([
        Directive({ selector: "\n  [fx-layout],\n  [fx-layout.xs]\n  [fx-layout.gt-xs],\n  [fx-layout.sm],\n  [fx-layout.gt-sm]\n  [fx-layout.md],\n  [fx-layout.gt-md]\n  [fx-layout.lg],\n  [fx-layout.gt-lg],\n  [fx-layout.xl]\n" }), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer])
    ], LayoutDirective);
    return LayoutDirective;
}(BaseFxDirective));

//# sourceMappingURL=layout.js.map

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, ElementRef, Input, Optional, Renderer, SkipSelf } from '@angular/core';
import { extendObject } from '../../utils/object-extend';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { LayoutDirective } from './layout';
import { LayoutWrapDirective } from './layout-wrap';
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
export var FlexDirective = (function (_super) {
    __extends(FlexDirective, _super);
    // Explicitly @SkipSelf on LayoutDirective and LayoutWrapDirective because we want the
    // parent flex container for this flex item.
    function FlexDirective(monitor, elRef, renderer, _container, _wrap) {
        var _this = this;
        _super.call(this, monitor, elRef, renderer);
        this._container = _container;
        this._wrap = _wrap;
        /** The flex-direction of this element's flex container. Defaults to 'row'. */
        this._layout = 'row';
        this._cacheInput("flex", "");
        this._cacheInput("shrink", 1);
        this._cacheInput("grow", 1);
        if (_container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            this._layoutWatcher = _container.layout$.subscribe(function (direction) { return _this._onLayoutChange(direction); });
        }
    }
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: function (val) { this._cacheInput("flex", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        set: function (val) { this._cacheInput("shrink", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: function (val) { this._cacheInput("grow", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    FlexDirective.prototype.ngOnChanges = function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._onLayoutChange(this._layout);
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        this._onLayoutChange();
    };
    FlexDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    FlexDirective.prototype._onLayoutChange = function (direction) {
        this._layout = direction || this._layout;
        this._updateStyle();
    };
    FlexDirective.prototype._updateStyle = function (value) {
        var flexBasis = value || this._queryInput("flex") || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._validateValue.apply(this, this._parseFlexParts(String(flexBasis))));
    };
    /**
     * If the used the short-form `fx-flex="1 0 37%"`, then parse the parts
     */
    FlexDirective.prototype._parseFlexParts = function (basis) {
        basis = basis.replace(";", "");
        var hasCalc = basis && basis.indexOf("calc") > -1;
        var matches = !hasCalc ? basis.split(" ") : this._getPartsWithCalc(basis.trim());
        return (matches.length === 3) ? matches : [this._queryInput("grow"), this._queryInput("shrink"), basis];
    };
    /**
     * Extract more complicated short-hand versions.
     * e.g.
     * fx-flex="3 3 calc(15em + 20px)"
     */
    FlexDirective.prototype._getPartsWithCalc = function (value) {
        debugger;
        var parts = [this._queryInput("grow"), this._queryInput("shrink"), value];
        var j = value.indexOf('calc');
        if (j > 0) {
            parts[2] = value.substring(j);
            var matches = value.substr(0, j).trim().split(" ");
            if (matches.length == 2) {
                parts[0] = matches[0];
                parts[1] = matches[1];
            }
        }
        return parts;
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of "row"
     */
    FlexDirective.prototype._validateValue = function (grow, shrink, basis) {
        var css;
        var direction = (this._layout === 'column') || (this._layout == 'column-reverse') ?
            'column' :
            'row';
        // flex-basis allows you to specify the initial/starting main-axis size of the element,
        // before anything else is computed. It can either be a percentage or an absolute value.
        // It is, however, not the breaking point for flex-grow/shrink properties
        //
        // flex-grow can be seen as this:
        //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
        //   1: (Default value). Stretch; will be the same size to all other flex items on
        //       the same row since they have a default value of 1.
        //   ≥2 (integer n): Stretch. Will be n times the size of other elements
        //      with 'flex-grow: 1' on the same row.
        // Use `null` to clear existing styles.
        var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                css = extendObject(clearStyles, { 'flex': '1' });
                break;
            case 'grow':
                css = extendObject(clearStyles, { 'flex': '1 1 100%' });
                break;
            case 'initial':
                css = extendObject(clearStyles, { 'flex': '0 1 auto' });
                break; // default
            case 'auto':
                css = extendObject(clearStyles, { 'flex': '1 1 auto' });
                break;
            case 'none':
                css = extendObject(clearStyles, { 'flex': '0 0 auto' });
                break;
            case 'nogrow':
                css = extendObject(clearStyles, { 'flex': '0 1 auto' });
                break;
            case 'noshrink':
                css = extendObject(clearStyles, { 'flex': '1 0 auto' });
                break;
            default:
                var isPercent = String(basis).indexOf('%') > -1;
                var isValue = String(basis).indexOf('px') > -1 ||
                    String(basis).indexOf('calc') > -1 ||
                    String(basis).indexOf('em') > -1 ||
                    String(basis).indexOf('vw') > -1 ||
                    String(basis).indexOf('vh') > -1;
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(basis))
                    basis = basis + '%';
                if (basis === '0px')
                    basis = '0%';
                // Set max-width = basis if using layout-wrap
                // @see https://github.com/philipwalton/flexbugs#11-min-and-max-size-declarations-are-ignored-when-wrappifl-flex-items
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + ((isValue || this._wrap) ? basis : '100%'),
                });
                break;
        }
        var max = (direction === 'row') ? 'max-width' : 'max-height';
        var min = (direction === 'row') ? 'min-width' : 'min-height';
        var usingCalc = String(basis).indexOf('calc') > -1;
        css[min] = (basis == '0%') ? 0 : null;
        css[max] = (basis == '0%') ? 0 : usingCalc ? null : basis;
        return extendObject(css, { 'box-sizing': 'border-box' });
    };
    __decorate([
        Input('fx-flex'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flex", null);
    __decorate([
        Input('fx-shrink'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "shrink", null);
    __decorate([
        Input('fx-grow'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "grow", null);
    __decorate([
        Input('fx-flex.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexXs", null);
    __decorate([
        Input('fx-flex.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexGtXs", null);
    __decorate([
        Input('fx-flex.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexSm", null);
    __decorate([
        Input('fx-flex.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexGtSm", null);
    __decorate([
        Input('fx-flex.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexMd", null);
    __decorate([
        Input('fx-flex.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexGtMd", null);
    __decorate([
        Input('fx-flex.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexLg", null);
    __decorate([
        Input('fx-flex.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexGtLg", null);
    __decorate([
        Input('fx-flex.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexDirective.prototype, "flexXl", null);
    FlexDirective = __decorate([
        Directive({ selector: "\n  [fx-flex],\n  [fx-flex.xs]\n  [fx-flex.gt-xs],\n  [fx-flex.sm],\n  [fx-flex.gt-sm]\n  [fx-flex.md],\n  [fx-flex.gt-md]\n  [fx-flex.lg],\n  [fx-flex.gt-lg],\n  [fx-flex.xl]\n"
        }),
        __param(3, Optional()),
        __param(3, SkipSelf()),
        __param(4, Optional()),
        __param(4, SkipSelf()), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer, LayoutDirective, LayoutWrapDirective])
    ], FlexDirective);
    return FlexDirective;
}(BaseFxDirective));

//# sourceMappingURL=flex.js.map

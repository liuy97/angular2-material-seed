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
import { Directive, ElementRef, Input, Renderer, Self, Optional } from '@angular/core';
import { extendObject } from '../../utils/object-extend';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { LayoutDirective, LAYOUT_VALUES } from './layout';
/**
 * 'layout-wrap' flexbox styling directive
 * Defines wrapping of child elements in layout container
 * Optional values: reverse, wrap-reverse, none, nowrap, wrap (default)]
 * @see https://css-tricks.com/almanac/properties/f/flex-wrap/
 */
export var LayoutWrapDirective = (function (_super) {
    __extends(LayoutWrapDirective, _super);
    function LayoutWrapDirective(monitor, elRef, renderer, container) {
        _super.call(this, monitor, elRef, renderer);
        this._layout = 'row'; // default flex-direction
        if (container) {
            this._layoutWatcher = container.layout$.subscribe(this._onLayoutChange.bind(this));
        }
    }
    Object.defineProperty(LayoutWrapDirective.prototype, "wrap", {
        set: function (val) { this._cacheInput("wrap", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapXs", {
        set: function (val) { this._cacheInput('wrapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtXs", {
        set: function (val) { this._cacheInput('wrapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapSm", {
        set: function (val) { this._cacheInput('wrapSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtSm", {
        set: function (val) { this._cacheInput('wrapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapMd", {
        set: function (val) { this._cacheInput('wrapMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtMd", {
        set: function (val) { this._cacheInput('wrapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapLg", {
        set: function (val) { this._cacheInput('wrapLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapGtLg", {
        set: function (val) { this._cacheInput('wrapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutWrapDirective.prototype, "wrapXl", {
        set: function (val) { this._cacheInput('wrapXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    LayoutWrapDirective.prototype.ngOnChanges = function (changes) {
        if (changes['wrap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutWrapDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('wrap', 'wrap', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    LayoutWrapDirective.prototype._onLayoutChange = function (direction) {
        var _this = this;
        this._layout = (direction || '').toLowerCase().replace('-reverse', '');
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    LayoutWrapDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("wrap") || 'wrap';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        value = this._validateValue(value);
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * Build the CSS that should be assigned to the element instance
     */
    LayoutWrapDirective.prototype._buildCSS = function (value) {
        return extendObject({ 'flex-wrap': value }, {
            'display': 'flex',
            'flex-direction': this._layout || 'row'
        });
    };
    /**
     * Convert layout-wrap="<value>" to expected flex-wrap style
     */
    LayoutWrapDirective.prototype._validateValue = function (value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to "wrap"
            default:
                value = 'wrap';
                break;
        }
        return value;
    };
    __decorate([
        Input('fx-layout-wrap'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrap", null);
    __decorate([
        Input('fx-layout-wrap.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapXs", null);
    __decorate([
        Input('fx-layout-wrap.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapGtXs", null);
    __decorate([
        Input('fx-layout-wrap.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapSm", null);
    __decorate([
        Input('fx-layout-wrap.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapGtSm", null);
    __decorate([
        Input('fx-layout-wrap.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapMd", null);
    __decorate([
        Input('fx-layout-wrap.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapGtMd", null);
    __decorate([
        Input('fx-layout-wrap.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapLg", null);
    __decorate([
        Input('fx-layout-wrap.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapGtLg", null);
    __decorate([
        Input('fx-layout-wrap.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutWrapDirective.prototype, "wrapXl", null);
    LayoutWrapDirective = __decorate([
        Directive({ selector: "\n  [fx-layout-wrap],\n  [fx-layout-wrap.xs]\n  [fx-layout-wrap.gt-xs],\n  [fx-layout-wrap.sm],\n  [fx-layout-wrap.gt-sm]\n  [fx-layout-wrap.md],\n  [fx-layout-wrap.gt-md]\n  [fx-layout-wrap.lg],\n  [fx-layout-wrap.gt-lg],\n  [fx-layout-wrap.xl]\n" }),
        __param(3, Optional()),
        __param(3, Self()), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer, LayoutDirective])
    ], LayoutWrapDirective);
    return LayoutWrapDirective;
}(BaseFxDirective));

//# sourceMappingURL=layout-wrap.js.map

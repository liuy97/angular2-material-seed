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
import { Directive, ElementRef, Input, Optional, Renderer, Self } from '@angular/core';
import { extendObject } from '../../utils/object-extend';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { LAYOUT_VALUES, LayoutDirective } from './layout';
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 *  @see https://css-tricks.com/almanac/properties/j/justify-content/
 *  @see https://css-tricks.com/almanac/properties/a/align-items/
 *  @see https://css-tricks.com/almanac/properties/a/align-content/
 */
export var LayoutAlignDirective = (function (_super) {
    __extends(LayoutAlignDirective, _super);
    function LayoutAlignDirective(monitor, elRef, renderer, container) {
        _super.call(this, monitor, elRef, renderer);
        this._layout = 'row'; // default flex-direction
        if (container) {
            this._layoutWatcher = container.layout$.subscribe(this._onLayoutChange.bind(this));
        }
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        set: function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    LayoutAlignDirective.prototype.ngOnChanges = function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    LayoutAlignDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    LayoutAlignDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    LayoutAlignDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("align") || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? "row" : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    LayoutAlignDirective.prototype._onLayoutChange = function (direction) {
        var _this = this;
        this._layout = (direction || '').toLowerCase().replace('-reverse', '');
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; }))
            this._layout = 'row';
        var value = this._queryInput("align") || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || "row");
    };
    LayoutAlignDirective.prototype._buildCSS = function (align) {
        var css = {}, _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1];
        css['justify-content'] = 'flex-start'; // default main axis
        css['align-items'] = 'stretch'; // default cross axis
        css['align-content'] = 'stretch'; // default cross axis
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'end':
                css['justify-content'] = 'flex-end';
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            default:
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || "row",
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    LayoutAlignDirective.prototype._allowStretching = function (align, layout) {
        var _a = align.split(' '), cross_axis = _a[1];
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': (layout === 'column') ? '100%' : null,
                'max-height': (layout === 'row') ? '100%' : null
            });
        }
    };
    __decorate([
        Input('fx-layout-align'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "align", null);
    __decorate([
        Input('fx-layout-align.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignXs", null);
    __decorate([
        Input('fx-layout-align.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignGtXs", null);
    __decorate([
        Input('fx-layout-align.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignSm", null);
    __decorate([
        Input('fx-layout-align.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignGtSm", null);
    __decorate([
        Input('fx-layout-align.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignMd", null);
    __decorate([
        Input('fx-layout-align.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignGtMd", null);
    __decorate([
        Input('fx-layout-align.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignLg", null);
    __decorate([
        Input('fx-layout-align.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignGtLg", null);
    __decorate([
        Input('fx-layout-align.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], LayoutAlignDirective.prototype, "alignXl", null);
    LayoutAlignDirective = __decorate([
        Directive({ selector: "\n  [fx-layout-align],\n  [fx-layout-align.xs]\n  [fx-layout-align.gt-xs],\n  [fx-layout-align.sm],\n  [fx-layout-align.gt-sm]\n  [fx-layout-align.md],\n  [fx-layout-align.gt-md]\n  [fx-layout-align.lg],\n  [fx-layout-align.gt-lg],\n  [fx-layout-align.xl]\n" }),
        __param(3, Optional()),
        __param(3, Self()), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer, LayoutDirective])
    ], LayoutAlignDirective);
    return LayoutAlignDirective;
}(BaseFxDirective));

//# sourceMappingURL=layout-align.js.map

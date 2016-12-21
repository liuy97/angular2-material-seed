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
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
export var FlexAlignDirective = (function (_super) {
    __extends(FlexAlignDirective, _super);
    function FlexAlignDirective(monitor, elRef, renderer) {
        _super.call(this, monitor, elRef, renderer);
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        set: function (val) {
            this._cacheInput('align', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: function (val) {
            this._cacheInput('alignXs', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: function (val) {
            this._cacheInput('alignGtXs', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: function (val) {
            this._cacheInput('alignSm', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: function (val) {
            this._cacheInput('alignGtSm', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: function (val) {
            this._cacheInput('alignMd', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: function (val) {
            this._cacheInput('alignGtMd', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: function (val) {
            this._cacheInput('alignLg', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: function (val) {
            this._cacheInput('alignGtLg', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: function (val) {
            this._cacheInput('alignXl', val);
        },
        enumerable: true,
        configurable: true
    });
    ;
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    FlexAlignDirective.prototype.ngOnChanges = function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexAlignDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    FlexAlignDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("align") || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    FlexAlignDirective.prototype._buildCSS = function (align) {
        var css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    __decorate([
        Input('fx-flex-align'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "align", null);
    __decorate([
        Input('fx-flex-align.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignXs", null);
    __decorate([
        Input('fx-flex-align.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignGtXs", null);
    __decorate([
        Input('fx-flex-align.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignSm", null);
    __decorate([
        Input('fx-flex-align.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignGtSm", null);
    __decorate([
        Input('fx-flex-align.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignMd", null);
    __decorate([
        Input('fx-flex-align.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignGtMd", null);
    __decorate([
        Input('fx-flex-align.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignLg", null);
    __decorate([
        Input('fx-flex-align.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignGtLg", null);
    __decorate([
        Input('fx-flex-align.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexAlignDirective.prototype, "alignXl", null);
    FlexAlignDirective = __decorate([
        Directive({
            selector: "\n  [fx-flex-align],\n  [fx-flex-align.xs]\n  [fx-flex-align.gt-xs],\n  [fx-flex-align.sm],\n  [fx-flex-align.gt-sm]\n  [fx-flex-align.md],\n  [fx-flex-align.gt-md]\n  [fx-flex-align.lg],\n  [fx-flex-align.gt-lg],\n  [fx-flex-align.xl]\n"
        }), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer])
    ], FlexAlignDirective);
    return FlexAlignDirective;
}(BaseFxDirective));

//# sourceMappingURL=flex-align.js.map

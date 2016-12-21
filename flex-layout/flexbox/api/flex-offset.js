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
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
export var FlexOffsetDirective = (function (_super) {
    __extends(FlexOffsetDirective, _super);
    function FlexOffsetDirective(monitor, elRef, renderer) {
        _super.call(this, monitor, elRef, renderer);
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        set: function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: function (val) { this._cacheInput('offsetXl', val); },
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
    FlexOffsetDirective.prototype.ngOnChanges = function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexOffsetDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    FlexOffsetDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("offset") || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    FlexOffsetDirective.prototype._buildCSS = function (offset) {
        var isPercent = String(offset).indexOf('%') > -1;
        var isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(offset))
            offset = offset + '%';
        return { 'margin-left': "" + offset };
    };
    __decorate([
        Input('fx-flex-offset'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offset", null);
    __decorate([
        Input('fx-flex-offset.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetXs", null);
    __decorate([
        Input('fx-flex-offset.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetGtXs", null);
    __decorate([
        Input('fx-flex-offset.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetSm", null);
    __decorate([
        Input('fx-flex-offset.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetGtSm", null);
    __decorate([
        Input('fx-flex-offset.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetMd", null);
    __decorate([
        Input('fx-flex-offset.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetGtMd", null);
    __decorate([
        Input('fx-flex-offset.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetLg", null);
    __decorate([
        Input('fx-flex-offset.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetGtLg", null);
    __decorate([
        Input('fx-flex-offset.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOffsetDirective.prototype, "offsetXl", null);
    FlexOffsetDirective = __decorate([
        Directive({ selector: "\n  [fx-flex-offset],\n  [fx-flex-offset.xs]\n  [fx-flex-offset.gt-xs],\n  [fx-flex-offset.sm],\n  [fx-flex-offset.gt-sm]\n  [fx-flex-offset.md],\n  [fx-flex-offset.gt-md]\n  [fx-flex-offset.lg],\n  [fx-flex-offset.gt-lg],\n  [fx-flex-offset.xl]\n" }), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer])
    ], FlexOffsetDirective);
    return FlexOffsetDirective;
}(BaseFxDirective));

//# sourceMappingURL=flex-offset.js.map

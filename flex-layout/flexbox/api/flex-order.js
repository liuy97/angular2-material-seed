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
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
export var FlexOrderDirective = (function (_super) {
    __extends(FlexOrderDirective, _super);
    function FlexOrderDirective(monitor, elRef, renderer) {
        _super.call(this, monitor, elRef, renderer);
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        set: function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: function (val) { this._cacheInput('orderXl', val); },
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
    FlexOrderDirective.prototype.ngOnChanges = function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    FlexOrderDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('order', '1', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    FlexOrderDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("order") || '1';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    FlexOrderDirective.prototype._buildCSS = function (value) {
        value = parseInt(value, 10);
        return { order: isNaN(value) ? 0 : value };
    };
    __decorate([
        Input('fx-flex-order'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "order", null);
    __decorate([
        Input('fx-flex-order.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderXs", null);
    __decorate([
        Input('fx-flex-order.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderGtXs", null);
    __decorate([
        Input('fx-flex-order.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderSm", null);
    __decorate([
        Input('fx-flex-order.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderGtSm", null);
    __decorate([
        Input('fx-flex-order.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderMd", null);
    __decorate([
        Input('fx-flex-order.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderGtMd", null);
    __decorate([
        Input('fx-flex-order.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderLg", null);
    __decorate([
        Input('fx-flex-order.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderGtLg", null);
    __decorate([
        Input('fx-flex-order.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FlexOrderDirective.prototype, "orderXl", null);
    FlexOrderDirective = __decorate([
        Directive({ selector: "\n  [fx-flex-order],\n  [fx-flex-order.xs]\n  [fx-flex-order.gt-xs],\n  [fx-flex-order.sm],\n  [fx-flex-order.gt-sm]\n  [fx-flex-order.md],\n  [fx-flex-order.gt-md]\n  [fx-flex-order.lg],\n  [fx-flex-order.gt-lg],\n  [fx-flex-order.xl]\n" }), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer])
    ], FlexOrderDirective);
    return FlexOrderDirective;
}(BaseFxDirective));

//# sourceMappingURL=flex-order.js.map

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
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { ShowDirective } from "./show";
import { LayoutDirective } from './layout';
/**
 * 'show' Layout API directive
 *
 */
export var HideDirective = (function (_super) {
    __extends(HideDirective, _super);
    /**
     *
     */
    function HideDirective(monitor, _layout, _showDirective, elRef, renderer) {
        var _this = this;
        _super.call(this, monitor, elRef, renderer);
        this._layout = _layout;
        this._showDirective = _showDirective;
        this.elRef = elRef;
        this.renderer = renderer;
        /**
         * Original dom Elements CSS display style
         */
        this._display = 'flex';
        if (_layout) {
            /**
             * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
             * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
             */
            this._layoutWatcher = _layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
    }
    Object.defineProperty(HideDirective.prototype, "hide", {
        set: function (val) { this._cacheInput("hide", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideDirective.prototype, "hideXs", {
        set: function (val) { this._cacheInput('hideXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HideDirective.prototype, "hideGtXs", {
        set: function (val) { this._cacheInput('hideGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideSm", {
        set: function (val) { this._cacheInput('hideSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideGtSm", {
        set: function (val) { this._cacheInput('hideGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideMd", {
        set: function (val) { this._cacheInput('hideMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideGtMd", {
        set: function (val) { this._cacheInput('hideGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideLg", {
        set: function (val) { this._cacheInput('hideLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideGtLg", {
        set: function (val) { this._cacheInput('hideGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "hideXl", {
        set: function (val) { this._cacheInput('hideXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(HideDirective.prototype, "usesShowAPI", {
        /**
         * Does the current element also use the fx-show API ?
         */
        get: function () {
            return !!this._showDirective;
        },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fx-hide')
     * Then conditionally override with the mq-activated Input's current value
     */
    HideDirective.prototype.ngOnChanges = function (changes) {
        if (changes['hide'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    HideDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('hide', true, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    HideDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Validate the visibility value and then update the host's inline display style
     */
    HideDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("hide") || true;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        var shouldHide = this._validateTruthy(value);
        if (shouldHide || !this.usesShowAPI) {
            this._applyStyleToElement(this._buildCSS(shouldHide));
        }
    };
    /**
     * Build the CSS that should be assigned to the element instance
     */
    HideDirective.prototype._buildCSS = function (value) {
        return { 'display': value ? 'none' : this._display };
    };
    /**
     * Validate the value to NOT be FALSY
     */
    HideDirective.prototype._validateTruthy = function (value) {
        return FALSY.indexOf(value) === -1;
    };
    __decorate([
        Input('fx-hide'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hide", null);
    __decorate([
        Input('fx-hide.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideXs", null);
    __decorate([
        Input('fx-hide.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideGtXs", null);
    __decorate([
        Input('fx-hide.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideSm", null);
    __decorate([
        Input('fx-hide.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideGtSm", null);
    __decorate([
        Input('fx-hide.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideMd", null);
    __decorate([
        Input('fx-hide.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideGtMd", null);
    __decorate([
        Input('fx-hide.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideLg", null);
    __decorate([
        Input('fx-hide.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideGtLg", null);
    __decorate([
        Input('fx-hide.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], HideDirective.prototype, "hideXl", null);
    HideDirective = __decorate([
        Directive({ selector: "\n  [fx-hide],\n  [fx-hide.xs]\n  [fx-hide.gt-xs],\n  [fx-hide.sm],\n  [fx-hide.gt-sm]\n  [fx-hide.md],\n  [fx-hide.gt-md]\n  [fx-hide.lg],\n  [fx-hide.gt-lg],\n  [fx-hide.xl]\n" }),
        __param(1, Optional()),
        __param(1, Self()),
        __param(2, Optional()),
        __param(2, Self()), 
        __metadata('design:paramtypes', [MediaMonitor, LayoutDirective, ShowDirective, ElementRef, Renderer])
    ], HideDirective);
    return HideDirective;
}(BaseFxDirective));
var FALSY = ['false', false, 0];

//# sourceMappingURL=hide.js.map

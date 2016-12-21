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
import { Directive, ElementRef, Input, Renderer, Self, Optional, Inject, forwardRef } from '@angular/core';
import { BaseFxDirective } from './base';
import { MediaMonitor } from '../../media-query/media-monitor';
import { HideDirective } from "./hide";
import { LayoutDirective } from './layout';
var FALSY = ['false', false, 0];
/**
 * 'show' Layout API directive
 *
 */
export var ShowDirective = (function (_super) {
    __extends(ShowDirective, _super);
    /**
     *
     */
    function ShowDirective(monitor, _layout, _hideDirective, elRef, renderer) {
        var _this = this;
        _super.call(this, monitor, elRef, renderer);
        this._layout = _layout;
        this._hideDirective = _hideDirective;
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
    Object.defineProperty(ShowDirective.prototype, "show", {
        set: function (val) { this._cacheInput("show", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowDirective.prototype, "showXs", {
        set: function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowDirective.prototype, "showGtXs", {
        set: function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showSm", {
        set: function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showGtSm", {
        set: function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showMd", {
        set: function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showGtMd", {
        set: function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showLg", {
        set: function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showGtLg", {
        set: function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "showXl", {
        set: function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ShowDirective.prototype, "usesHideAPI", {
        /**
          * Does the current element also use the fx-show API ?
          */
        get: function () {
            return !!this._hideDirective;
        },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fx-show')
     * Then conditionally override with the mq-activated Input's current value
     */
    ShowDirective.prototype.ngOnChanges = function (changes) {
        if (changes['show'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    ShowDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._listenForMediaQueryChanges('show', true, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    ShowDirective.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    ShowDirective.prototype._updateWithValue = function (value) {
        value = value || this._queryInput("show") || true;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        var shouldShow = this._validateTruthy(value);
        if (shouldShow || !this.usesHideAPI) {
            this._applyStyleToElement(this._buildCSS(shouldShow));
        }
    };
    /** Build the CSS that should be assigned to the element instance */
    ShowDirective.prototype._buildCSS = function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    ShowDirective.prototype._validateTruthy = function (show) {
        return (FALSY.indexOf(show) == -1);
    };
    __decorate([
        Input('fx-show'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "show", null);
    __decorate([
        Input('fx-show.xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showXs", null);
    __decorate([
        Input('fx-show.gt-xs'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showGtXs", null);
    __decorate([
        Input('fx-show.sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showSm", null);
    __decorate([
        Input('fx-show.gt-sm'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showGtSm", null);
    __decorate([
        Input('fx-show.md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showMd", null);
    __decorate([
        Input('fx-show.gt-md'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showGtMd", null);
    __decorate([
        Input('fx-show.lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showLg", null);
    __decorate([
        Input('fx-show.gt-lg'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showGtLg", null);
    __decorate([
        Input('fx-show.xl'), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ShowDirective.prototype, "showXl", null);
    ShowDirective = __decorate([
        Directive({ selector: "\n  [fx-show],\n  [fx-show.xs]\n  [fx-show.gt-xs],\n  [fx-show.sm],\n  [fx-show.gt-sm]\n  [fx-show.md],\n  [fx-show.gt-md]\n  [fx-show.lg],\n  [fx-show.gt-lg],\n  [fx-show.xl]\n" }),
        __param(1, Optional()),
        __param(1, Self()),
        __param(2, Inject(forwardRef(function () { return HideDirective; }))),
        __param(2, Optional()),
        __param(2, Self()), 
        __metadata('design:paramtypes', [MediaMonitor, LayoutDirective, Object, ElementRef, Renderer])
    ], ShowDirective);
    return ShowDirective;
}(BaseFxDirective));

//# sourceMappingURL=show.js.map

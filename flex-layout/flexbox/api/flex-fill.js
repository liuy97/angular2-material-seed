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
import { Directive, ElementRef, Renderer } from '@angular/core';
import { MediaMonitor } from '../../media-query/media-monitor';
import { BaseFxDirective } from './base';
var FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fx-fill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fx-fill is NOT responsive API!!
 */
export var FlexFillDirective = (function (_super) {
    __extends(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, renderer) {
        _super.call(this, monitor, elRef, renderer);
        this.elRef = elRef;
        this.renderer = renderer;
        this._applyStyleToElement(FLEX_FILL_CSS);
    }
    FlexFillDirective = __decorate([
        Directive({ selector: "\n  [fx-fill],\n  [fx-fill.xs]\n  [fx-fill.gt-xs],\n  [fx-fill.sm],\n  [fx-fill.gt-sm]\n  [fx-fill.md],\n  [fx-fill.gt-md]\n  [fx-fill.lg],\n  [fx-fill.gt-lg],\n  [fx-fill.xl]\n" }), 
        __metadata('design:paramtypes', [MediaMonitor, ElementRef, Renderer])
    ], FlexFillDirective);
    return FlexFillDirective;
}(BaseFxDirective));

//# sourceMappingURL=flex-fill.js.map

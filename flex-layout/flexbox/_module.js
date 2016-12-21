var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { MediaMonitor } from '../media-query/media-monitor';
import { MediaQueriesModule } from '../media-query/_module';
import { FlexDirective } from './api/flex';
import { LayoutDirective } from './api/layout';
import { HideDirective } from './api/hide';
import { ShowDirective } from './api/show';
import { FlexAlignDirective } from './api/flex-align';
import { FlexFillDirective } from './api/flex-fill';
import { FlexOffsetDirective } from './api/flex-offset';
import { FlexOrderDirective } from './api/flex-order';
import { LayoutAlignDirective } from './api/layout-align';
import { LayoutWrapDirective } from './api/layout-wrap';
import { LayoutGapDirective } from './api/layout-gap';
/**
 * Since the equivalent results are easily achieved with a css class attached to each
 * layout child, these have been deprecated and removed from the API.
 *
 *  import {LayoutPaddingDirective} from './api/layout-padding';
 *  import {LayoutMarginDirective} from './api/layout-margin';
 */
var ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutWrapDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
    ShowDirective,
    HideDirective,
];
/**
 *
 */
export var FlexLayoutModule = (function () {
    function FlexLayoutModule() {
    }
    FlexLayoutModule.forRoot = function () {
        return { ngModule: FlexLayoutModule, providers: [MediaMonitor] };
    };
    FlexLayoutModule = __decorate([
        NgModule({
            declarations: ALL_DIRECTIVES,
            imports: [MediaQueriesModule],
            exports: [MediaQueriesModule].concat(ALL_DIRECTIVES),
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], FlexLayoutModule);
    return FlexLayoutModule;
}());

//# sourceMappingURL=_module.js.map

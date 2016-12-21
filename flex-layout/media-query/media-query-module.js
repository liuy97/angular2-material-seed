var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BreakPoints } from './break-points';
import { MediaQueries } from './media-queries';
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
/**
 *  Provider to return observable to ALL MediaQuery events
 */
export var MediaQueryObservableProvider = {
    provide: 'mediaQuery$',
    deps: [MediaQueries],
    useFactory: function (mq) { return mq.observe(); }
};
export var MediaQueriesModule = (function () {
    function MediaQueriesModule() {
    }
    MediaQueriesModule.forRoot = function () {
        return {
            ngModule: MediaQueriesModule,
            providers: [
                MediaQueryObservableProvider
            ]
        };
    };
    MediaQueriesModule = __decorate([
        NgModule({
            providers: [BreakPoints, MediaQueries]
        }), 
        __metadata('design:paramtypes', [])
    ], MediaQueriesModule);
    return MediaQueriesModule;
}());

//# sourceMappingURL=media-query-module.js.map

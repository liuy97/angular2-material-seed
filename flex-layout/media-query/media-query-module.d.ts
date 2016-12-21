import { ModuleWithProviders } from '@angular/core';
import { MediaQueries, MediaQueryChange } from './media-queries';
import { Observable } from "rxjs";
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
/**
 *  Provider to return observable to ALL MediaQuery events
 */
export declare const MediaQueryObservableProvider: {
    provide: string;
    deps: typeof MediaQueries[];
    useFactory: (mq: MediaQueries) => Observable<MediaQueryChange>;
};
export declare class MediaQueriesModule {
    static forRoot(): ModuleWithProviders;
}

import { OpaqueToken } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';
import { MatchMedia } from '../match-media';
/**
 *  Opaque Token unique to the flex-layout library.
 *  Note: Developers must use this token when building their own custom `MatchMediaObservableProvider`
 *  provider (see below).
 */
export declare const Media$: OpaqueToken;
/**
 *  Provider to return observable to ALL MediaQuery events
 *  Developers should build custom providers to override this default MediaQuery Observable
 */
export declare const MatchMediaObservableProvider: {
    provide: OpaqueToken;
    deps: (typeof BreakPointRegistry | typeof MatchMedia)[];
    useFactory: (mediaWatcher: MatchMedia, breakpoints: BreakPointRegistry) => Observable<any>;
};

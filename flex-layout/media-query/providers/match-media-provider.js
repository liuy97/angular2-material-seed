import { OpaqueToken } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { BreakPointRegistry } from '../breakpoints/break-point-registry';
import { MatchMedia } from '../match-media';
import { mergeAlias } from '../../utils/add-alias';
/**
 *  Opaque Token unique to the flex-layout library.
 *  Note: Developers must use this token when building their own custom `MatchMediaObservableProvider`
 *  provider (see below).
 */
export var Media$ = new OpaqueToken('fx-observable-media-query');
/**
 *  Provider to return observable to ALL MediaQuery events
 *  Developers should build custom providers to override this default MediaQuery Observable
 */
export var MatchMediaObservableProvider = {
    provide: Media$,
    deps: [MatchMedia, BreakPointRegistry],
    useFactory: function (mediaWatcher, breakpoints) {
        var onlyActivations = function (change) { return (change.matches === true); };
        var findBreakpoint = function (mediaQuery) { return breakpoints.findByQuery(mediaQuery); };
        var injectAlias = function (change) { return mergeAlias(change, findBreakpoint(change.mediaQuery)); };
        // Note: the raw MediaChange events [from MatchMedia] do not contain important alias information
        //       these must be injected into the MediaChange
        return mediaWatcher.observe().filter(onlyActivations).map(injectAlias);
    }
};

//# sourceMappingURL=match-media-provider.js.map

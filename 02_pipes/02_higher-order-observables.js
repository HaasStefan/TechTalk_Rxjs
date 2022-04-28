import { Observable, tap, of, concatMap } from "rxjs";

// watch out: of(1) is emitted now, meaning that the observable emits an observable which emits 1
const observable$ = new Observable(subscriber => {
    subscriber.next(of(1));
    subscriber.next(of(2));
    subscriber.next(of(3));
    subscriber.next(of(4));
    subscriber.complete();
});

observable$.pipe(
    tap(x$ => console.log(x$)),
).subscribe();

/*
    Output:
    Observable { _subscribe: [Function (anonymous)] }
    Observable { _subscribe: [Function (anonymous)] }
    Observable { _subscribe: [Function (anonymous)] }
    Observable { _subscribe: [Function (anonymous)] }
*/
console.log("---");

// <-- this does not seem to work as we might expect because we did not subscribe to the inner observables.
// but we can use certain pipe operators to subscribe to inner observables when piping.
// mergeMap (asynchronous), concatMap (synchronous), switchMap(synchronous but replacing)

observable$.pipe(
    concatMap(x$ => x$),
    tap(x => console.log(x)),
).subscribe();
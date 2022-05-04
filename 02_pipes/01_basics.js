import { Observable, tap, map, take, skip } from "rxjs";

const observable$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.complete();
});

// we can use pipe to chain multiple operators which are applied to the event stream
// tap is the most basic one, because it does not change the emitted data
// but you will see that we can change the emitted elements with other operators
observable$.pipe(
    tap(x => console.log(x)),
    tap(_ => console.log("An item has been emitted!"))
).subscribe();

/*
    Output:
    1
    An item has been emitted!
    2
    An item has been emitted!
    3
    An item has been emitted!
    4
    An item has been emitted!
*/
console.log("---");





observable$.pipe(
    map(x => x * 2),
    tap(x => console.log(x))
).subscribe();

/*
    Output:
    2
    4
    6
    8
*/
console.log("---");





observable$.pipe(
    map(x => x * 2),
    take(3),
    skip(1),
    tap(x => console.log(x))
).subscribe();

/*
    Output:
    4
    6
*/
console.log("---");



import { Observable, Subscription } from "rxjs";

const observable$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    // not all observables have a complete()
    // subscriber.complete();
});


observable$.subscribe(x => {
    console.log(x);
});

// --> this is dangerous because the observable is not completed and 
// the subscription is never closed due too that.

// solution:
let subscription = observable$.subscribe(x => {
    console.log(x);
});

subscription.unsubscribe();


// you can imagine this can bloat your code a lot when the number of subscriptions/observables increases

let subscriptions = new Subscription();

subscriptions.add(
    observable$.subscribe(x => {
        console.log(x);
    })
);

subscriptions.add(
    observable$.subscribe(x => {
        console.log(x);
    })
);

subscriptions.add(
    observable$.subscribe(x => {
        console.log(x);
    })
);

subscriptions.unsubscribe(); // this unsubscribes from all subscriptions stored in the variable

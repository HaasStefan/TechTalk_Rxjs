# Observables

## 01_Basics

An observable is used to emit some data using the `next`-function. The observable pushes each of the emitted elements at a time. But doing only that is not enough, because someone has to `subscribe` to the observable to receive each element at a time. 

The reason for that is the **PUSH**-principle, which more or less states that the Producer (Observable) is active, whereas the Consumer (Subscriber) is passive.

## 02_Concurrency

The best thing about observables: we can use it for parallel programming. The `subscribe`-funciton does not block the main thread and reacts to each emitted element inside of its callback function on another thread.

## 03_Subscriptions

Not all observables complete itself with the `complete`-function and this can be super dangerous because it can lead to memory leaks when observables never get "closed". In order to prevent this, we must manually unsubscribe from the observable. We do this by saving the subscription to the observable and later using the `unsubscribe`-method.

<code>
let subscription = observable$.subscribe(x => {
    console.log(x);
});
subscription.unsubscribe();
</code>

But be aware of the fact that only in rare cases we should save the subscriptions in variables and unsubscribe from each in the end. The reason for that is simply because when the number of subscriptions increases the code gets bloated with unnesseccary details.

To prevent that from happening we can make use of the `Subscription` class which comes with Rxjs and stores all subscriptions in one place - allowing to unsubscribe from all of its subscriptions at once.

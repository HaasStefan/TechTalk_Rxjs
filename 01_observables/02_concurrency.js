import { Observable } from "rxjs";

const observable$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 2000);
});


observable$.subscribe(x => {
    console.log(x);
});

console.log("Hello");

/*
    Output:
    1
    2
    3
    Hello
    4
*/
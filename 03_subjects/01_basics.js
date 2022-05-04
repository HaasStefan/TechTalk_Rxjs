import { Subject, BehaviorSubject, Observable } from 'rxjs';
 

const observable = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});

observable.subscribe({
  next: (v) => console.log(`Observable 1: ${v}`),
});
observable.subscribe({
  next: (v) => console.log(`Observable 2: ${v}`),
});

// Output:
// Observable 1: 1
// Observable 1: 2
// Observable 1: 3
// Observable 2: 1
// Observable 2: 2
// Observable 2: 3
console.log("---");




const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`Subject 1: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`Subject 2: ${v}`),
});

 
subject.next(1);
subject.next(2);

// Output:
// Subject 1: 1
// Subject 2: 1
// Subject 1: 2
// Subject 2: 2
console.log("---");




const behaviorSubject = new BehaviorSubject("initial value");

behaviorSubject.subscribe(data => console.log(data));

// notice that we did not manually emit any data with next()

// Output:
// inital value
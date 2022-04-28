import { Subject, BehaviorSubject } from 'rxjs';
 
const subject = new Subject();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
 
subject.next(1);
subject.next(2);

// Output:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
console.log("---");

const behaviorSubject = new BehaviorSubject("initial value");

behaviorSubject.subscribe(data => console.log(data));

// notice that we did not manually emit any data with next()

// Output:
// inital value
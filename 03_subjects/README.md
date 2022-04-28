# Subjects

## 01_Basics

#### Subjects

Subjects are a special type of observable which are multicast, instead of unicast (like observables).

In other words this means that a subject is similar to a singleton scope, whereas a plain observable is similar to a transient/scoped scope.

This mean that whenever we want to have multiple subscribers to the same observable and also receive the same emitted data, we need to use a subject instead.

#### Behaviour Subjects

Behaviour Subjects are just like Subjects but with the one minor difference that it has an initial value which is emitted immediately when subscribed to. 
This can be very helpful in Angular for example when we retrieve data from an observable that we use in the template. Instead of having an undefined value and the template probably crashing, we can start right away with an initial value. Even if this is a matter of seconds, it still has a tremendous impact.
# Pipes

## 01_Basics 

We can use the pipe method to apply various and as many operations to the event stream of an observable. Before subscribing we have to define the pipe funtion in which we than chain all the operators we want.

#### Operators:

| Name  | Usage  |
|---|---|
| tap  | whenever we want to react to an emitted element without changing it  |
| map  | whenever we want to modify the emitted element  |
| filter  | whenever we want to filter emitted elements  |
| take  | whenever we want want to make a cut after a certain amount of emitted elements  |
| skip  | whenever we want want to skip a certain amount of emitted elements  |
| ...  | ...  |

## 02_Higher-Order-Observables

Observables can be emitted as elements from an observable - we call those emitted observables "inner-observables" and the orinal observable the "outer-observable". To subscribe to an inner observable we can use certain pipe operators to subscribe to the inner observable. An important fact to notice is that the subscription to the inner-observable is automatically handled, so there is no extra need for unsubscribing from inner observables.

| Name  | Usage  |
|---|---|
| mergeMap  | subscribes to an observable in parallel to other subscriptions  |
| concatMap  | subscribes to one observable at a time and waits for the last one to be finsihed before starting a new subscription |
| switchMap  | replaces the current subscription with the inner observables subscription  |

These concepts are especially important in common cases where we make to dependend asynchronous api calls one after another. E.g. for a file-upload we would have an observable which requests a CheckExistanceStatus endpoint and maps the output with switchMap into an observable that reqeusts a Upload endpoint.
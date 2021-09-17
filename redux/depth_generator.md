#

The new features in ES6 is a new type of function, `a generator function`.

## Syntax

```js
function* myGeneratorFunc() {
  yield 1;
  yield 2;
}
```

You use `function*`. In the body, a new keyword, `yield` can be used to return a stream of values from the generator.

## Run..Stop..Run

With ES6 generators, which may be paused in the middle, one or many time, and resumed later, allowing other code to run during these paused periods.

Inside the generator function body, you use the new yield keyword to pause the function from inside itself. Nothing can pause a generator from the outside; it pauses itself when it comes across a `yield`.

However, once a generator has `yield`-paused itself, it cannot resume on its own. An external control must be used to restart the generator.

You send messages out with each `yield`, and you send messages back in with each restart.
## Glossary

`Effect`: 

- An effect is a plain JS object contain some instruction to be executed by the sage middleware.
- Ex: call(myfunc, 'arg1', 'arg2') to instruct middleware to invoke myfunc('arg1', 'arg2') and return the result back to the Generator that yielded the effect.

`Task`: 

- A task is like a process running in background.
- Ex: create tasks by using the `fork` function.

`Blocking vs non-blocking call`

- A blocking call means that the sage yielded an Effect and will wait for the outcome of its execution before to the next instruction inside the yielding Generator.
- A non-blocking call mean that the Sage will resume immediately after yielding the Effect.

`Watcher vs Worker`: a way of organizing the control flow using two separate Sagas.

- The watcher: will watch for dispatched actions and fork a worker on every action.
- The worker: will handle the action and terminate.


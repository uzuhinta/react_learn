# Giới thiệu tổng quan về Redux

1. Redux là gì? Kiến trúc

_redux is predictable state container for JS apps_

Sử dụng kiến trúc uni-direction data flow.

Kiến trúc:

-   Store
-   View
-   Action:
    -   JS object

2. Khi nào sử dụng

-   Dữ liệu sử dụng nhiều nơi
-   Có hỗ trợ chức năng undo/redo
-   Cần cache dữ liệu để tái sử dụng.

# Setup Redux trong React

Mô hình chia theo loại (còn cách khác chia theo feature)

src

-   reducer

    -   hobby.js
    -   todo.js
    -   ...
    -   index.js (root reducer: combine reducer)

-   action:

    -   hobby.js
    -   todo.js
    -   ...

-   pages

    -   HomePage/index.jsx (connect to redux )

-   store.js (reducer, init state, middlewares)
-   index.js (setup Store Provider)

1. Cài đặt package `react-redux` và `redux`
2. Setup reducers và root reducer
3. Setup redux store
4. Setup Store Provide cho toàn app
5. Connect vào redux từ react component

-   với Class component: dùng HOC connect();
-   với functional component: dùng hook useSelector() và useDispatch();

# Document

Redux is a predictable state container for JS apps.

## Motivation

## Three principles

`Single source of truth`: The global state of your application is stored in an object tree within a single store.

`State is read only`: The only way to change the state is to emit an action, an object describing what happened.

`Change are made with pure functions`: to specify how the state tree is transformed by action, you write pure reducers. Reducers are just pure function that take the previous state and an action, and return the next state. **Remember**: to return new state objects, instead of mutating the previous state.

## Glossary

`State` (also called the state tree):

-   It presents the entire state of a Redux application, which is often a deeply nested object.
-   By convention, the top-level state is an object or some other key-value collection like a Map, but technically it can be any type.

`Action`: A plain object that represents an intention to change the state.

-   Actions are the only way to get data into the store.
-   Actions must have a type field that indicates the type of action being performed.

`Reducer` (also called a reducing function):

```js
type Reducer<S, A> = (state: S, action: A) => S;
```

-   A function that accepts an accumulation and a value and return new accumulation.
-   They are used to reduce a collection of values down to a single value.
-   They must be pure function. ** Do not put API call into reducers **

`Dispatching function`:

- A function that accepts an action or an async action; it then may or maynot dispatch one ore more actions to the store.

`Action creator`

- A function that crates an action.

`Async action`

- is a value that is sent to a dispatching function, but is not yet ready for consumption by the reducer.

`Middleware`

- is a higher-order function that composes a dispatch function to return a new dispatch function. If often turn async action into action.

`Store`:

- `dispatch(action)`: base dispatch function described above
- `getState()`: return the current state of the store
- `subscribe()`: register a function to be called on the state changes.
- `replaceReducer(nextReducer)`

`Store creator`:

- A function that creates a redux store`

`Store enhancer`
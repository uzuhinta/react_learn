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


## Redux toolkit

Là thư viện giups viết redux tốt hơn, dễ hàng và đơn giản hơn

Giải quyết 3 vấn đề:

- Configuring a redux is too complicated
- T have to add a lot of packages to get redux to do anything useful.
- Redux requires to much boilerplate code.

## Redux toolkit gồn những gì?

`configureStore()`

- Có sẵn redux devtools.
- Có sẵn redux thunk để thực hiện async action

`createReducer()`

- mỗi key là một case
- không cần handle default case
- reducer có thể mutate data trực tiếp (bản chất bên dưới họ sử dụng thư viện Immerjs)

`createAction()`


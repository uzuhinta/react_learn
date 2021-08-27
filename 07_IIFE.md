# Immediately Invoked Function Expression

Mội biểu thức hàm, và hàm sẽ được thực thi ngay sau khi định nghĩa xong.

Cú pháp

```js
(function() {}){}

(function(){}())

(()=>{})()
```

Trường hợp sử dụng:

- Định nghĩa hàm chạy 1 lần
- Tránh sử dụng global variable.
- Tạo private variable hoặc method.


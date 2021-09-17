
## XHR

- Dạng callback


## Fetch 

- Là webAPI có sẵn trong trình duyệt
- Còn package là polifill

## Axios

- Sử dụng cả được trên browser và node.js
- Interceptors
- Cancel request
- Auto transform JSON data 

## Tổ chức API module

- Thiết lập một http client và đảm bảo tất cả các http request đều phải đi qua nó, nhằm mục đích xử lý các tác vụ chung như: 

  - Thêm common header
  - Attach thêm token và xử lý expired token.
  - Xử lý lỗi chung

Web app <--> API file (product, category, user, <>...) --> HTTP client (fetch, axios, XHR) --> Server

src
|__ api
|   |__ axiosClient.js
|   |__ productApi.js
|   |__ categoryApi.js
|   |__ ...
...

## Setup

.env save BASE_URL 

axios client + queryString lib

## so sánh cookie và token

|                  | Cookie          | Token                          |
|------------------|-----------------|--------------------------------|
| State            | Stateful server | Stateless server               |
| Scale            | Hard to achieve | Easy to scale                  |
| Controlleded by  | Server          | Client                         |
| Cross domain     | No              | Yes                            |
| Perform          | Bad             | Good                           |
| Mobile           | No              | Yes                            |
| Can contain data | No              | Yes                            |
| Size             | Tiny            | Can be as large your data grow |


# Photo app

## Setup env

1. Create app

```sh
npx create-react-app redux-photo-app
```

2. Add SCSS support

```sh
yarn add -D node-sass
```

3. Add react router dom

```sh
yarn add react-router-dom
```

4. Add UI lib

```sh
yarn add reactstrap
```

## Tổ chức folder theo feature

src
|__assets
|  |__images
|  |__styles (global styles)
|__components (shared component)
|__constant
   |__global.js
   |__images.js
|__features
   |__Photo
      |__components
      |  |__PhotoList
      |  |__PhotoCard
      |  |__PhotoForm
      |
      |__pages
      |  |__MainPage
      |  |__AddEditPage
      |__photoSlice.js
      |__index.js

## Tổ chức routing

- Sử dụng lazy load conponent
- Load theo feature

```js
// App.js
function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/photos" component={Photo}/>
            <Route path="/user" component={User}/>
            <Route component={NotFound} />
         </Switch>
      </BrowserRouter>
   );
}
```
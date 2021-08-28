import photoReducer from 'features/Photo/photoSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  photos: photoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

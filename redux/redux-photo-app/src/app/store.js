import photoReducer from 'features/Photo/photoSlice';
import authReducer from 'features/Auth/authSlice'
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  photos: photoReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

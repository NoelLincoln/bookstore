import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/bookSlice';
import categoriesReducer from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

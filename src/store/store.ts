import { combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import filterReducer from './reducers/filterSlice';

const rootReducer = combineReducers({
  productReducer,
  filterReducer

})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];


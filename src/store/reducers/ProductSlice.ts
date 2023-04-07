import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './ActionCreators';
import { RootState } from '../store';
import { IProduct } from '../../types/Product';

interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
  filteredProducts: IProduct[];
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: '',
  filteredProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.filteredProducts.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error loading';
    });
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;

export const init = createAsyncThunk('users/get', () => {
  return fetchUsers();
});

export const products = (state: RootState) =>
  state.productReducer.filteredProducts;
export const loading = (state: RootState) => state.productReducer.loading;
export const error = (state: RootState) => state.productReducer.error;

export default productSlice.reducer;
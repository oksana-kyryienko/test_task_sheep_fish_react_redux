import { IProduct } from "../../types/Product";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";
import { RootState } from "../store";

interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
  filteredProducts: IProduct[];
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
  filteredProducts: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByTitle: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        state.filteredProducts = state.products;
      } else {state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  filterByCategory: (state, action: PayloadAction<string>) => {
    if (action.payload === "") {
      state.filteredProducts = state.products;
    } else {
      state.filteredProducts = state.products.filter(
        (product) => product.category.toLowerCase() === action.payload.toLowerCase()
      );
    }
  },
  filterByPrice: (state, action: PayloadAction<number>) => {
    if (action.payload === null) {
      state.filteredProducts = state.products;
    } else {
      state.filteredProducts = state.products.filter((product) => product.price === action.payload);
    }
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
    state.error = "Error loading";
  });
},
});

export const { filterByTitle, filterByCategory, filterByPrice } = productSlice.actions;

export const init = createAsyncThunk("users/get", () => {
return fetchUsers();
});

export const products = (state: RootState) => state.productReducer.filteredProducts;
export const loading = (state: RootState) => state.productReducer.loading;
export const error = (state: RootState) => state.productReducer.error;

export default productSlice.reducer;







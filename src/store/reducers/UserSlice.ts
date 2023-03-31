import { IUser } from "./../../types/User";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";
import { RootState } from "../store";

interface UserState {
  users: IUser[];
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = "Error loading";
    });
  },
});

export const init = createAsyncThunk("users/get", () => {
  return fetchUsers();
});

export const users = (state: RootState) => state.userReducer.users;
export const loading = (state: RootState) => state.userReducer.loading;
export const error = (state: RootState) => state.userReducer.error;

export default userSlice.reducer;
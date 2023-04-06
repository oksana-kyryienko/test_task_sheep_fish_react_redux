import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface FilterState {
  currentId: number; 
  filter: string;
}

const initialState: FilterState = {
  currentId: 0,
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;


export const selectCurrentId = (state: RootState) => state.filterReducer.currentId;
export const selectFilter = (state: RootState) => state.filterReducer.filter;

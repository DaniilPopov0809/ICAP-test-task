import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterTable: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
      
    },
  },
});

export const { filterTable } = filterSlice.actions;

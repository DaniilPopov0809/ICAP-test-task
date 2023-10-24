import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tableOperation } from "./operations";
import { ITable, InitialState } from "../../types/table";
// import { ITable } from "../../types/table";
// import { toast } from "react-toastify";



const initialState: InitialState = {
  table: [],
  status: "idle"
};
export const tableSlice = createSlice({
  name: "table",
  initialState,

  reducers: {},
  extraReducers: (builder) => builder
    .addCase(tableOperation.getTable.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(tableOperation.getTable.fulfilled, (state, action: PayloadAction<ITable[]>) => {
      state.status = 'idle';
      state.table = action.payload;
    })
    .addCase(tableOperation.getTable.rejected, (state) => {
      state.status = 'failed';
    }),
});


export default tableSlice.reducer;
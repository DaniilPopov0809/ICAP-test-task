import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tableOperation } from "./operations";
import { ITable, InitialState } from "../../types/table";
// import { ITable } from "../../types/table";
import { toast } from "react-toastify";
import { handleErrors } from "../../helpers";

const initialState: InitialState = {
  table: [],
  tableEl: null,
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
    .addCase(tableOperation.getTable.rejected, (state, action: PayloadAction<number | undefined>) => {
      state.status = 'failed';
      toast.error(handleErrors(action.payload as number));
    })
    .addCase(tableOperation.getById.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(tableOperation.getById.fulfilled, (state, action: PayloadAction<ITable>) => {
      state.status = 'idle';
      state.tableEl = action.payload;
    })
    .addCase(tableOperation.getById.rejected, (state, action: PayloadAction<number | undefined>) => {
      state.status = 'failed';
      toast.error(handleErrors(action.payload as number));
    })
    .addCase(tableOperation.removeFromTable.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(tableOperation.removeFromTable.fulfilled, (state, action: PayloadAction<ITable>) => {
      state.status = 'idle';
      const index = state.table.findIndex(
        el => el.id === action.payload.id
      );
      state.table.splice(index, 1);
    })
    .addCase(tableOperation.removeFromTable.rejected, (state, action: PayloadAction<number | undefined>) => {
      state.status = 'failed';
      toast.error(handleErrors(action.payload as number));
    })
    .addCase(tableOperation.addToTable.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(tableOperation.addToTable.fulfilled, (state, action: PayloadAction<ITable>) => {
      state.status = 'idle';
      state.table.push(action.payload);
    })
    .addCase(tableOperation.addToTable.rejected, (state, action: PayloadAction<number | undefined>) => {
      state.status = 'failed';
      toast.error(handleErrors(action.payload as number));
    })
    .addCase(tableOperation.updateTable.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(tableOperation.updateTable.fulfilled, (state, action: PayloadAction<Partial<ITable>>) => {
      state.status = 'idle';
      const index = state.table.findIndex(
        el => el.id === action.payload.id
      );
      state.table[index] = {...state.table[index], ...action.payload};
    })
    .addCase(tableOperation.updateTable.rejected, (state, action: PayloadAction<number | undefined>) => {
      state.status = 'failed';
      toast.error(handleErrors(action.payload as number));
    }),
});


export default tableSlice.reducer;
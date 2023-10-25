import { ITable } from "../../types/table";
import { createSelector } from '@reduxjs/toolkit';

export const selectStatusTable = (state: {table: { status: string } }) => state.table.status;
export const selectDataTable = (state: {table: { table: ITable[]} }) => state.table.table;
export const selectCountTable = (state: {table: { count: number} }) => state.table.count;
export const selectTableEl = (state: {table: { tableEl: ITable | null} }) => state.table.tableEl;
export const selectFilter = (state: {filter: {filter: string}}) => state.filter.filter;

 export const selectVisibleRaw = createSelector(
    [selectDataTable, selectFilter],
    (tableData, filter) => {
      return tableData.filter(data =>
        data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
  );
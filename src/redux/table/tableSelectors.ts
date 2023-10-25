import { ITable } from "../../types/table";

export const selectStatusTable = (state: {table: { status: string } }) => state.table.status;
export const selectDataTable = (state: {table: { table: ITable[]} }) => state.table.table;
export const selectCountTable = (state: {table: { count: number} }) => state.table.count;
export const selectTableEl = (state: {table: { tableEl: ITable | null} }) => state.table.tableEl;
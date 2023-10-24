import { ITable } from "../../types/table";

export const selecStatusTable = (state: {table: { status: string } }) => state.table.status;
export const selecDataTable = (state: {table: { table: ITable[]} }) => state.table.table;
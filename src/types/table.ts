export interface ITable {
    id: number;
    name: string;
    birthday_date: string;
    email: string;
    phone_number: string;
    address: string;
}

export interface InitialState {
    table: ITable[];
    tableEl: ITable | null;
    next: string | null,
    previous: string | null,
    count: number | null,
    status: "idle" | "loading" | "failed",
}

export type IGetResponceTable = Omit<InitialState,  'tableEl' | 'status' | 'table'> & {results: ITable[]};

export type InitialValuesTableForm = Omit<ITable, 'id'>; 
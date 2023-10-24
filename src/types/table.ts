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
    nextPage: string | null,
    prevPage: string | null,
    count: number | null,
    status: "idle" | "loading" | "failed",
}

export type IGetResponceTable = Omit<InitialState,  'tableEl' | 'status' | 'table'> & {results: ITable[]};

// export type IGetResponceTable = {
//     results: ITable[];
//     nextPage: string | null,
//     prevPgae: string | null,
//     count: string | null,
// }
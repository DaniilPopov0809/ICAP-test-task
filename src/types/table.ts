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
    status: "idle" | "loading" | "failed",
}

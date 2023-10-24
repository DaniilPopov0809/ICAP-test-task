export interface InitialState {
    isLoggedIn: boolean,
    status: "idle" | "loading" | "failed",
}

export interface InitialValues {
    username: string;
    password: string;
}
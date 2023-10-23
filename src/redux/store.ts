import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice";
import tableReducer from "./table/tableSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
    auth: authReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
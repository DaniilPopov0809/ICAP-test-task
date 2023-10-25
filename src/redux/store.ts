import { configureStore, ThunkAction, Action, Reducer } from "@reduxjs/toolkit"
import { InitialState } from "../types/auth";
import { authSlice } from "./auth/authSlice";
import { filterSlice } from "./table/filterSlice";
import tableReducer from "./table/tableSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage
};

export const store = configureStore({
  reducer: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    auth: persistReducer(persistConfig, authSlice.reducer) as Reducer<InitialState & { _persist: any }, Action>,
    table: tableReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
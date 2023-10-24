import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authOperation } from "./operations";
import { InitialState } from "../../types/auth";
import { toast } from 'react-toastify';

const initialState: InitialState = {
  isLoggedIn: false,
  status: "idle"
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
      toast.success('You have left the Matrix.');
    },
  },
  extraReducers: (builder) => builder
    .addCase(authOperation.login.pending, state => state)
    .addCase(authOperation.login.fulfilled, (state) => {
      // if (action.payload.status === 200) {
        state.isLoggedIn = true;
        toast.success('Welcome to the Matrix, Neo.');
      // } else {
      //   toast.error('The Matrix awaits you. Try again.');
      // }
    })
    .addCase(authOperation.login.rejected, (state) => {
      state.status = 'failed';
    }),
});

export const { logout } = authSlice.actions;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authOperation } from "./operations";
import { InitialState } from "../../types/auth";
import { toast } from 'react-toastify';
import { handleErrors } from "../../helpers";

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
    .addCase(authOperation.login.pending, state => {
      state.status = 'loading'})
    .addCase(authOperation.login.fulfilled, (state) => {
      state.status = 'idle';  
      state.isLoggedIn = true;
        toast.success('Welcome to the Matrix, Neo.');
    })
    .addCase(authOperation.login.rejected, (state, action: PayloadAction<number| undefined>) => {
      state.status = 'failed';
      if (action.payload){
        toast.error(handleErrors(action.payload));
      }
      else {
        toast.error('Unknown Error');
      }
    }),
});

export const { logout } = authSlice.actions;
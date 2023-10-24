import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData } from '../../../types/common';
import { InitialValues } from '../../../types/auth';
const { VITE_BASE_URL } = import.meta.env;

axios.defaults.baseURL = VITE_BASE_URL;

const login = createAsyncThunk<IData, InitialValues, { rejectValue: number }>('auth/login', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/login/', credentials);

        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default login;
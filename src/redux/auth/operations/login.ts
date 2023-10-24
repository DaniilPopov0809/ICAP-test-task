import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData } from '../../../types/common';
import { InitialValues } from '../../../types/auth';
const { VITE_BASE_URL } = import.meta.env;

axios.defaults.baseURL = VITE_BASE_URL;



interface IError {
    message: string
}

const login = createAsyncThunk<IData, InitialValues, { rejectValue: IError }>('auth/login', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/login/', credentials);

        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default login;
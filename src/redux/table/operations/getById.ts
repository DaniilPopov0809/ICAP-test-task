import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';


const getById = createAsyncThunk<ITable, number, { rejectValue: number }>('table/getById', async (id, thunkAPI) => {
    try {
        const {data} = await axios.get(`/table/${id}`);
        return data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default getById;
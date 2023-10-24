import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';


const getTable = createAsyncThunk<ITable[], undefined, { rejectValue: number}>('table/getTable', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/table/');
        return data.results;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default getTable;
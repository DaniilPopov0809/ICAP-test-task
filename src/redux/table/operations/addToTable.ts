import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';


const addToTable = createAsyncThunk<ITable, Omit<ITable, 'id'>, { rejectValue: number }>('table/addToTable', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post(`/table/`, credentials);
        return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default addToTable;
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';


const updateTable = createAsyncThunk<ITable, Partial<ITable>, { rejectValue: number }>('table/update', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.patch(`/table/${credentials.id}`, credentials);
        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default updateTable;
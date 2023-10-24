import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';



const removeFromTable = createAsyncThunk<ITable, number, { rejectValue: number }>('table/delete', async (id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/table/${id}`);
        return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default removeFromTable;
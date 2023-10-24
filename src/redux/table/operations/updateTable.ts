import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';
import { IError } from '../../../types/common';


const updateTable = createAsyncThunk<ITable, Partial<ITable>, { rejectValue: IError }>('table/update', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.patch(`/table/${credentials.id}`, credentials);
        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default updateTable;
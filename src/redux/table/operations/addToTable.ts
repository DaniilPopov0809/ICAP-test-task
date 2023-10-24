import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';
import { IError } from '../../../types/common';


const addToTable = createAsyncThunk<ITable, Omit<ITable, 'id'>, { rejectValue: IError }>('table/getById', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post(`/table/`, credentials);
        return data.result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default addToTable;
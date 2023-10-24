import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';
import { IError } from '../../../types/common';


const removeFromTable = createAsyncThunk<ITable, number, { rejectValue: IError }>('table/delete', async (id, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/table/${id}`);
        return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default removeFromTable;
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';
import { IError } from '../../../types/common';


const getTable = createAsyncThunk<ITable[], undefined, { rejectValue: IError }>('table/getTable', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/table/');
        console.log("🚀 ~ file: getTable.ts:10 ~ getTable ~ data:", data)

        return data.result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default getTable;
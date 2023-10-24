import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITable } from '../../../types/table';
import { IError } from '../../../types/common';


const getById = createAsyncThunk<ITable, number, { rejectValue: IError }>('table/getById', async (id, thunkAPI) => {
    try {
        const {data} = await axios.get(`/table/${id}`);
        return data.result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export default getById;
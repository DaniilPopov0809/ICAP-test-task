import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGetResponceTable } from '../../../types/table';

type IRequest = {
    limit: number;
    offset: number;
}

const getTable = createAsyncThunk<IGetResponceTable, IRequest, { rejectValue: number}>('table/getTable', async ({limit, offset}, thunkAPI) => {
    try {
        const {data} = await axios.get(`/table/?limit=${limit}&offset=${offset}`);
        return data ;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        const status = error?.response?.status || 500;
        return thunkAPI.rejectWithValue(status);
    }
});

export default getTable;
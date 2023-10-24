export const addContact = createAsyncThunk(
    "constacts/addContact",
    async ({name, number}, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name, number});
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
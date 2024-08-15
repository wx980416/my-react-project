import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    produceList: [],
  },
  reducers: {},
});

export default homeSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/greetings';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', () => {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(json => json);
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default greetingSlice.reducer;
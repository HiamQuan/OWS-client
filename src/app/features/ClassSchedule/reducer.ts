import {createSlice} from '@reduxjs/toolkit';

type ClassCalendarPageState = {};

const initialState: ClassCalendarPageState = {};

const homeSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;

import { Task } from '@/app/dashboard/tasks/data/schema';
import { createSlice } from '@reduxjs/toolkit';

export const weChatBillSlice = createSlice({
  name: 'weChat_bill',
  initialState: {
    data: [] as Task[],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = weChatBillSlice.actions;

export default weChatBillSlice.reducer;

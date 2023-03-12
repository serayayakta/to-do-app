import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: [
    { header: "Grocery", status: "done" },
    { header: "Reading", status: "in progress" },
    { header: "Meditation", status: "to do" },
    { header: "Laundry", status: "to do" },
  ],
  reducers: {
    addItem: (state, action) => {
      const item = {
        header: action.payload.header,
        status: "to do",
      };

      state.push(item);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.header !== action.payload.header);
    },
    updateStatus: (state, action) => {
      const index = state.findIndex(
        (item) => item.header === action.payload.header
      );
      state[index].status = action.payload.status;
    },
  },
});

export const { addItem, removeItem, updateStatus } = listSlice.actions;

export default listSlice.reducer;

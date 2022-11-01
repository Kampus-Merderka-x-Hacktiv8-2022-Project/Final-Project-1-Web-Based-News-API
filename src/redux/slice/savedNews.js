import { createSlice } from "@reduxjs/toolkit";

export const savedNewsSlice = createSlice({
  name: "savedNews",
  initialState: [],
  reducers: {
    addNews: (state, action) => {
      return[action.payload, ...state];
    },
    deleteNews: (state, action) => {
      return state.filter((e) => e.url !== action.payload);
    },
  },
});

export const { addNews, deleteNews } = savedNewsSlice.actions;
export default savedNewsSlice.reducer;

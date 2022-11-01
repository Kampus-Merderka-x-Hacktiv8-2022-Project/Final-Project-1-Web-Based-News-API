import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { monthAgo } from "utils/date";

const newsApiURL = `https://newsapi.org/v2`;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const initialState = {
  entities: {},
};

export const fetchNewsQuery = createAsyncThunk(
  "news/fetchByQuery",
  async (search) => {
    const newsData = await fetch(
      `${newsApiURL}/everything?q=${search}&pageSize=24&from=${monthAgo}&apiKey=${newsApiKey}`
    )
      .then((response) => response.json())
      .then((response) => response.articles);
    return { search, newsData };
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNewsQuery.pending, () => {
        console.log("Loading ...");
      })
      .addCase(fetchNewsQuery.fulfilled, (state, action) => {
        if (
          action.payload.search === "programming" ||
          action.payload.search === "covid"
        ) {
          state.entities = {
            ...state.entities,
            [action.payload.search]: action.payload.newsData,
          };
        } else {
          state.entities = {
            ...state.entities,
            search: action.payload.newsData,
          };
        }
      })
      .addCase(fetchNewsQuery.rejected, () => {
        console.log("Fail to get data");
      });
  },
});

export default newsSlice.reducer;

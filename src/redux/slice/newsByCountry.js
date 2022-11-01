import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const newsApiURL = `https://newsapi.org/v2`;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const initialState = {
  entities: [],
};

export const fetchNewsByCountry = createAsyncThunk(
  "news/fetchByCountry",
  async (countryId) => {
    const newsData = await fetch(
      `${newsApiURL}/top-headlines?country=${countryId}&apiKey=${newsApiKey}`
    )
      .then((response) => response.json())
      .then((response) => response.articles);
    return newsData;
  }
);

const newsCountrySlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNewsByCountry.pending, () => {
        console.log("Loading ...");
      })
      .addCase(fetchNewsByCountry.fulfilled, (state, action) => {
        state.entities = action.payload;
      })
      .addCase(fetchNewsByCountry.rejected, () => {
        console.log("Fail to get user data");
      });
  },
});

export default newsCountrySlice.reducer;

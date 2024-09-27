import { PAGE_SIZE } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "./types";

interface State {
  news: INews[];
  filters: IFilters;
  currentNews: null | INews;
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

type IFiltersActionValue = string | null | number;

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    getCurrentNews: (state, action: PayloadAction<INews | null>) => {
      state.currentNews = action.payload;
    },
    getFilters: (
      state,
      action: PayloadAction<{ key: string; value: IFiltersActionValue }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { getFilters, getCurrentNews, getNews } = newsSlice.actions;
export default newsSlice.reducer;

import { PAGE_SIZE } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "./types";

interface State {
  news: INews[];
  filters: IFilters;
}

const initialState: State = {
  news: [],
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
    getFilters: (
      state,
      action: PayloadAction<{ key: string; value: IFiltersActionValue }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { getFilters } = newsSlice.actions;

export default newsSlice.reducer;

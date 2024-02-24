import { configureStore } from "@reduxjs/toolkit";
import { entriesReducer, entriesSlice } from "../entries/list/entrySlice";
import { emotionsReducer, emotionsSlice } from "../entries/entry/emotionSlice";
import { dateReducer, dateSlice } from "../entries/entry/dateSlice";

export const store = configureStore({
   reducer: {
      entries: entriesReducer,
      emotions: emotionsReducer,
      date: dateReducer,
   },
});

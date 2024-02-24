import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
   name: "date",
   initialState: {
      yearArray: ["2024"],
      monthArray: [],
   },
   reducers: {
      addMonth: (state, action) => {
         state.entriesArray.push(action.payload);
         console.log("Added emotion");
      },
   },
});

export const dateReducer = dateSlice.reducer;
export const { addMonth } = dateSlice.actions;

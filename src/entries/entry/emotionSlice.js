import { createSlice } from "@reduxjs/toolkit";

export const emotionsSlice = createSlice({
   name: "emotions",
   initialState: {
      emotionArray: ["sad", "frustrated", "angry", "scared"],
   },
   reducers: {
      addEmotion: (state, action) => {
         state.entriesArray.push(action.payload);
         console.log("Added emotion");
      },
   },
});

export const emotionsReducer = emotionsSlice.reducer;
export const { addEmotion } = emotionsSlice.actions;

export const selectAllEmotions = (state) => {
   return state.emotions.emotionsArray;
};

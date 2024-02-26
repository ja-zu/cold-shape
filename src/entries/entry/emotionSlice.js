import { createSlice } from "@reduxjs/toolkit";

export const emotionsSlice = createSlice({
   name: "emotions",
   initialState: {
      emotionArray: ["sad", "frustrated", "angry", "scared"],
   },
   reducers: {
      addEmotion: (state, action) => {
         if (!state.emotionArray.includes(action.payload)) {
            // Add the new emotion to the array
            state.emotionArray.push(action.payload);
            console.log("Added emotion");
         } else {
            console.log("Emotion already exists!");
         }
      },
   },
});

export const emotionsReducer = emotionsSlice.reducer;
export const { addEmotion } = emotionsSlice.actions;

export const selectAllEmotions = (state) => {
   return state.emotions.emotionArray;
};

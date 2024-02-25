export const validateForm = (values) => {
   const { event, date, title, thought, emotion, altThought, emotionTag } =
      values;
   const errors = {};
   if (!event) {
      errors.event = "Do not leave blank";
   }
   if (!date) {
      errors.date = "Select a date";
   }
   if (!title) {
      errors.title = "Input a title for your entry";
   }
   if (!thought) {
      errors.thought = "Put in your thoughts";
   }
   if (!emotion) {
      errors.emotion = "Descbribe your feelings";
   }
   if (!altThought) {
      errors.altThought = "Think of an alternative thought to your situation";
   }
   if (!emotionTag) {
      errors.emotionTag = "Set a mood tag for your entry";
   }
   return errors;
};

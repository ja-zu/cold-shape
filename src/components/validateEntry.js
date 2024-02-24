export const validateForm = (values) => {
   const errors = {};
   if (!values.event) {
      errors.field = "Do not leave blank";
   }
   if (!values.date) {
      errors.field = "Select a date";
   }
   if (!values.title) {
      errors.field = "Input a title for your entry";
   }
   if (!values.thought) {
      errors.field = "Put in your thoughts";
   }
   if (!values.emotion) {
      errors.field = "Descbribe your feelings";
   }
   if (!values.altThought) {
      errors.field = "Think of an alternative thought to your situation";
   }
   if (!values.emotionTag) {
      errors.field = "Select a tag for your mood";
   }
   return errors;
};

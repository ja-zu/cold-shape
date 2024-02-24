import { Container, Row, Button } from "reactstrap";
import { Field } from "formik";
import { useState } from "react";

export const EntryEvent = () => {
   return (
      <Row>
         <h2>The initial situation</h2>
         <label>
            <p>
               Write down the what happened to make you think negatively about
               yourself or the situation.
            </p>
         </label>
         <Field
            name="event"
            component="textarea"
            rows="12"
            placeholder="Events"
            className="form-control form-set"
         />
      </Row>
   );
};

export const EntryThoughts = () => {
   return (
      <Row>
         <h2>Your thoughts during this event</h2>
         <label>
            <p>
               What negative and unhelpful thoughts did this event make you
               feel?
            </p>
         </label>
         <Field
            name="thought"
            component="textarea"
            rows="12"
            placeholder="Thoughts"
            className="form-control form-set"
         />
      </Row>
   );
};

export const EntryEmotions = () => {
   return (
      <Row>
         <h2>What you felt</h2>
         <label>
            <p>What did your negative thoughts make you feel?</p>
         </label>
         <Field
            name="emotion"
            component="textarea"
            rows="12"
            placeholder="Emotions"
            className="form-control form-set"
         />
      </Row>
   );
};
export const TagEmotion = () => {
   const [addTag, addTagSet] = useState(false);
   const addNewTag = () => {
      !addTag ? (
         <Field name="addTag">{console.log("addTag")}</Field>
      ) : (
         <p>{console.log("NotaddTag")}</p>
      );
   };
   return (
      <Row>
         <h2>Tag this entry with your primary mood</h2>
         <p>
            <Field as="select" name="emotionTag">
               <option value={null}>Select an emotion</option>
               <option value="sad">Sad</option>
               <option value="angry">Angry</option>
               <option value="frustrated">Frustrated</option>
               <option value="scared">Scared</option>
               <option
                  value="add"
                  onClick={() => {
                     addTagSet(true);
                     addNewTag();
                  }}
               >
                  Add another tag
               </option>
            </Field>
         </p>
      </Row>
   );
};

export const EntryAltThoughts = () => {
   return (
      <Row>
         <h2>The alternate thought</h2>
         <label>
            <p>
               Think an alternative situation and evidence that contradicts your
               initial negative thought.
            </p>
         </label>
         <Field
            name="altThought"
            component="textarea"
            rows="12"
            placeholder="Alternate Thoughts"
            className="form-control form-set"
         />
      </Row>
   );
};

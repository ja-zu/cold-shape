import { Label, Row, Button, FormGroup, Col } from "reactstrap";
import { Field, ErrorMessage } from "formik";
import { useState } from "react";
import { addEmotion, selectAllEmotions } from "../entries/entry/emotionSlice";
import { useDispatch, useSelector } from "react-redux";

export const EntryEvent = () => {
   return (
      <Row>
         <h2>The initial situation</h2>
         <label htmlFor="event">
            Write down the what happened to make you think negatively about
            yourself or the situation.
         </label>
         <Field
            name="event"
            component="textarea"
            rows="12"
            placeholder="Events"
            className="form-control form-set"
         />
         <ErrorMessage name="event">
            {(msg) => <p className="text-danger">{msg}</p>}
         </ErrorMessage>
      </Row>
   );
};

export const EntryThoughts = () => {
   return (
      <Row>
         <h2>Your thoughts during this event</h2>
         <label htmlFor="thought">
            What negative and unhelpful thoughts did this event make you feel?
         </label>
         <Field
            name="thought"
            component="textarea"
            rows="12"
            placeholder="Thoughts"
            className="form-control form-set"
         />
         <ErrorMessage name="thought">
            {(msg) => <p className="text-danger">{msg}</p>}
         </ErrorMessage>
      </Row>
   );
};

export const EntryEmotions = () => {
   return (
      <Row>
         <h2>What you felt</h2>
         <label htmlFor="emotion">
            <p>What did your negative thoughts make you feel?</p>
         </label>
         <Field
            name="emotion"
            component="textarea"
            rows="12"
            placeholder="Emotions"
            className="form-control form-set"
         />
         <ErrorMessage name="emotion">
            {(msg) => <p className="text-danger">{msg}</p>}
         </ErrorMessage>
      </Row>
   );
};
export const TagEmotion = () => {
   const dispatch = useDispatch();
   const emotions = useSelector(selectAllEmotions);
   const [addNewEmotion, setAddNewEmotion] = useState(false);
   const [addEmotionName, setEmotionName] = useState(null);
   const handleSubmit = (e) => {
      if (addEmotionName) {
         dispatch(addEmotion(addEmotionName));
         setAddNewEmotion(false);
      }
   };
   return (
      <Row>
         <h2>Tag this entry with your primary mood</h2>
         <Label htmlFor="emotionTag">Choose a tag</Label>
         <Field as="select" name="emotionTag">
            <option value={null}>Select an emotion</option>
            {emotions.map((emotion) => (
               <option value={emotion}>{emotion}</option>
            ))}

            <option
               value="new"
               onClick={() => {
                  setAddNewEmotion(true);
               }}
            >
               Add a new tag
            </option>
         </Field>
         {addNewEmotion ? (
            <>
               <Row className="addNewEmotion">
                  <Col className="col-8">
                     <Label>Add your new tag here</Label>
                     <input
                        name="addEmotionField"
                        onBlur={(e) => {
                           setEmotionName(e.target.value.toLowerCase());
                        }}
                     />
                  </Col>
                  <Col className="col-2">
                     <Button className="btn" onClick={handleSubmit}>
                        Add tag
                     </Button>
                  </Col>
                  <Col className="col-2">
                     <Button onClick={() => setAddNewEmotion(false)}>
                        Cancel
                     </Button>
                  </Col>
               </Row>
            </>
         ) : (
            <span></span>
         )}
         <ErrorMessage name="emotionTag">
            {(msg) => <p className="text-danger">{msg}</p>}
         </ErrorMessage>
      </Row>
   );
};

export const EntryAltThoughts = () => {
   return (
      <Row>
         <h2>The alternate thought</h2>
         <label htmlFor="altThought">
            Think an alternative situation and evidence that contradicts your
            initial negative thought.
         </label>
         <Field
            name="altThought"
            component="textarea"
            rows="12"
            placeholder="Alternate Thoughts"
            className="form-control form-set"
         />
         <ErrorMessage name="altThought">
            {(msg) => <p className="text-danger">{msg}</p>}
         </ErrorMessage>
      </Row>
   );
};

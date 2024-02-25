import { Row } from "reactstrap";
import { Field, ErrorMessage } from "formik";

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
   return (
      <Row>
         <h2>Tag this entry with your primary mood</h2>
         <Field as="select" name="emotionTag">
            <option value={null}>Select an emotion</option>
            <option value="sad">Sad</option>
            <option value="angry">Angry</option>
            <option value="frustrated">Frustrated</option>
            <option value="scared">Scared</option>
         </Field>
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

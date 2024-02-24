import { Container, Row, Col, Label, FormGroup, Button } from "reactstrap";
import { Formik, Form, Field } from "formik";
import {
   EntryAltThoughts,
   EntryEmotions,
   EntryEvent,
   EntryThoughts,
   TagEmotion,
   UpdateEntries,
} from "../components/EntryForm";
import { useDispatch } from "react-redux";
import { addEntry } from "../entries/list/entrySlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../components/validateEntry";

const NewEntry = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const idTag = () => Date.now().toString(36); //sets id according to date
   const dispatch = useDispatch();
   const timer = (ms) => new Promise((r) => setTimeout(r, ms));
   const navigate = useNavigate();
   return (
      <Container>
         <Row>
            <h1>New Entry</h1>
         </Row>
         <Formik
            initialValues={{
               id: idTag(),
               title: "",
               date: "",
               event: "",
               thought: "",
               emotion: "",
               emotionTag: "",
               altThought: "",
            }}
            onSubmit={async (values) => {
               if (!isSubmitting) {
                  setIsSubmitting(true);
                  dispatch(addEntry(values));
                  console.log(values);
                  await timer(5000);
                  navigate("/");
               }
            }}
            validate={validateForm}
         >
            <Form>
               <FormGroup>
                  <Label>Title</Label>
                  <Field name="title" />
               </FormGroup>
               <FormGroup>
                  <Label>Date</Label>
                  <Field type="date" name="date" />
               </FormGroup>
               <EntryEvent />
               <EntryThoughts />
               <EntryEmotions />
               <EntryAltThoughts />
               <TagEmotion />
               {isSubmitting ? (
                  <p style={{ fontSize: "150%" }}>
                     Your submission has been logged!
                  </p>
               ) : (
                  <p></p>
               )}
               <Row className="justify-content-center">
                  <Button className="justify-content-center" type="submit">
                     Log Entry
                  </Button>
               </Row>
            </Form>
         </Formik>
      </Container>
   );
};
export default NewEntry;

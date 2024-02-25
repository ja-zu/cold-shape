import { Container, Row, Label, FormGroup, Button } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
   EntryAltThoughts,
   EntryEmotions,
   EntryEvent,
   EntryThoughts,
   TagEmotion,
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
                  await timer(50);
                  navigate("/status", { state: { message: "add" } });
               }
            }}
            validate={validateForm}
         >
            <Form>
               <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Field name="title" />
                  <ErrorMessage name="title">
                     {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
               </FormGroup>
               <FormGroup>
                  <Label htmlFor="date">Date</Label>
                  <Field type="date" name="date" />
                  <ErrorMessage name="date">
                     {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
               </FormGroup>
               <EntryEvent />
               <EntryThoughts />
               <EntryEmotions />
               <EntryAltThoughts />
               <TagEmotion />
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

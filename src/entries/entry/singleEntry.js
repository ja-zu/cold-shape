import { Container, Row, Button } from "reactstrap";
import { selectEntryId } from "../list/entrySlice";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry } from "../list/entrySlice";

const SingleEntry = () => {
   const { id } = useParams();
   const entry = useSelector(selectEntryId(id));
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const submit = () => {
      dispatch(deleteEntry(id));
      navigate("/");
   };
   const { title, date, event, thought, emotion, emotionTag, altThought } =
      entry;

   return (
      <Container className="mt-2 singleEntry">
         <Row>
            <h1>{title}</h1>
            <p>{date}</p>
         </Row>
         <Row>
            <h2>Event</h2>
            <p>{event}</p>
            <h2>Thoughts</h2>
            <p>{thought}</p>
            <h2>Emotions Felt</h2>
            <p>{emotion}</p>
            <h2>Alternate Thoughts</h2>
            <p>{altThought}</p>
         </Row>
         <Row>
            <Button
               onClick={() => {
                  submit();
               }}
            >
               Delete entry
            </Button>
         </Row>
      </Container>
   );
};
export default SingleEntry;

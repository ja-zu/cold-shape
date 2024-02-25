import { Container, Row, Button, Col } from "reactstrap";
import { selectEntryId } from "../list/entrySlice";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import EmotionImages from "../../features/EmotionImage";

const SingleEntry = () => {
   const { id } = useParams();
   const entry = useSelector(selectEntryId(id));
   const navigate = useNavigate();
   const submit = () => {
      navigate("/status", { state: { id: id, message: "delete" } });
   };
   const { title, date, event, thought, emotion, emotionTag, altThought } =
      entry;

   return (
      <Container className="mt-2 singleEntry">
         <Row>
            <Col className="col-8">
               <h1>{title}</h1>
               <p>{date}</p>
            </Col>
            <Col className="col-2">
               <EmotionImages emotionTag={emotionTag} />
            </Col>
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

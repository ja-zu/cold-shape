import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import EmotionImage from "../../features/EmotionImage";

const EntriesCard = ({ entry }) => {
   const { id, date, title, event, thought, emotion, emotionTag, altThought } =
      entry;

   const summary = event;
   return (
      <Row>
         <Col className="col-10 col-sm-10">
            <h2>
               <Link to={`/entries/${id}`}>{title}</Link>
            </h2>
            <p>{date}</p>
         </Col>
         <Col className="col-2 col-sm-2">
            <EmotionImage emotionTag={emotionTag} />
         </Col>
         <p>{summary.length > 150 ? summary.slice(0, 150) + "..." : summary}</p>
      </Row>
   );
};

export default EntriesCard;

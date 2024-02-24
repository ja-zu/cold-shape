import { Container, Row, Button } from "reactstrap";
import {
   selectAllEntries,
   selectLatestEntry,
} from "../entries/list/entrySlice";
import EntriesCard from "../entries/list/EntriesCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
   const entry = useSelector(selectLatestEntry);
   return (
      <Container>
         <Row>
            <h1>Think Rec</h1>
            <p>
               Practice the cognitive behavioural therapy (CBT) exercise known
               as thought records!
            </p>
            <p>
               Use this app to log your thought record entries and view your
               entries by date and set tags.
            </p>
            <p>
               Learn more about thought records and this app,{" "}
               <Link to="about">click here.</Link>
            </p>
         </Row>
         <Row>
            <Link to="new">
               <Button>Log a new entry!</Button>
            </Link>
         </Row>
         {!entry ? (
            <Row>
               <h2>You don't have any entries!</h2>
               <p>Log a new entry!</p>
            </Row>
         ) : (
            <>
               <Row>
                  <h2>Your last entry was...</h2>
               </Row>
               <EntriesCard entry={entry} />
               <Link to="/entries">View more entries</Link>
            </>
         )}
      </Container>
   );
};
export default Home;

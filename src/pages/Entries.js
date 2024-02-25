import { Container, Row } from "reactstrap";
import { FilterEntry } from "../components/FilterEntries";
import { useSelector } from "react-redux";
import { selectAllEntries } from "../entries/list/entrySlice";

const Entries = () => {
   const entries = useSelector(selectAllEntries);
   return (
      <Container>
         <Row>
            <h1>Entries</h1>
            <FilterEntry entries={entries} />
         </Row>
      </Container>
   );
};
export default Entries;

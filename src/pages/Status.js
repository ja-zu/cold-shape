import { useNavigate, useLocation } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { deleteEntry } from "../entries/list/entrySlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Status = () => {
   const { state } = useLocation();
   const { id, message } = state;
   const navigate = useNavigate();
   useEffect(() => {
      const timeout = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timeout);
   }, []);
   const dispatch = useDispatch();
   const onLoadAction = () => {
      dispatch(deleteEntry(id));
   };
   const messageText = () => {
      switch (message) {
         case "delete":
            return "Entry Deleted!";
         case "add":
            return "Entry logged!";
         default:
            return "Why are you here?";
      }
   };

   return (
      <Container className="status">
         <Row>
            <h1>{messageText()}</h1>
            {message === "delete" && onLoadAction()}
         </Row>
      </Container>
   );
};
export default Status;

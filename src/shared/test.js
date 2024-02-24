import { selectEntryId } from "../entries/list/entrySlice";
import { useSelector } from "react-redux";

const Test = () => {
  const entry = useSelector(selectEntryId(id));
  return (
    <p>
      {entry.emotion} {console.dir(entry)}
    </p>
  );
};
export default Test;

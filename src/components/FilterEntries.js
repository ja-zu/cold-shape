import {
   Row,
   Dropdown,
   DropdownItem,
   DropdownMenu,
   DropdownToggle,
   Col,
} from "reactstrap";
import EntriesCard from "../entries/list/EntriesCard";
import { useState } from "react";
import { selectYears } from "../entries/list/entrySlice";

//Sets up filter
export const FilterEntry = ({ entries }) => {
   function handleEmotion(e) {
      const emotion = e.target.name;
      setFilter(emotion);
   }
   function handleYear(y) {
      const year = y.target.name;
      setFilter(year);
   }

   const [filter, setFilter] = useState("all");

   const filteredEmotions = entries.filter(
      (entry) => entry.emotionTag === filter
   );
   const filteredDate = entries.filter((entry) => {
      entry.date[3] === filter[3];
   });

   const filteredEntries = [...filteredDate, ...filteredEmotions];
   console.log(filteredEntries);

   const [dropdownEmoOpen, setDropdownEmoOpen] = useState(false);
   const [dropdownYearOpen, setDropdownYearOpen] = useState(false);

   const toggle = () => setDropdownEmoOpen((prevState) => !prevState);
   const toggleYear = () => setDropdownYearOpen((prevState) => !prevState);
   const years = selectYears(entries);

   const dropYear = years.map((year) => {
      return (
         <DropdownItem name={year} onClick={handleYear}>
            {year}
         </DropdownItem>
      );
   });

   return (
      <>
         <Row className="mb-3 mt-3">
            <Col>
               <Dropdown
                  isOpen={dropdownEmoOpen}
                  toggle={toggle}
                  direction="down"
               >
                  <DropdownToggle className="" caret>
                     Filter by Emotion
                  </DropdownToggle>
                  <DropdownMenu>
                     <DropdownItem name="all" onClick={handleEmotion}>
                        All
                     </DropdownItem>
                     <DropdownItem name="sad" onClick={handleEmotion}>
                        Sad
                     </DropdownItem>
                     <DropdownItem name="frustrated" onClick={handleEmotion}>
                        Frustrated
                     </DropdownItem>
                     <DropdownItem name="scared" onClick={handleEmotion}>
                        Scared
                     </DropdownItem>
                     <DropdownItem name="angry" onClick={handleEmotion}>
                        Angry
                     </DropdownItem>
                  </DropdownMenu>
               </Dropdown>
            </Col>
            <Col>
               <Dropdown
                  isOpen={dropdownYearOpen}
                  toggle={toggleYear}
                  direction="down"
               >
                  <DropdownToggle className="" caret>
                     Filter by Year
                  </DropdownToggle>
                  <DropdownMenu>
                     <DropdownItem name="all" onClick={handleEmotion}>
                        All
                     </DropdownItem>
                     {dropYear}
                  </DropdownMenu>
               </Dropdown>
            </Col>
         </Row>

         {filter === "all" ? (
            <EntryList entries={entries} />
         ) : filteredEntries.length > 0 ? (
            <EntryList entries={filteredEntries} />
         ) : (
            <p>No entries found!</p>
         )}
      </>
   );
};
//Maps the entries
export const EntryList = ({ entries }) => {
   const entryList = entries.map((entry) => {
      return <EntriesCard key={entry.id} entry={entry} />;
   });
   return entryList;
};

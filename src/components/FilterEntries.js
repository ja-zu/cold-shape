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
import { selectYears, selectEmotions } from "../entries/list/entrySlice";

//Sets up filter
export const FilterEntry = ({ entries }) => {
   function handleSelection(e) {
      const selection = e.target.name;
      setFilter(selection);
   }
   const [filter, setFilter] = useState("all");

   const filterEntry = entries.filter((entry) => entry.emotionTag === filter);
   const filterYears = entries.filter((entry) => {
      const year =
         entry.date[0] + entry.date[1] + entry.date[2] + entry.date[3];
      console.log(year);
      return year === filter;
   });

   const filteredEntries = [...filterYears, ...filterEntry];
   console.log(filteredEntries);

   const [dropdownEmoOpen, setDropdownEmoOpen] = useState(false);
   const [dropdownYearOpen, setDropdownYearOpen] = useState(false);

   const toggle = (dropdown) => dropdown((prevState) => !prevState);

   const years = selectYears(entries);
   const emotions = selectEmotions(entries);

   const dropdownItems = (selection) =>
      selection.map((item) => {
         //adds data items availble to dropdown
         return (
            <DropdownItem name={item} onClick={handleSelection}>
               {item}
            </DropdownItem>
         );
      });

   return (
      <>
         <Row className="mb-3 mt-3">
            <Col>
               <Dropdown
                  isOpen={dropdownEmoOpen}
                  toggle={() => toggle(setDropdownEmoOpen)}
                  direction="down"
               >
                  <DropdownToggle className="" caret>
                     Filter by Emotion
                  </DropdownToggle>
                  <DropdownMenu>
                     <DropdownItem name="all" onClick={handleSelection}>
                        All
                     </DropdownItem>
                     {dropdownItems(emotions)}
                  </DropdownMenu>
               </Dropdown>
            </Col>
            <Col>
               <Dropdown
                  isOpen={dropdownYearOpen}
                  toggle={() => toggle(setDropdownYearOpen)}
                  direction="down"
               >
                  <DropdownToggle className="" caret>
                     Filter by Year
                  </DropdownToggle>
                  <DropdownMenu>
                     <DropdownItem name="all" onClick={handleSelection}>
                        All
                     </DropdownItem>
                     {dropdownItems(years)}
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

import { Routes, Route } from "react-router-dom";
import NewEntry from "./pages/NewEntry";
import Entries from "./pages/Entries";
import About from "./pages/About";
import Home from "./pages/Home";
import { Container } from "reactstrap";
import Header from "./components/Header";
import SingleEntry from "./entries/entry/singleEntry";
import {
  EntryEmotions,
  EntryEvent,
  EntryThoughts,
} from "./components/EntryForm";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Container className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/new" element={<NewEntry />}>
              <Route path="/new/emotion" element={<EntryEmotions />} />
              <Route path="/new/event" element={<EntryEvent />} />
              <Route path="/new/thought" element={<EntryThoughts />} />
            </Route>
            <Route path="/entries" element={<Entries />} />
            <Route path="/entries/:id" element={<SingleEntry />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;

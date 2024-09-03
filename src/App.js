import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main.js";
import Equipment from "./Equipment.js";
import Start from "./Start.js";
import Nutrition from "./Nutrition.js";
import Plans from "./Plans.js";
import Prevention from "./Prevention.js";
import Races from "./Races.js"; // Ensure the correct import with .js
import Faq from "./Faq.js";
import Contacts from "./Contacts.js";
import Navbar from "./Navbar.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/start" element={<Start />} />
          <Route path="/plany" element={<Plans />} />
          <Route path="/vybaveni" element={<Equipment />} />
          <Route path="/vyziva" element={<Nutrition />} />
          <Route path="/prevence" element={<Prevention />} />
          <Route path="/akce" element={<Races />} />
          <Route path="/kontakty" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main.js";
import Equipment from "./components/Equipment.js";
import Start from "./components/Start.js";
import Nutrition from "./components/Nutrition.js";
import Plans from "./components/Plans.js";
import Prevention from "./components/Prevention.js";
import Races from "./components/Races.js"; // Ensure the correct import with .js
import Faq from "./components/Faq.js";
import Contacts from "./components/Contacts.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/start" element={<Start />} />
          <Route path="/plany" element={<Plans />} title="plány" />
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

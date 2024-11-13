import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <div className="p-3 headRun">
            Běhna <DirectionsRunIcon fontSize="10px"></DirectionsRunIcon>
          </div>
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/main">Domů</Link>
        </li>
        <li>
          <Link to="/start">Začni</Link>
        </li>
        <li>
          <Link to="/plany">Plány</Link>
        </li>
        <li>
          <Link to="/vybaveni">Vybavení</Link>
        </li>
        <li>
          <Link to="/vyziva">Výživa</Link>
        </li>
        <li>
          <Link to="/prevence">Prevence</Link>
        </li>
        <li>
          <Link to="/akce">Závody a akce</Link>
        </li>
        <li>
          <Link to="/kontakty">Kontakty</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

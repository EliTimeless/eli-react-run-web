import React from "react";
import "../App.css";

function Plans() {
  return (
    <div className="m-2 p-2">
      {" "}
      <h2 className="mt-4 mb-5">Tréninkové plány</h2>
      <p>
        Plány pro začátečníky: Např. "Od chůze k běhu za 8 týdnů". Plány pro
        pokročilé: Plány pro přípravu na 5 km, 10 km, půlmaraton nebo maraton.
        Různé cíle: Plány zaměřené na zlepšení kondice, zhubnutí, nebo přípravu
        na závod.
      </p>
    </div>
  );
}

export default Plans;

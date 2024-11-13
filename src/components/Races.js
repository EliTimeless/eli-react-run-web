import React from "react";
import "../App.css";

function Races() {
  return (
    <div className="m-2 p-2 mainRaces">
      {" "}
      <h2 className="mt-4 mb-5"> Běžecké závody a akce</h2>
      <div className="m-2 p-2 ">
        <ul>
          <h3>Závody listopad 2024:</h3>{" "}
        </ul>
        <li>
          <a href="https://worldsmarathons.com/marathon/florence-marathon">
            Florence / Itálie
          </a>
        </li>
        <li>
          {" "}
          <a href="https://worldsmarathons.com/marathon/milano21-half-marathon">
            Milan / Itálie
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/torino-city-marathon">
            Torino/ Itálie
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/silverstone-run-fest">
            Towcester / Británie
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/the-york-15k-5k-10k-half-marathon-morun">
            York / Británie
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/trail-do-trabulo">
            Sátão / Portugalsko
          </a>
        </li>
      </div>
      <div className="m-2 p-2">
        <ul>
          <h3>Závody prosinec 2024</h3>
        </ul>
        <li>
          <a href="https://worldsmarathons.com/marathon/mazara-del-vallo">
            Mazara del Vallo / Itálie
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/maratona-di-reggio-emilia">
            Emilia / Itálie
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/meia-maratona-dos-descobrimentos">
            Lisabon / Portugalsko
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/mispo-talvemaraton">
            Vändra / Estonsko
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/lanzarote-international-marathon">
            Costa Teguise / Španělsko
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/stevenage-winter-half-marathon-10k">
            Stevenage / Spojené království
          </a>
        </li>
        <li>
          <a href="https://worldsmarathons.com/marathon/catania-marathon">
            Catania / Itálie
          </a>
        </li>
      </div>
    </div>
  );
}

export default Races;

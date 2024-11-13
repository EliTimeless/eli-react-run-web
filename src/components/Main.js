import React from "react";
import Weather from "./Weather";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <div className="container-fluid">
      <div className="row m-2 p-4">
        <h1 className="col-12 col-sm-6 mb-6">Běhna tě vítá!!</h1>
        <div className="col-12 col-md-6 mb-6">
          <Weather temperature={29} city={"Praha"} />
          <Weather temperature={33} city={"Pisa"} />{" "}
          <Weather temperature={15} city={"Stockholm"} />
        </div>{" "}
        <div className="p-4 m-4"></div>
      </div>
      <div className="row m-2">
        <div className="col-6 col-sm-6  ">
          <h3>Novinky v běhu: Co přináší rok 2024?</h3>
          <p>
            V roce 2024 přichází běžecký svět s řadou inovací. Nové tenisky s
            pokročilými materiály zvyšují tlumení a snižují únavu svalů, zatímco
            chytré hodinky nyní lépe monitorují nejen srdeční tep, ale i
            techniku běhu. Navíc se stává populárnější minimalistický běh
            naboso. Rostoucí zájem o ekoběh podporuje závody bez plastů a s
            ekologickým dopadem.
          </p>
        </div>

        <div className="col-3 col-sm-3 ">
          <h4 className="">Závody</h4>
          <div className="mainRaces">
            <span className="m-2">24.11.2024</span>{" "}
            <a href="https://worldsmarathons.com/marathon/florence-marathon">
              Florence Marathon / Itálie
            </a>{" "}
          </div>
          <div className="mainRaces">
            <span className="m-2">24.11.2024</span>
            <a href="https://worldsmarathons.com/marathon/milano21-half-marathon">
              Milano Marathon / Itálie
            </a>
          </div>

          <div className="mainRaces">
            <span className="m-2">24.11.2024</span>
            <a href="https://worldsmarathons.com/marathon/the-york-15k-5k-10k-half-marathon-morun">
              York / Spojené království
            </a>
          </div>
          <div className="mainRaces">
            <span className="m-2">24.11.2024</span>{" "}
            <a href="https://worldsmarathons.com/marathon/trail-do-trabulo">
              Sátão / Portugalsko
            </a>
          </div>
          <div className="mainRaces">
            <span className="m-2">1.12.2024</span>{" "}
            <a href="https://worldsmarathons.com/marathon/torino-city-marathon">
              Torino Marathon / Italy
            </a>{" "}
          </div>
        </div>

        <div className="col-3 col-sm-3 ">
          <h4 className="">Zajímavosti ze světa běhu </h4>
          <p>
            Běhání je populární po celém světě, a přináší mnoho zajímavostí.
            Například nejstarší maraton na světě, Bostonský maraton, se běhá
            nepřetržitě od roku 1897. Mezi nejextrémnější běžecké závody patří
            "Marathon des Sables," 250 km dlouhý ultramaraton skrz saharskou
            poušť. V některých kulturách, jako jsou Keničtí Kalenjinové, je běh
            doslova v krvi – jejich běžci pravidelně dominují světovým maratonům
            díky genetickým a tréninkovým faktorům. Běhání prospívá tělu i duši!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;

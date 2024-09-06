import React from "react";
import Weather from "./Weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <div>
      <div className="row m-4 p-4">
        <h2 className="col-12 col-sm-6 mb-6">Běhna tě vítá!!</h2>
        <div className="col-12 col-md-6 mb-6">
          <Weather />
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
          <div>
            <span className="m-2">3.11.2024</span>New york
          </div>
          <div>
            <span className="m-2">18.5.2025</span>Great Wall Marathon
          </div>
          <div>
            <span className="m-2">21.9.2024</span>Sydney City Run
          </div>
          <div>
            <span className="m-2">30.9.2024</span>Ultra Trail du Mont Blanc
          </div>
          <div>
            <span className="m-2">30.9.2024</span>Rio Night Run Datum
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

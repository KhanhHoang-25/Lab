import * as React from "react";
import { listOfFilms } from "../shared/ListOfFilms";

function Films() {
  return (
    <div id="container">
      {listOfFilms.map((film, index) => (
        <div className="card" key={index}>
          <img src={film.img} alt="Films Image" />
          <p className="title">
            {film.title} ( {film.year} ){" "}
          </p>
          <p>{film.nation}</p>
          <button>
            <a href="#popup1" id="openPopUp">
              {" "}
              Detail{" "}
            </a>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Films;

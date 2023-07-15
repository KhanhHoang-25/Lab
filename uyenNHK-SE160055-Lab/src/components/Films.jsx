import * as React from "react";
import { listOfFilms } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";

function Films() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div id="container" style={{ backgroundColor: theme.backgroundColorHTML }}>
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

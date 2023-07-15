import * as React from "react";
import { listOfFilms } from "../shared/ListOfFilms";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom";

function Films() {
  const { theme } = React.useContext(ThemeContext);
  const [detail, setDetail] = React.useState(null);

  const handleOnClick = (data, index) => {
    setDetail({ index: index, ...data });
  };

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
            <a
              href="#popup1"
              id="openPopUp"
              onClick={() => handleOnClick(film, index)}
            >
              {" "}
              Detail{" "}
            </a>
          </button>
        </div>
      ))}
      <div id="popup1" className="overlay">
        {detail != null && (
          <>
            <div className="popup">
              <a className="close" href="#">
                &times;
              </a>
              <img src={detail.img} alt="" style={{ height: 250 }} />
              <h2>{detail.title}</h2>

              <div className="content">
                {detail.nation} - {detail.year}
              </div>
              <button style={{ borderRadius: 0 }}>
                <Link
                  to={`/detail/${detail.index}`}
                  key={detail.index}
                  className="film-detail"
                >
                  Detail{" "}
                </Link>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Films;

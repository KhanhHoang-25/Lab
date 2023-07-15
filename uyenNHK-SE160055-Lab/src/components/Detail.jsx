/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from "react-router-dom";
import { listOfFilms } from "../shared/ListOfFilms";

function FilmDetail({}) {
  const { index } = useParams();
  const film = listOfFilms.find((film, indexOfArr) => indexOfArr == index);

  return (
    <div className="container" style={{ width: "50vw", height: "100vh" }}>
      <div
        className="column"
        style={{
          width: "100%",
        }}
      >
        <div className="card" style={{ width: "100%" }}>
          <img
            src={film.img}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <p className="title">
            {film.title} ( {film.year} ){" "}
          </p>
          <p>{film.nation}</p>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;

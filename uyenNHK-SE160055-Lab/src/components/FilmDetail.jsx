import { useParams } from "react-router-dom";

import { listFilms } from "../shared/ShareFilm";

function FilmDetail() {
  const filmDetail = useParams();
  const film = listFilms.find((obj) => {
    // eslint-disable-next-line eqeqeq
    return obj.id == filmDetail.id;
  });

  return (
    <div div className="container">
      <div className="column" key={film.id}>
        <div className="card">
          <img
            src={`../${film.Image}`}
            alt="daylahinhanh=))"
            style={{ width: "100%", height: 600 }}
          />
          <h3>{film.Title}</h3>
          <p className="title">
            Publisher: {film.Year} Nation: {film.Nation}
          </p>
          <div className="content">{film.Info}</div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;

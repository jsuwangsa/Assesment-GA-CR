import React, { useState } from "react";
import { Container } from "react-bootstrap";
import data from "../../data";

function Content() {
  // console.log(data);
  const [games, setGames] = useState(data.results);
  console.log(games);

  const renderGameCard = (game) => {
    return (
      <div key={game.id} className="movie">
        <img
          src={game.background_image}
          alt={game.name}
          className="movie__img"
        />
        <h2 className="movie__title">{game.name}</h2>
        <div className="details">
          <div className="genres">
            <h6>Genres:</h6>
            {game.genres.map((genre) => (
              <div className="genres__item" key={`key-${genre.name}`}>
                {genre.name}
              </div>
            ))}
          </div>
          <div className="ratings">
            <h6>Ratings:</h6> {game.rating}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container className="main-content">
      <div className="movies">
        {games.length && games.map((game) => renderGameCard(game))}
      </div>
    </Container>
  );
}

export default Content;

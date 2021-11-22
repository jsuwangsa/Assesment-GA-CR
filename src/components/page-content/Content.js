import "./Content.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Content() {
  const [config, setConfig] = useState({
    page: 1,
    page_size: 20,
    data: {},
  });
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);

  const BASE_URL = "https://api.rawg.io/api/";
  const key = "5e59f9523b404f11a5dd5cc736f182db";

  const getGames = async () => {
    setLoading(true);
    const response = await axios
      .get(
        `${BASE_URL}games?key=${key}&?page=${config.page}&?page_size=${config.page_size}`
      )
      .catch((error) => console.log(error));
    if (response.data) {
      console.log(response.data, "games");
      setConfig({ ...config, data: response.data });
      setGames(response.data.results);
      setLoading(false);
      // console.log(config);
    }
  };

  const getGenre = async () => {
    const response = await axios
      .get(`${BASE_URL}genres?key=${key}`)
      .catch((error) => console.log(error));
    if (response.data) {
      console.log(response.data, "genres");
      setGenres(response.data.results);
      console.log(genres);
    }
  };

  useEffect(() => {
    getGames();
    getGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderGameCard = (game) => {
    return (
      <div key={game.id} className="game">
        <Link to={`detail/${game.slug}`}>
          <img
            src={game.background_image}
            alt={game.name}
            className="game__img"
          />
          <h2 className="game__title">{game.name}</h2>
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
        </Link>
      </div>
    );
  };

  // const changePage = ({ selected }) => {
  //   console.log(selected);
  //   let selectedPage = selected + 1;
  //   console.log(selectedPage);
  //   setConfig({ ...config, page: selectedPage });
  //   console.log(config.page);
  // };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container className="main-content">
          <div className="games">
            {games.length && games.map((game) => renderGameCard(game))}
          </div>
        </Container>
      )}
    </>
  );
}

export default Content;

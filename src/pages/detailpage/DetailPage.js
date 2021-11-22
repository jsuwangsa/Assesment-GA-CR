import "./DetailPage.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading/Loading";

const DetailPage = () => {
  let { id } = useParams();
  const [gameDetail, setGameDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://api.rawg.io/api/";
  const key = "5e59f9523b404f11a5dd5cc736f182db";

  const getGameDetail = async () => {
    setLoading(true);
    const response = await axios
      .get(`${BASE_URL}games/${id}?key=${key}`)
      .catch((error) => console.log(error));
    // console.log(response);
    if (response.data) {
      setGameDetail(response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGameDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(gameDetail);

  return (
    <>
      <Header />
      {loading === true ? (
        <Loading />
      ) : (
        <Container>
          <img src={gameDetail?.background_image} alt="game-img" />
          <h2 className="title text-center">{gameDetail?.name}</h2>
          <div className="game-info d-flex flex-row">
            <div className="game-info-left col-md-6 col-sm-12 text-center">
              <div className="description">
                <h6>Description:</h6>
                <p>{gameDetail?.description_raw}</p>
              </div>
              <div className="genres">
                <h6>Genres:</h6>
                {gameDetail.genres
                  ? gameDetail.genres.map((genre) => <p>{genre.name}</p>)
                  : null}
              </div>
              <div className="developers">
                <h6>Developers:</h6>
                {gameDetail.developers
                  ? gameDetail.developers.map((developer) => (
                      <p>{developer.name}</p>
                    ))
                  : null}
              </div>
            </div>
            <div className="game-info-right col-md-6 col-sm-12 text-center">
              <div className="meta-critic">
                <h6>Metacritic Ratings:</h6>
                <p>{gameDetail.metacritic}</p>
                <a
                  href={gameDetail.metacritic_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Metacritic
                </a>
              </div>
              <div className="ratings">
                <h6>Ratings:</h6>
                <p>{gameDetail.rating}</p>
                <h6>Rating Counts:</h6>
                <p>{gameDetail.ratings_count}</p>
              </div>
              <div className="platforms">
                <h6>Platforms:</h6>
                {gameDetail.platforms
                  ? gameDetail.platforms.map((platform) => (
                      <p>{platform.platform.name}</p>
                    ))
                  : null}
              </div>
              <div className="website">
                <h5>Website:</h5>
                <a href={gameDetail.website} target="_blank" rel="noreferrer">
                  Link
                </a>
              </div>
            </div>
          </div>
        </Container>
      )}
      <Footer />
    </>
  );
};

export default DetailPage;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";
import { Link } from "react-router-dom";

import Button from "../button/Button";

import tmdbApi, { category, movieType } from "../../API/tmdbApi";
import apiConfig from "../../API/apiConfig";

import "./movie-list.scss";
import MovieCard from "../movie-card/MovieCard";

export default function MovieList(props) {
  const [items, setItems] = useState([]);
  const params = {};

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;

          default:
            response = await tmdbApi.getTvList(props.type, { params });
            break;
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {items.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

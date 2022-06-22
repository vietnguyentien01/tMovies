import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../API/tmdbApi";
import apiConfig from "../../API/apiConfig";

import "./movie-card.scss";

export default function MovieCard(props) {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500lImage(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
}
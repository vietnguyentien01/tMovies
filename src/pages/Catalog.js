import React from "react";
import { useParams } from "react-router";
import { category as cate } from "../API/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
import PageHeader from "../components/page-header/PageHeader";

export default function Catalog(props) {
  const { category } = useParams();

  console.log(category);
  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
}

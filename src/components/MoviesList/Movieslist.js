import React from 'react';
import {
  MoviesListStyled,
  CategoryTitleStyled,
  MovieScrollStyled,
  MovieCard,
} from '../MoviesList/styles';

const MoviesList = ({ categoryTitle, movies }) => {
  return (
    <MoviesListStyled>
      <CategoryTitleStyled>{categoryTitle}</CategoryTitleStyled>

      <MovieScrollStyled>
        {movies.map((movie) => (
          <MovieCard key={movie.name} imgUrl={movie.imgUrl}></MovieCard>
        ))}
      </MovieScrollStyled>
    </MoviesListStyled>
  );
};

export default MoviesList;

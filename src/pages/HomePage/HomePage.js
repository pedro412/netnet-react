import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import MoviesList from '../../components/MoviesList/Movieslist';
import { movie, moviesCarrusel } from '../../helpers/helpers';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero movie={movie} />
      <MoviesList
        movies={moviesCarrusel}
        categoryTitle="populares en menflix"
      />
    </>
  );
};

export default HomePage;

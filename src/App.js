import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MoviesList from './components/MoviesList/Movieslist';
import Navbar from './components/Navbar/Navbar';
import { movie, moviesCarrusel, navItems } from './helpers/helpers';

const App = () => {
  const [movie] = useState({
    title: 'Spider Man',
    moods: ['Surrealista', 'Distopico', 'Habil', 'Sinientro', 'Emocionante'],
    img:
      'https://raw.githubusercontent.com/kevin129412/netnet/main/icons/judeus-samson-rAomxXulMNM-unsplash.jpg',
  });

  return (
    <div className="main-container">
      <Header />
      <Hero movie={movie} />
      <MoviesList
        movies={moviesCarrusel}
        categoryTitle="populares en menflix"
      />
      <Navbar items={navItems} />
    </div>
  );
};

export default App;

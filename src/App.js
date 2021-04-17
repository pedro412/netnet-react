import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { navItems } from './helpers/helpers';
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
      <Navbar items={navItems} />
    </div>
  );
};

export default App;

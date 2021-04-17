import React from 'react';
import HeaderStyled from './styles';
import logo from '../../img/logo-netflix.png';

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="https://google.com">Series</a>
        </li>
        <li>
          <a href="https://google.com">Peliculas</a>
        </li>
        <li>
          <a href="https://google.com">Mi lista</a>
        </li>
      </ul>
    </HeaderStyled>
  );
};

export default Header;

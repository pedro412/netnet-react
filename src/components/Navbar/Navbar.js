import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import { NavbarStyled } from './styles';

const Navbar = ({ items }) => {
  return (
    <NavbarStyled>
      <ul>
        {items.map((item) => (
          <NavbarItem key={item.name} item={item} />
        ))}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;

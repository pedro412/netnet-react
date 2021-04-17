import React from 'react';
import { NavbarItemStyled } from './styles';

const NavbarItem = ({ item }) => {
  const { name, link, icon } = item;
  return (
    <NavbarItemStyled>
      <a href={link}>
        {icon()}
        <span>{name}</span>
      </a>
    </NavbarItemStyled>
  );
};

export default NavbarItem;

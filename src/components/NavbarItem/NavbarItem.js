import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import ComingSoonIcon from '../../icons/ComingSoonIcon';
import HomeIcon from '../../icons/HomeIcon';
import { NavbarItemStyled } from './styles';

const NavbarItem = ({ item }) => {
  const { name, link, iconName } = item;

  let match = useRouteMatch({
    path: link,
    exact: true,
  });

  const loadIcon = (iconName) => {
    switch (iconName) {
      case 'HomeIcon':
        return <HomeIcon fill={match} width={24} height={24} />;

      case 'ComingSoonIcon':
        return <ComingSoonIcon fill={match} width={24} height={24} />;

      default:
        break;
    }
  };

  return (
    <NavbarItemStyled active={match}>
      <Link to={link}>
        {loadIcon(iconName)}
        <span>{name}</span>
      </Link>
    </NavbarItemStyled>
  );
};

export default NavbarItem;

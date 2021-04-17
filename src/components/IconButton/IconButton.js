import React from 'react';
import { IconButtonStyled } from './styles';

const IconButton = ({ text, icon }) => {
  return (
    <IconButtonStyled>
      {icon}
      <span>{text}</span>
    </IconButtonStyled>
  );
};

export default IconButton;

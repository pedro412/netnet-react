import React from 'react';
import { PlayButtonStyled } from './styles';

const PlayButton = () => {
  return (
    <PlayButtonStyled>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5V19L19 12L8 5Z" fill="black" />
      </svg>
      Reproducir
    </PlayButtonStyled>
  );
};

export default PlayButton;

import React from 'react';
import IconButton from '../IconButton/IconButton';
import PlayButton from '../PlayButton/PlayButton';
import {
  HeroContent,
  HeroStyled,
  MoodListItem,
  MoodsList,
  Toolbar,
} from './styles';

const Hero = ({ movie }) => {
  const { title, moods, img } = movie;

  return (
    <HeroStyled img={img}>
      <HeroContent>
        <h1>{title}</h1>
        <MoodsList>
          {moods.map((mood) => (
            <MoodListItem key={mood}>{mood}</MoodListItem>
          ))}
        </MoodsList>
        <Toolbar>
          <IconButton
            text="Mi lista"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3V11H3V13H11V21H13V13H21V11H13V3H11Z"
                  fill="white"
                />
              </svg>
            }
          />

          <PlayButton />

          <IconButton
            text="Info"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.489 2 2 6.489 2 12C2 17.511 6.489 22 12 22C17.511 22 22 17.511 22 12C22 6.489 17.511 2 12 2ZM12 4C16.4301 4 20 7.56988 20 12C20 16.4301 16.4301 20 12 20C7.56988 20 4 16.4301 4 12C4 7.56988 7.56988 4 12 4ZM11 7V9H13V7H11ZM11 11V17H13V11H11Z"
                  fill="white"
                />
              </svg>
            }
          />
        </Toolbar>
      </HeroContent>
    </HeroStyled>
  );
};

export default Hero;

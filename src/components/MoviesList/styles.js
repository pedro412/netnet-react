import styled from 'styled-components';

const MoviesListStyled = styled.section`
  height: 176px;
  margin-top: 14px;
  margin-left: 16px;
`;

const CategoryTitleStyled = styled.h2`
  font-size: 17.5px;
  margin-bottom: 8px;
  color: var(--white);
`;

const MovieScrollStyled = styled.div`
  max-width: 484px;
  overflow: auto;
  white-space: nowrap;
`;

const MovieCard = styled.div`
  width: 96px;
  height: 144px;
  margin-right: 8px;
  background-position: center;
  background-size: cover;
  display: inline-block;
  background-image: ${(props) => `url(${props.imgUrl})`};
`;

export { MoviesListStyled, CategoryTitleStyled, MovieScrollStyled, MovieCard };

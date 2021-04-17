import styled from 'styled-components';

const HeroStyled = styled.section`
  width: 100%;
  height: 583px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  margin-bottom: 5px;

  h1 {
    margin-bottom: 12px;
    color: var(--white);
  }
`;

const MoodsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: white;
  margin-bottom: 12px;
  font-size: 11.2px;
`;

const MoodListItem = styled.li`
  margin-right: 11px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export { HeroStyled, HeroContent, MoodsList, MoodListItem, Toolbar };

import styled from 'styled-components';

const HeaderStyled = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.1);

  img {
    width: 55.84px;
    height: 25.49px;
    margin: 16px 16px;
  }

  ul {
    width: 235px;
    height: 25.49px;
    list-style: none;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: var(--white);
      font-size: 14px;
    }
  }
`;

export default HeaderStyled;

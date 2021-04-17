import styled from 'styled-components';

const NavbarStyled = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--black);
  max-width: 500px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 500px;
    width: 100%;
    height: 64px;
  }
`;

export { NavbarStyled };

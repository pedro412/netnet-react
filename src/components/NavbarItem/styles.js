import styled from 'styled-components';

export const NavbarItemStyled = styled.li`
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: ${(props) => (props.active ? 'var(--white)' : 'var(--grey)')};
  }

  svg {
    fill: ${(props) => (props.active ? 'var(--white)' : 'var(--grey)')};
  }
`;

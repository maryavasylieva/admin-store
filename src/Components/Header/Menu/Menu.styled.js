import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background: ${({ theme }) => theme.colors.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 32px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.colors.mobile}) {
    width: 100%;
  }

  a {
    font-size: 32px;
    text-transform: uppercase;
    padding: 32px 0;
    font-weight: bold;
    letter-spacing: 8px;
    color: ${({ theme }) => theme.colors.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.burgerMenu.mobile}) {
      font-size: 24px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

`

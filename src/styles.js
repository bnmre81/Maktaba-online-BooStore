import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const updateButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  .active {
    color: ${(props) => props.theme.pink};
    background-color: fuchsia;
  }
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const BookWrapper = styled.div`
  margin: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
  }
  p {
    text-align: center;
    &.book-price {
      color: ${(props) => props.theme.dark};
    }
  }
  h1 {
    text-align: center;
  }
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor}; 
    }
`;

export const Description = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.dark};
`;
export const ListWrapper = styled.div`
    align-items: center;
    justify-content: center:
    display: flex;
`;

export const StoreImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
export const Title = styled.h1`
  text-align: center;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

import styled, { createGlobalStyle } from "styled-components";

const BookWrapper = styled.div`
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

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor}; 
    }
`;

const Description = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.dark};
`;
const ListWrapper = styled.div`
    align-items: center;
    justify-content: center:
    display: flex;
`;

const StoreImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
const Title = styled.h1`
  text-align: center;
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export {
  BookWrapper,
  DeleteButtonStyled,
  Description,
  GlobalStyle,
  ListWrapper,
  StoreImage,
  ThemeButton,
  Title,
};

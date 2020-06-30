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

const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.mid};
        background-color: ${(props) => props.theme.light}; 
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

export {
  BookWrapper,
  Description,
  GlobalStyle,
  ListWrapper,
  StoreImage,
  Title,
};

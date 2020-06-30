import styled, { createGlobalStyle } from "styled-components";

const BookWrapper = styled.div`
  margin: 20px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  p {
    text-align: center;
    &.book-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
  h1 {
    text-align: center;
  }
`;

const GlobalStyle = createGlobalStyle`
    body {
        color: ${(props) => props.theme.pink};
        background-color: green; 
    }
`;

const Description = styled.h3`
  text-align: center;
  color: blue;
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

import React from "react";
// Styles
import { ThemeProvider } from "styled-components";
import { Description, GlobalStyle, StoreImage, Title } from "./styles";
// components
import BookList from "./components/BookList";
//data
import books from "./items";

const theme = {
  lightest: "#70c1b3",
  lighter: "#247ba0",
  light: "#ffe066",
  mid: "#f25f5c",
  dark: "#50514f",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <StoreImage
          src="https://media.wired.com/photos/5be4cd03db23f3775e466767/master/w_2560%2Cc_limit/books-521812297.jpg"
          alt="storeimage"
        />
        <Title>My Personal BookStore</Title>
        <Description>Freed from Publishers</Description>
      </div>
      <BookList />
    </ThemeProvider>
  );
}

export default App;

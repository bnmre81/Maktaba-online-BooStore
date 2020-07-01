import React, { useState } from "react";
// Styles
import { ThemeProvider } from "styled-components";
import {
  DeleteButtonStyled,
  Description,
  GlobalStyle,
  StoreImage,
  ThemeButton,
  Title,
} from "./styles";
// components
import BookList from "./components/BookList";
//data
import books from "./items";

const theme = {
  lightest: "#70c1b3",
  lighter: "#247ba0",

  mid: "#f25f5c",

  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb",
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb",
    backgroundColor: "#242424",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
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

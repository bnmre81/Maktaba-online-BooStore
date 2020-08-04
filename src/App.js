import React, { useState } from "react";
import { observer } from "mobx-react";
// Styles
import { ThemeProvider } from "styled-components";
import {
  Logo,
  DeleteButtonStyled,
  Description,
  GlobalStyle,
  StoreImage,
  Title,
} from "./styles";
// components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
// Stores
import authorStore from "./stores/authorStore";
import bookStore from "./stores/bookStore";

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
  const [book, setBook] = useState(null);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]} currentTheme={currentTheme}>
        <GlobalStyle />
        <NavBar toggleTheme={toggleTheme} />
        {authorStore.loading || bookStore.loading ? (
          <h1>loading</h1>
        ) : (
          <Routes />
        )}
      </ThemeProvider>
      <Routes />
    </>
  );
}

export default observer(App);

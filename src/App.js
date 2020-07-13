import React, { useState } from "react";
import { Route, Switch } from "react-router";

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
import BookDetail from "./components/BookDetail";
import BookList from "./components/BookList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
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
  const [book, setBook] = useState(null);
  const [_books, setBooks] = useState(books);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  const selectBook = (bookId) => {
    const selectedBook = books.find((book) => book.id === bookId);
    setBook(selectedBook);
  };

  const deleteBook = (bookId) => {
    const updatedBooks = _books.filter((book) => book.id !== +bookId);
    setBooks(updatedBooks);
    setBook(null);
  };

  const createBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBook(updatedBooks);
  };

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]} currentTheme={currentTheme}>
        <GlobalStyle />
        <NavBar toggleTheme={toggleTheme} />
      </ThemeProvider>
      <Switch>
        <Route exact path="/books/:bookSlug">
          <BookDetail
            books={_books}
            deleteBook={deleteBook}
            setBook={setBook}
          />
        </Route>
        <Route exact path="/books">
          <BookList
            createBook={createBook}
            books={_books}
            selectBook={selectBook}
            deleteBook={deleteBook}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

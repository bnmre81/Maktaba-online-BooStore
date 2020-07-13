import React, { useState } from "react";
// Styles
import { ListWrapper } from "../styles";
// Components
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const BookList = ({ books, createBook, deleteBook, selectBook }) => {
  const [query, setQuery] = useState("");

  const bookList = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => (
      <BookItem
        book={book}
        deleteBook={deleteBook}
        key={book.id}
        selectBook={selectBook}
      />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{bookList}</ListWrapper>
      <AddButton createBook={createBook} />
    </div>
  );
};

export default BookList;

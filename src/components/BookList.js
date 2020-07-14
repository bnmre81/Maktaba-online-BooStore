import React, { useState } from "react";
import { observer } from "mobx-react";
// Stores
import bookStore from "../stores/bookStore";
// Styles
import { ListWrapper } from "../styles";
// Components
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const BookList = ({ selectBook }) => {
  const [query, setQuery] = useState("");

  const bookList = bookStore.books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => (
      <BookItem book={book} key={book.id} selectBook={selectBook} />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{bookList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(BookList);

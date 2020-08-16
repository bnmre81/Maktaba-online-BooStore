import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { ListWrapper } from "../styles";
// Components
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import authStore from "../stores/authStore";
import { Redirect } from "react-router";

const BookList = ({ books }) => {
  const [query, setQuery] = useState("");

  if (!authStore.user) return <Redirect to="/" />;
  const bookList = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{bookList}</ListWrapper>
    </div>
  );
};

export default observer(BookList);

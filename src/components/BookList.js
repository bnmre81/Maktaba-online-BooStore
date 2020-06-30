import React from "react";
// Styles
import { ListWrapper } from "../styles";
// Data
import books from "../items";
// Components
import BookItem from "./BookItem";

const BookList = () => {
  const bookList = books.map((book) => <BookItem book={book} key={book.id} />);
  return <ListWrapper>{bookList}</ListWrapper>;
};
export default BookList;

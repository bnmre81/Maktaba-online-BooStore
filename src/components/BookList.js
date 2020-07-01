import React, { useState } from "react";
// Styles
import { ListWrapper } from "../styles";
// Data
import books from "../items";
// Components
import BookItem from "./BookItem";

const BookList = () => {
  const [_books, setBooks] = useState(books);
  const deleteBook = (bookId) => {
    const updatedBooks = _books.filter((book) => book.id !== +bookId);
    setBooks(updatedBooks);
  };
  const bookList = _books.map((book) => (
    <BookItem book={book} deleteBook={deleteBook} key={book.id} />
  ));
  return <ListWrapper>{bookList}</ListWrapper>;
};

export default BookList;

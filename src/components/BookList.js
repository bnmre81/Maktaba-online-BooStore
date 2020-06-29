import React from "react";
import styles from "../styles";
// Data
import books from "../items";
// Components
import BookItem from "./BookItem";

const BookList = () => {
  const booklist = books.map((book) => <BookItem book={book} key={book.id} />);
  return <div style={styles.text}>{booklist}</div>;
};
export default BookList;

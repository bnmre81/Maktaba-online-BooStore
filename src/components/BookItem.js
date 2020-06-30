import React from "react";
// styles
import { BookWrapper } from "../styles";

const BookItem = (props) => {
  return (
    <BookWrapper>
      <h1>{props.book.name}</h1>
      <img src={props.book.image} alt={props.book.name} />
      <p className="book-price">{props.book.price}</p>
    </BookWrapper>
  );
};
export default BookItem;

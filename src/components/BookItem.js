import React from "react";
// styles
import { BookWrapper, DeleteButtonStyled } from "../styles";

const BookItem = (props) => {
  const handleDelete = () => {
    props.deleteBook(props.book.id);
  };
  return (
    <BookWrapper>
      <h1>{props.book.name}</h1>
      <img src={props.book.image} alt={props.book.name} />
      <p className="book-price">{props.book.price}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </BookWrapper>
  );
};
export default BookItem;

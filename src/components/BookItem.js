import React from "react";
import { Link } from "react-router-dom";
// styles
import { BookWrapper, DeleteButtonStyled } from "../styles";
import App from "../App";
import DeleteButton from "./buttons/DeleteButton";

const BookItem = (props) => {
  const book = props.book;
  const handleDelete = () => {
    props.deleteBook(book.id);
  };

  return (
    <BookWrapper className="col-lg-4 col-md-6 col-sm-6">
      <h1 className="book-name">{book.name}</h1>
      <Link to={`/books/${book.slug}`}>
        <img src={book.image} alt={book.name} />
      </Link>
      <p className="book-price">{book.price}</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;

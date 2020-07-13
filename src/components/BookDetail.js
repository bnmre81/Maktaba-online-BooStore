import React from "react";
// Styles
import { DetailWrapper, DeleteButtonStyled } from "../styles";
import App from "../App";
import BookList from "./BookList";
import { Link, Redirect, useParams } from "react-router-dom";
// Components
import DeleteButton from "./buttons/DeleteButton";

const BookDetail = (props) => {
  const { bookSlug } = useParams();
  const book = props.books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  return (
    <DetailWrapper>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p>{book.description}</p>
      <p>{book.price}</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />

      <Link to="/books">Back</Link>
    </DetailWrapper>
  );
};
export default BookDetail;

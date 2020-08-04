import React from "react";
import { observer } from "mobx-react";
// Styles
import { DetailWrapper, DeleteButtonStyled } from "../styles";
import App from "../App";
import BookList from "./BookList";
import { Link, Redirect, useParams } from "react-router-dom";
// Components
import DeleteButton from "./buttons/DeleteButton";
// Stores

import bookStore from "../stores/bookStore";
import UpdateButton from "./buttons/UpdateButton";

const BookDetail = () => {
  const { bookSlug } = useParams();
  const book = bookStore.books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  return (
    <DetailWrapper>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p>{book.description}</p>
      <p>{book.price}</p>
      <UpdateButton book={book} />
      <DeleteButton bookId={book.id} deleteBook={bookStore.deleteBook} />

      <Link to="/books">Back</Link>
    </DetailWrapper>
  );
};
export default observer(BookDetail);

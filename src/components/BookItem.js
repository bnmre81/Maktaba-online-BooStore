import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
// styles
import { BookWrapper, DeleteButtonStyled } from "../styles";
import App from "../App";
// Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
// stores
import bookStore from "../stores/bookStore";

const BookItem = ({ book }) => {
  const handleDelete = () => {
    bookStore.deleteBook(book.id);
  };

  return (
    <BookWrapper className="col-lg-4 col-md-6 col-sm-6">
      <h1 className="book-name">{book.name}</h1>
      <Link to={`/books/${book.slug}`}>
        <img src={book.image} alt={book.name} />
      </Link>
      <p className="book-price">{book.price}</p>
      <UpdateButton book={book} />
      <DeleteButton bookId={book.id} />
    </BookWrapper>
  );
};
export default observer(BookItem);

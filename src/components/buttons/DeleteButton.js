import React from "react";
// Styles
import { DeleteButtonStyled } from "../../styles";

// stores
import bookStore from "../../stores/bookStore";
import authorStore from "../../stores/authorStore";

const DeleteButton = ({ authorId, bookId }) => {
  const handleDelete = () => {
    if (bookId) bookStore.deleteBook(bookId);
    else authorStore.deleteAuthor(authorId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;

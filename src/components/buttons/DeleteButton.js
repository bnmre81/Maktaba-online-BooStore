import React from "react";
// Styles
import { DeleteButtonStyled } from "../../styles";

// stores
import bookStore from "../../stores/bookStore";

const DeleteButton = ({ bookId }) => {
  const handleDelete = () => {
    bookStore.deleteBook(bookId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;

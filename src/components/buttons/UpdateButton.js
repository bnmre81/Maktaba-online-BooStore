import React, { useState } from "react";
// styles
import { updateButtonStyled } from "../../styles";
import BookModal from "../modals/BookModal";
import AuthorModal from "../modals/AuthorModal";

const UpdateButton = ({ author, book }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <updateButtonStyled onClick={openModal}>Update</updateButtonStyled>
      {author ? (
        <AuthorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldAuthor={author}
        />
      ) : (
        <BookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} />
      )}
    </>
  );
};
export default UpdateButton;

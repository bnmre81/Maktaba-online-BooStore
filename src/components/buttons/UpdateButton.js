import React, { useState } from "react";
// styles
import { updateButtonStyled } from "../../styles";
import BookModal from "../modals/BookModal";

const UpdateButton = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <updateButtonStyled onClick={openModal}>Update</updateButtonStyled>
      <BookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} />
    </>
  );
};
export default UpdateButton;

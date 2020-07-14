import React, { useState } from "react";
// Components
import BookModal from "../modals/BookModal";
// Styles
import { BsPlusCircle } from "react-icons/bs";

const AddButton = ({ createBook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-right" size="10em" onClick={openModal} />
      <BookModal
        createBook={createBook}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};
export default AddButton;

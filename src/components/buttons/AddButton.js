import React, { useState } from "react";
// Components
import BookModal from "../modals/BookModal";
// Styles
import { BsPlusCircle } from "react-icons/bs";
import AuthorItem from "../AuthorList/AuthorItem";
import AuthorModal from "../modals/AuthorModal";

const AddButton = ({ author }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <BsPlusCircle className="float-right" size="10em" onClick={openModal} />

      {author ? (
        <BookModal isOpen={isOpen} closeModal={closeModal} author={author} />
      ) : (
        <AuthorModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};
export default AddButton;

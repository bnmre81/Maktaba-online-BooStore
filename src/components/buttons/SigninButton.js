import React, { useState } from "react";
import SigninModal from "../modals/SigninModal";

const signinButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button onClick={openModal}>Sign in</button>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
export default signinButton;

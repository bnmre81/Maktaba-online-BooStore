import React, { useState } from "react";
import SignupModal from "../modals/SignupModal";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <button onClick={openModal}>Sign up</button>
      <SignupModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
export default Signup;

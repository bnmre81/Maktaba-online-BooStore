import React, { useState } from "react";
import Modal from "react-modal";
// styles
import { CreateButtonStyled } from "../../styles";
import authorStore from "../../stores/authorStore";
// Stores
import authStore from "../../stores/authStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const SignupModal = ({ isOpen, closeModal }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Signup Modal"
      >
        <h3>New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>username</label>
              <input
                name="username"
                type="text"
                onChange={handleChange}
                className="form-control"
                value={user.username}
              />
            </div>
          </div>
          <div className="form-group">
            <label>First name</label>
            <input
              name="firstName"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={book.firstname}
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              name="lastName"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={book.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={book.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="form-control"
              value={book.password}
            />
          </div>

          <CreateButtonStyled className="btn float-right">
            Sign Up
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default SignupModal;

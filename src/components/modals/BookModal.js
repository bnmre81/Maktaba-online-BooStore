import React, { useState } from "react";
import Modal from "react-modal";
// styles
import { CreateButtonStyled } from "../../styles";

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
const BookModal = ({ isOpen, closeModal, createBook }) => {
  const [book, setBook] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    const newBook = { ...book, [event.target.name]: event.target.value };
    setBook(newBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    createBook(book);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Book Modal"
      >
        <h3>New Book</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label>Price</label>
              <input
                name="price"
                type="number"
                onChange={handleChange}
                min="1"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              name="description"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              name="image"
              type="text"
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <CreateButtonStyled className="btn float-right">
            Create
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default BookModal;

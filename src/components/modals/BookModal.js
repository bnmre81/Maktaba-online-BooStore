import React, { useState } from "react";
import Modal from "react-modal";
// styles
import { CreateButtonStyled } from "../../styles";
// Stores
import bookStore from "../../stores/bookStore";
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
const BookModal = ({ isOpen, closeModal, oldBook }) => {
  const [book, setBook] = useState(
    oldBook || {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newBook = { ...book, [event.target.name]: event.target.value };
    setBook(newBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // oldBook ? bookStore.updateBook(book) : bookStore.createBook(book);
    // Above explains the line below
    bookStore[oldBook ? "updateBook" : "createBook"](book);
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
                value={book.name}
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
                value={book.price}
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
              value={book.description}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              name="image"
              type="text"
              onChange={handleChange}
              className="form-control"
              value={book.image}
            />
          </div>
          <CreateButtonStyled className="btn float-right">
            {oldBook ? "Update" : "Create"}
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default BookModal;

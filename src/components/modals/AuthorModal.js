import React, { useState } from "react";
import Modal from "react-modal";
// styles
import { CreateButtonStyled } from "../../styles";
// Stores
import authorStore from "../../stores/authorStore";
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
const AuthorModal = ({ authorId, isOpen, closeModal, oldAuthor }) => {
  const [author, setAuthor] = useState(
    oldAuthor || {
      name: "",
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    const newAuthor = { ...author, [event.target.name]: event.target.value };
    setAuthor(newAuthor);
  };

  const handleImage = (event) =>
    setAuthor({ ...author, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    authorStore[oldAuthor ? "updateAuthor" : "createAuthor"](author);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Author Modal"
      >
        <h3>New Author</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                name="name"
                type="text"
                onChange={handleChange}
                className="form-control"
                value={author.name}
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
              type="file"
              onChange={handleImage}
              className="form-control"
            />
          </div>
          <CreateButtonStyled className="btn float-right">
            {oldAuthor ? "Update" : "Create"}
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default AuthorModal;

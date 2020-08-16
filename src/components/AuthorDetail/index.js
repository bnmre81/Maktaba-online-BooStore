import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
// components
import BookList from "../BookList";
import AddButton from "../buttons/AddButton";
import UpdateButton from "../buttons/UpdateButton";
// Stores
import authorStore from "../../stores/authorStore";
import DeleteButton from "../buttons/DeleteButton";
import bookStore from "../../stores/bookStore";

const AuthorDetail = () => {
  const { authorSlug } = useParams();
  const author = authorStore.authors.find(
    (_author) => _author.slug === authorSlug
  );

  if (!author) return <Redirect to="/authors" />;

  const books = author.books
    .map((book) => bookStore.getBookById(book.id))
    .filter((book) => book);

  return (
    <>
      <div>
        <h1>{author.name}</h1>
        <img src={author.image} alt={author.name} />
        <UpdateButton author={author} />
      </div>
      <BookList book={books} />
      <AddButton author={author} />
      <DeleteButton authorId={author.id} />
    </>
  );
};
export default observer(AuthorDetail);

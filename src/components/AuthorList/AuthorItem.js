import React from "react";
import authorStore from "../../stores/authorStore";
import { Link } from "react-router-dom";

const AuthorItem = ({ author }) => {
  return (
    <div>
      <Link to={`/authors/${author.slug}`}>
        <img src={author.image} alt={author.name} />
      </Link>
    </div>
  );
};
export default AuthorItem;

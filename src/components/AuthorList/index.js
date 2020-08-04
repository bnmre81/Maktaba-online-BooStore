import React, { useState } from "react";
import { observer } from "mobx-react";
// Components
import AuthorItem from "./AuthorItem";
import SearchBar from "../SearchBar";
import AddButton from "../buttons/AddButton";
// Stores
import authorStore from "../../stores/authorStore";

const AuthorList = () => {
  const [query, setQuery] = useState("");
  const authorList = authorStore.authors
    .filter((author) => author.name.toLowerCase().includes(query.toLowerCase()))
    .map((author) => <AuthorItem author={author} key={author.id} />);
  return (
    <div>
      <h1>Authors</h1>
      <SearchBar setQuery={setQuery} />
      {authorList}
      <AddButton />
    </div>
  );
};
export default observer(AuthorList);

import { decorate, observable } from "mobx";

import slugify from "react-slugify";
import axios from "axios";

class AuthorStore {
  authors = [];
  loading = true;

  

    createAuthor = async (newAuthor) => {
      try {
        const formData = new FormData();
        for (const key in newAuthor) formData.append(key, newAuthor[key]);
        const res = await axios.post(`http://localhost:8000/authors`, formData);
        this.authors.push(res.data);
      } catch (error) {
        console.log("AuthorStore -> createAuthor -> error", error);
      }
    };

    updateAuthor = async (updatedAuthor) => {
      try {
        const formData = new FormData();
        for (const key in updatedAuthor)
          formData.append(key, updatedAuthor[key]);
        await axios.put(
          `http://localhost:8000/authors/${updatedAuthor.id}`,
          formData
        );
        const author = this.authors.find(
          (author) => author.id === updatedAuthor.id
        );
        for (const key in updatedAuthor) author[key] = updatedAuthor[key];
        // Note: how to update the image 6th react workshop handling image chapter end of the second section
      } catch (error) {
        console.log("AuthorStore -> updateAuthors -> error", error);
      }
    };
  };

  

  fetchAuthors = async () => {
    try {
      const res = await axios.get("http://localhost:8000/authors");
      this.authors = res.data;
      this.loading = false;
    } catch (error) {
      console.log("AuthorStore -> fetchAuthors -> error", error);
    }
  };

  

  deleteAuthor = async (authorId) => {
    try {
      await axios.delete(`http://localhost:8000/authors/${authorId}`);
      this.authors = this.authors.filter((author) => author.id !== +authorId);
    } catch (error) {
      console.log("AuthorStore -> deleteAuthor -> error", error);
    }
  };
}

decorate(AuthorStore, {
  authors: observable,
  loading: observable,
});

const authorStore = new AuthorStore();
authorStore.fetchAuthors();
export default authorStore;

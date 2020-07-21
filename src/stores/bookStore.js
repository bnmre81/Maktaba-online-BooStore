import { decorate, observable } from "mobx";

import slugify from "react-slugify";
import axios from "axios";

class BookStore {
  books = [];

  createBook = async (newBook) => {
    // newBook.id = this.books[this.books.length - 1].id + 1;
    // newBook.slug = slugify(newBook.name);
    // // setBooks((oldBooks) => [...oldBooks, newBook]);
    // this.books.push(newBook);
    try {
      const res = await axios.post("http://localhost:8000/books", newBook);
      this.books.push(res.data);
    } catch (error) {
      console.log("BookStore -> createBook -> error", error);
    }
  };

  deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      this.books = this.books.filter((book) => book.id !== +bookId);
    } catch (error) {
      console.log("BookStore -> deleteBook -> error", error);
    }
  };

  fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/books");
      this.books = res.data;
    } catch (error) {
      console.log("BookStore -> fetchBooks -> error", error);
    }
  };

  updateBook = async (updatedBook) => {
    try {
      await axios.put(
        `http://localhost:8000/books/${updatedBook.id}`,
        updatedBook
      );
      const book = this.books.find((book) => book.id === updatedBook.id);
      for (const key in book) book[key] = updatedBook[key];
    } catch (error) {
      console.log("BookStore -> updateBooks -> error", error);
    }
  };
}

decorate(BookStore, {
  books: observable,
});

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;

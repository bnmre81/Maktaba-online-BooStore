import { decorate, observable } from "mobx";

import slugify from "react-slugify";
import instance from "./instance";

class BookStore {
  books = [];
  loading = true;

  getBookById = (bookId) => this.books.find((book) => book.id === bookId);

  createBook = async (newBook, author) => {
    try {
      const formData = new FormData();
      for (const key in newBook) formData.append(key, newBook[key]);
      const res = await instance.post(`/authors/${author.id}/books`, formData);
      this.books.push(res.data);
      author.books.push({ id: res.data.id });
    } catch (error) {
      console.log("BookStore -> createBook -> error", error);
    }
  };

  deleteBook = async (bookId) => {
    try {
      await instance.delete(`/books/${bookId}`);
      this.books = this.books.filter((book) => book.id !== +bookId);
    } catch (error) {
      console.log("BookStore -> deleteBook -> error", error);
    }
  };

  fetchBooks = async () => {
    try {
      const res = await instance.get("/books");
      this.books = res.data;
      this.loading = false;
    } catch (error) {
      console.log("BookStore -> fetchBooks -> error", error);
    }
  };

  updateBook = async (updatedBook) => {
    try {
      const formData = new FormData();
      for (const key in updatedBook) formData.append(key, updatedBook[key]);
      await instance.put(`/books/${updatedBook.id}`, formData);
      const book = this.books.find((book) => book.id === updatedBook.id);
      for (const key in book) book[key] = updatedBook[key];
    } catch (error) {
      console.log("BookStore -> updateBooks -> error", error);
    }
  };
}

decorate(BookStore, {
  books: observable,
  loading: observable,
});

const bookStore = new BookStore();
bookStore.fetchBooks();
export default bookStore;

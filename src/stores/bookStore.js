import { decorate, observable } from "mobx";
// Data
import books from "../items";
import slugify from "react-slugify";

class BookStore {
  books = books;

  createBook = (newBook) => {
    newBook.id = this.books[this.books.length - 1].id + 1;
    newBook.slug = slugify(newBook.name);
    // setBooks((oldBooks) => [...oldBooks, newBook]);
    this.books.push(newBook);
  };

  deleteBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== bookId);
  };

  updateBook = (updatedBook) => {
    const book = this.books.find((book) => book.id === updatedBook.id);

    for (const key in book) book[key] = updatedBook[key];
  };
}

decorate(BookStore, {
  books: observable,
});

const bookStore = new BookStore();
export default bookStore;

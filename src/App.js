import React from "react";
import styles from "./styles";
// components
import BookList from "./components/BookList";
//data
import books from "./items";

function App() {
  return (
    <div style={styles.background}>
      <h1 style={styles.text}>My Books</h1>
      <h2>
        Here you can read my books, therefore publishers are not required, ano
        not allowed to read my stuff too!
      </h2>
      <img
        style={styles.pageImageSize}
        src="https://media.wired.com/photos/5be4cd03db23f3775e466767/master/w_2560%2Cc_limit/books-521812297.jpg"
        alt="storeimage"
      />
      <BookList />
    </div>
  );
}

export default App;

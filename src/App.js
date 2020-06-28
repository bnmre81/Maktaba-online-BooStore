import React from "react";
const styles = {
  text: {
    textAlign: "center",
  },
  size: {
    width: "100%",
    height: "200px",
  },
};
function App() {
  return (
    <div>
      <h1 style={styles.text}>My Books</h1>
      <h2>
        Here you can read my books, therefore publishers are not required, ano
        not allowed to read my stuff too!
      </h2>
      <img
        style={styles.size}
        src="https://media.wired.com/photos/5be4cd03db23f3775e466767/master/w_2560%2Cc_limit/books-521812297.jpg"
        alt="storeimage"
      />
      <div style={styles.text}>
        <h1>خلايا الزمرد</h1>
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479637297l/33017563._SX318_.jpg"
          alt="book1 image"
        />
        <h3>3.00 KD</h3>
      </div>
      <div style={styles.text}>
        <h1>أوتار الرنين</h1>
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1509109523l/36486018._SX318_.jpg"
          alt="book2 image"
        />
        <h3>2.00 KD</h3>
      </div>
      <div style={styles.text}>
        <h1>صانع الدمى - طوق الأحلام</h1>
        <img
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510327420l/36570178._SX318_.jpg"
          alt="book3 image"
        />
        <h3>1.00 KD</h3>
      </div>
    </div>
  );
}

export default App;

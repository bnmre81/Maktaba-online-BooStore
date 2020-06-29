import React from "react";

import styles from "../styles";

const BookItem = (props) => {
  return (
    <div style={styles.text} style={styles.background}>
      <h1>{props.book.name}</h1>
      <img src={props.book.image} alt={props.book.name} />
      <p>{props.book.price}</p>
    </div>
  );
};
export default BookItem;

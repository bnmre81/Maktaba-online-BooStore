import React from "react";
import { Description, StoreImage, Title } from "../styles";

const Home = () => {
  return (
    <div>
      <StoreImage
        src="https://media.wired.com/photos/5be4cd03db23f3775e466767/master/w_2560%2Cc_limit/books-521812297.jpg"
        alt="storeimage"
      />
      <Title>My Personal BookStore</Title>
      <Description>Freed from Publishers</Description>
    </div>
    /* <Title>Cookies and Beyond</Title>
      <Description>Where cookie maniacs gather</Description>
      <ShopImage
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
    </> */
  );
};

export default Home;

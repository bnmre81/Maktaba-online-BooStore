import React from "react";
import { observer } from "mobx-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { ThemeButton, Logo, NavStyled } from "../styles";
// Components
import Signup from "./buttons/SignupButton";
import signinButton from "./buttons/SigninButton";
import authStore from "../stores/authStore";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={logo} width="50" />
      </Logo>
      {authStore.user ? (
        <p>Hello {authStore.user.username}</p>
      ) : (
        <>
          <signinButton />
          <Signup />
        </>
      )}
      {authStore.user && authStore.user.role === "admin" && (
        <>
          <NavLink className="nav-item" to="/books">
            Books
          </NavLink>
          <NavLink className="nav-item" to="/authors">
            Authors
          </NavLink>
        </>
      )}
      <ThemeButton className="nav-item" onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
    </NavStyled>
  );
};
export default observer(NavBar);

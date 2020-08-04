import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.png";
import { ThemeButton, Logo, NavStyled } from "../styles";

const NavBar = (props) => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/">
        <img src={logo} width="50" />
      </Logo>
      <NavLink className="nav-item" to="/books">
        Books
      </NavLink>
      <NavLink className="nav-item" to="/authors">
        Authors
      </NavLink>
      <ThemeButton className="nav-item" onClick={props.toggleTheme}>
        {props.currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
    </NavStyled>
  );
};
export default NavBar;

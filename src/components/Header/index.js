import React from 'react';
import logo from "../../assets/logo.svg";
import "./styled.css";

const Header = () => (
  <header className="header-container">
    <img src={logo} className="header-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <a
      className="header-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
);

export default Header;

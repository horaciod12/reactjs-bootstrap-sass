import React from "react";

import logoNav from "../assets/imgs/logo-nav.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logoNav} alt="Logo" />
        </a>
        <button type="button" className="Button-login btn btn-primary">
          LOGIN
        </button>
        <button type="button" className="Hamburguer-btn btn btn-primary">
          <div className="Line-1 mb-1"></div>
          <div className="Line-2 mb-1"></div>
          <div className="Line-3"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

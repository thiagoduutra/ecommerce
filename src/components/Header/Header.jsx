import React from "react";
import "./Header.scss";
import { User, LogIn, ShoppingCart } from "react-feather";

const Header = () => {
  return (
    <section className="container-header">
      <div className="container-header__wrapper">
        <a href="/" className="brand-title">
          Duck Products
        </a>
        <nav className="container-navBar">
          <ul className="container-ul">
            <li className="navbar-li">
              {" "}
              <a href="#">Home</a>{" "}
            </li>
            <li className="navbar-li">
              {" "}
              <a href="#">Produtos</a>{" "}
            </li>
            <li className="navbar-li">
              {" "}
              <a href="#">Sobre nós</a>{" "}
            </li>
            <li className="navbar-li">
              {" "}
              <a href="#">Contato</a>{" "}
            </li>
          </ul>
        </nav>
        <div className="container-navBar__btns">
          <a href="" className="btn-navbar btn-Login">
            <User className="svg-btn" />
            Login
          </a>
          <a href="" className="btn-navbar btn-Register">
            <LogIn className="svg-btn" />
            Registrar
          </a>
          <a href="" className="btn-navbar btn-Cart">
            <ShoppingCart className="svg-btn" />
            Carrinho (0)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;

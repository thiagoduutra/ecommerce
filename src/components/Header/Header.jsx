import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { User, LogIn, ShoppingCart } from "react-feather";

const Header = () => {
  return (
    <section className="container-header animeLeft">
      <div className="container-header__wrapper">
        <a href="/" className="brand-title">
          Duck Products
        </a>
        <nav className="container-navBar">
          <ul className="container-ul">
            <li className="navbar-li">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/sobre-nos">Sobre nós</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/contato">Contato</NavLink>
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

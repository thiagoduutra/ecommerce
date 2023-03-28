import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { User, LogIn, ShoppingCart } from "react-feather";

const Header = (props) => {
  return (
    <section className="container-header animeLeft">
      <div className="container-header__wrapper">
        <Link to="/" className="brand-title">
          Duck Bakery
        </Link>
        <nav className="container-navBar">
          <ul className="container-ul">
            <li className="navbar-li">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/sobre-nos">Sobre</NavLink>
            </li>
            <li className="navbar-li">
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </nav>
        <div className="container-navBar__btns">
          <NavLink to="/login" className="btn-navbar btn-Login">
            <User className="svg-btn" />
            Login
          </NavLink>
          <NavLink to="/registrar" className="btn-navbar btn-Register">
            <LogIn className="svg-btn" />
            Registrar
          </NavLink>
          <NavLink to="/cart" className="btn-navbar btn-Cart">
            <ShoppingCart className="svg-btn" />
            Carrinho
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Header;

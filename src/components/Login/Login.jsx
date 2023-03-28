import React from "react";
import { Link } from "react-router-dom";
import Head from "../HeadPage/Head";
import "./Login.scss";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="animeLeft">
      <Head title="Bakery | Login" description="Faça login" />
      <div className="container-login">
        <img
          className="img-login"
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"
          alt="imagem padaria"
        />
        <div className="container-login">
          <h1 className="title-login">Login</h1>
          <form className="form-login" action="" onSubmit={handleSubmit}>
            <label className="label-login" htmlFor="username">
              Nome
            </label>
            <input
              className="input-login"
              id="username"
              type="text"
              name="username"
            />
            <label className="label-login" htmlFor="password">
              Senha
            </label>
            <input
              className="input-login"
              id="password"
              type="password"
              name="password"
            />
            <div className="container-btnLogin">
              <input className="btn-login" type="submit" value="Entrar" />
              <Link className="forget-login" to="/login/forgetPassword">
                Esqueceu a senha?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

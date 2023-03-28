import React from "react";
import { Link } from "react-router-dom";
import Head from "../HeadPage/Head";
import "./Registrar.scss";

const Registrar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="animeLeft">
      <Head title="Bakery | registrar" description="Faça registrar" />
      <div className="container-registrar">
        <img
          className="img-registrar"
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
          alt="imagem padaria"
        />
        <div className="container-registrar">
          <h1 className="title-registrar">Registrar</h1>
          <form className="form-registrar" action="" onSubmit={handleSubmit}>
            <label className="label-registrar" htmlFor="username">
              Nome
            </label>
            <input
              className="input-registrar"
              id="username"
              type="text"
              name="username"
              placeholder="Nome completo"
            />
            <label className="label-registrar" htmlFor="email">
              E-mail
            </label>
            <input
              className="input-registrar"
              id="email"
              type="email"
              name="email"
              placeholder="exemplo@hotmail.com"
            />
            <label className="label-registrar" htmlFor="tel">
              Telefone
            </label>
            <input
              className="input-registrar"
              id="tel"
              type="tel"
              name="tel"
              placeholder="(99) 99999-9999"
            />
            <label className="label-registrar" htmlFor="password">
              Senha
            </label>
            <input
              className="input-registrar"
              id="password"
              type="password"
              name="password"
            />
            <div className="container-btnRegistrar">
              <input className="btn-registrar" type="submit" value="Entrar" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registrar;

import React from "react";
import Head from "../HeadPage/Head";
import "./Contato.scss";

const Contato = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="animeLeft">
      <Head title="Bakery | Contato" description="Fale conosco" />
      <div className="container-contato">
        <img
          className="img-contato"
          src="https://images.unsplash.com/photo-1583338917451-face2751d8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="imagem padaria"
        />
        <div className="container-description">
          <h2 className="descrip-title">Contato</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="label-form" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              className="input-form"
              type="text"
              name="name"
              placeholder="Nome completo"
            />

            <label className="label-form" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              className="input-form"
              type="email"
              name="email"
              placeholder="exemplo@hotmail.com"
            />

            <label className="label-form" htmlFor="message">
              Mensagem
            </label>
            <textarea
              id="message"
              className="input-form"
              type="text"
              name="message"
            ></textarea>
            <div className="container-btnContato">
              <input className="btn-input" type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;

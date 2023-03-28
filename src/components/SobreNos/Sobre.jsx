import React from "react";
import Head from "../HeadPage/Head";
import "./Sobre.scss";

const Sobre = () => {
  return (
    <div className="animeLeft">
      <Head title="Bakery | Sobre" description="Nos conheça melhor" />
      <div className="container-sobre">
        <img
          className="img-sobreNos"
          src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="imagem padaria"
        />
        <div className="container-description">
          <h2 className="descrip-title">Duck Products</h2>
          <p className="descrip-text">
            A Duck Bakery é uma empresa que se preocupa em oferecer ao cliente o
            melhor. Nossa principal meta é oferecer produtos diferenciados, com
            preço acessível, e produtos de alta qualidade. Trabalhamos com
            fabricação própria, por isso conseguimos oferecer preços acessíveis.
            Estamos há mais de 10 anos no ramo da alimentício e inauguramos em
            2011 alcançando sucesso absoluto com nossos clientes. Para que mais
            pessoas pudessem ter acesso aos nossos produtos, estamos lançando
            nossa loja virtual, onde nossos clientes podem fazer suas compras e
            encomendas. Nosso atendimento está sempre à disposição, antes e
            depois da compra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;

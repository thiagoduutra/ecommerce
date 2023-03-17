import React from "react";
import "./Main.scss";
import DuckImage from "../../assets/duck-products.jpg";
import Header from "../Header/Header";
import Head from "../HeadPage/Head";

const Main = () => {
  return (
    <div className="animeLeft">
      <Head title="Bakery | Home" description="Home Page" />
      <Header />
      <div className="container-mainCard">
        <img src={DuckImage} alt="shopping-products" className="card-img" />

        <div className="container-card">
          <h5 className="container-card__title">Novo jeito de comprar</h5>
          <p className="container-card__description">
            Confira todos os produtos
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

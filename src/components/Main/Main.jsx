import React from "react";
import "./Main.scss";
import DuckImage from "../../assets/duck-products.jpg";

const Main = () => {
  return (
    <div className="container-mainCard">
      <img src={DuckImage} alt="shopping-products" className="card-img" />

      <div className="container-card">
        <h5 className="container-card__title">Novo jeito de comprar</h5>
        <p className="container-card__description">Confira todos os produtos</p>
      </div>
    </div>
  );
};

export default Main;

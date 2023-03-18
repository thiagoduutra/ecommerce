import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import data from "../../data/bakeryBD";
import "./Product.scss";

const Product = () => {
  const { id } = useParams();
  const produto = data.find((p) => p.id === parseInt(id));
  if (!data) {
    return <div>Produto não encontrado.</div>;
  }
  return (
    <div className="animeLeft">
      <Header />
      <div className="container-product">
        <div className="container-img">
          <img className="product-img" src={produto.image} alt={produto.name} />
        </div>
        <div className="container-description">
          <h2 className="product-category">{produto.category}</h2>
          <h1 className="product-title">{produto.name}</h1>
          <span className="product-price">R$ {produto.price.toFixed(2)}</span>

          <div className="container-btn">
            <button className="btn btn-adicionar">Adicionar ao carrinho</button>
            <button className="btn">Concluir a compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

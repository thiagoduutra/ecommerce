import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../data/bakeryBD";
import Head from "../HeadPage/Head";

import "./ProductDetails.scss";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const produto = data.products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    onAddToCart(produto);
  };

  return (
    <div className="animeLeft">
      <Head title="Bakery | Produto" description="Produtos para comprar" />

      <div className="container-product">
        <div className="container-img">
          <img className="product-img" src={produto.image} alt={produto.name} />
        </div>
        <div className="container-description">
          <h2 className="product-category">{produto.category}</h2>
          <h1 className="product-title">{produto.name}</h1>
          <span className="product-price">R$ {produto.price.toFixed(2)}</span>

          <div className="container-btn">
            <button onClick={handleAddToCart} className="btn btn-adicionar">
              Adicionar ao carrinho
            </button>

            <Link to="/produtos">
              <button className="btn">Continuar comprando</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import Header from "../Header/Header";
import Head from "../HeadPage/Head";
import data from "../../data/bakeryBD";

import "./Products.scss";

const Products = () => {
  const [itemsShow, setItemsShow] = useState(4);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  return (
    <div className="products-area animeLeft">
      <Head title="Bakery | Produtos" description="Produtos para comprar" />
      <Header />
      <h1 className="product-title">Produtos recém adicionados</h1>
      <div className="container-products">
        {data.slice(0, itemsShow).map((produto) => {
          return (
            <div className="wrapper-products" key={produto.id}>
              <img className="product-img" src={produto.image} alt="" />
              <h2>{produto.name}</h2>
              <p className="product-prince">R$ {produto.price}</p>
              <button className="btn-buy">Comprar</button>
            </div>
          );
        })}
      </div>
      <div className="container-btnProducts">
        {itemsShow < data.length && (
          <button
            className="btn-products"
            onClick={() => setItemsShow(itemsShow + itemsPerPage)}
          >
            Carregar mais
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;

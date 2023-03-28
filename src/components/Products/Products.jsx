import React, { useEffect, useState } from "react";
import Head from "../HeadPage/Head";
import data from "../../data/bakeryBD";
import { Link } from "react-router-dom";

import { ArrowUp } from "react-feather";

import "./Products.scss";

const Products = () => {
  const [itemsShow, setItemsShow] = useState(4);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [showTopButton, setShowTopButton] = useState(false);

  const btnTop = () => {
    if (window.pageYOffset > 0) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", btnTop);
    return () => window.removeEventListener("scroll", btnTop);
  }, []);

  const handleMoreClick = () => {
    setItemsShow(itemsShow + itemsPerPage);
  };

  return (
    <div className="products-area animeLeft">
      <Head title="Bakery | Produtos" description="Produtos para comprar" />
      <h1 className="product-title">Produtos recém adicionados</h1>
      <div className="container-products">
        {data.products.slice(0, itemsShow).map((produto) => {
          return (
            <div className="wrapper-products" key={produto.id}>
              <img
                className="product-img"
                src={produto.image}
                alt={produto.name}
              />

              <h2>{produto.name}</h2>
              <p className="product-prince">R$ {produto.price.toFixed(2)}</p>
              <Link to={`/produto/${produto.id}`}>
                <button className="btn-buy">Comprar</button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="container-btnProducts">
        {itemsShow < data.products.length && (
          <button className="btn-products" onClick={handleMoreClick}>
            Carregar mais
          </button>
        )}
      </div>
      {showTopButton && (
        <div
          className="btn-isTop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp color="white" />
        </div>
      )}
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Head from "../HeadPage/Head";
import "./Products.scss";

const Products = () => {
  //   const [data, setData] = useState([]);
  //   const [filter, setFilter] = useState(data);
  //   const [loading, setLoading] = useState(false);
  //   let componentMounted = false;

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       setLoading(true);

  //       const response = await fetch
  //     };

  //     getProducts();
  //   }, []);

  return (
    <div>
      <Head title="Bakery | Produtos" description="Produtos para comprar" />
      <Header />
    </div>
  );
};

export default Products;

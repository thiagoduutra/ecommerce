import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Produtos from "./components/Products/Products";
import SobreNos from "./components/SobreNos/Sobre";
import Contato from "./components/Contato/Contato";
import ProdutoDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Registrar from "./components/Registrar/Registrar";
import Cart from "./components/Cart/Cart";
import data from "./data/bakeryBD";

import "./Styles/style.scss";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (itemIndex >= 0) {
      const item = cartItems[itemIndex];
      const updatedItem = {
        ...item,
        product: product,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex] = updatedItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product }]);
    }
  };

  return (
    <div className="App animeLeft">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path={`/produto/:id`}
              element={
                <ProdutoDetails
                  product={data.products}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart items={cartItems} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Head from "../HeadPage/Head";

import "./Cart.scss";

const Cart = ({ items }) => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(
    items.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleQuantityChange = (itemToUpdate, newQuantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.product === itemToUpdate.product) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  //retornar valor
  const totalPrice = (item) => {
    return item.product.price * item.quantity;
  };

  useEffect(() => {
    const newTotal = cartItems.reduce((acc, item) => acc + totalPrice(item), 0);
    setTotal(newTotal);
  }, [cartItems]);

  //remove um item do carrinho
  const handleRemoveItem = (itemToRemove) => {
    const newCartItems = cartItems.filter(
      (item) => item.product !== itemToRemove.product
    );
    setCartItems(newCartItems);
  };

  return (
    <div className="animeLeft">
      <Head title="Bakery | Carrinho" description="conclua sua compra" />
      <h1 className="title-itemCart">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-msg">Carrinho vazio.</p>
      ) : (
        <>
          <div className="container-wrapper">
            {cartItems.map((item) => {
              return (
                <div className="container-itemCart" key={item.id}>
                  <div className="container-descripCart">
                    <img
                      className="img-cart"
                      src={item.product.image}
                      alt={item.product.name}
                    />
                    <div className="container-info">
                      <span className="text-title">{item.product.name}</span>
                      <div className="container-quantity">
                        <label htmlFor="quantidade">Quantidade: </label>
                        <select
                          className="container-selectOpt"
                          name="quantidade"
                          value={item.quantity}
                          id="quantidade"
                          onChange={(e) =>
                            handleQuantityChange(item, e.target.value)
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>

                      <p className="total-item">
                        R$ {(item.quantity * item.product.price).toFixed(2)}
                      </p>
                    </div>
                    <button
                      className="btn-closed"
                      onClick={() => handleRemoveItem(item)}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container-total">
            <p className="totalPreco">Total: R$ {total.toFixed(2)}</p>
            <button className="btn-buy">Comprar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

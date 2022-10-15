import React, { useState, useEffect } from "react";
import { Products, Navbar, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Navbar totalItem={cart ? cart.total_items : "wait"} />}
          >
            <Route
              index
              element={
                <Products products={products} onAddToCar={handleAddToCart} />
              }
            />
            <Route
              path="cart"
              element={
                <Cart
                  cart={cart}
                  handleUpdateCartQty={handleUpdateCartQty}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route path="checkout" element={<Checkout cart={cart} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

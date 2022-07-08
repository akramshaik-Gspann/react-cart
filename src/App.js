import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductPage from "./containers/Products/products";
import "./App.css";
import ProductDetails from "../src/containers/Product/productDetail";
import Header from '../src/containers/Header/header';
import Footer from "./containers/Footer/footer";

import Basket from "./containers/Cart/basket";
import Home from "./containers/Home/home";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Header countCartItems={cartItems.length} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<ProductPage />} />
          <Route exact path='/product/:productId' element={<ProductDetails onAdd={onAdd} />} />
          <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

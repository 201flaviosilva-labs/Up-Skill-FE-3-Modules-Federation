import React from "react";
import NavBar from "./NavBar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

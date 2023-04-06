import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </>
  );
}

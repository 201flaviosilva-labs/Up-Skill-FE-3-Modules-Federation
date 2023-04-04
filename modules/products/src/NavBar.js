import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const ListStyled = styled.nav`
  height: 30px;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 20px;
  background-color: #ffffe0;
`;

export default function NavBar() {
  const location = useLocation();

  useEffect(() => {
    window.reloadSvelte && window.reloadSvelte(location.pathname === "/cart");
  }, [location]);
  return (
    <nav>
      <ListStyled>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/cats">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ListStyled>
    </nav>
  );
}

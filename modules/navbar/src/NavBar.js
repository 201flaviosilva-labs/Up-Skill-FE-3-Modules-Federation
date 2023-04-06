import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    will.dispatch("route-change", { route: location.pathname, });
  }, [location]);

  useEffect(() => {
    will.subscribe("navbar-pathname-update", ({ route }) => {
      if (!route.includes("/products")) navigate(route);
    });
  }, []);

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

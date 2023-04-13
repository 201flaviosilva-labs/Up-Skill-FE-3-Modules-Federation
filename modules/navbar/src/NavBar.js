import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ListStyled } from "./ListStyled";

export const willDispatch = (location) =>
  will.dispatch("route-change", { route: location.pathname });

export const navBarPathNameUpdateCallback =
  (navigate) =>
  ({ route }) => {
    if (!route.includes("/products")) navigate(route);
  };

export const willSubscribe = (navigate) => {
  will.subscribe(
    "navbar-pathname-update",
    navBarPathNameUpdateCallback(navigate)
  );
};

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => willDispatch(location), [location]);

  useEffect(() => willSubscribe(navigate), [navigate]);

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

import React, { useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Products from "./pages/Products";
const Home = React.lazy(() => import('home/App'));

export default function App() {
  return (
    <Router>
      <Mourinho />
      <Routes>
        <Route path="products/:productType" element={<Products />} />
      </Routes>
    </Router>
  );
}

function Mourinho() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    will.subscribe("route-change", ({ route }) => navigate(route));
  }, []);

  useEffect(() => {
    if (location.pathname.includes("/products"))
      will.dispatch("navbar-pathname-update", { route: location.pathname });
  }, [location]);

  return <></>;
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

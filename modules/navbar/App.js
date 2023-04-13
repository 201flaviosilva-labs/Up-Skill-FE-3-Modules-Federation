import React, { useEffect, useState } from "react";

export const result = () => false;

export const App = () => {
  const [shouldRender, setShouldRender] = useState(result());

  useEffect(() => {
    will.subscribe("route-change", ({ route }) =>
      setShouldRender(route === "/")
    );
  }, []);
  if (!shouldRender) return <></>;
  return (
    <>
      <section id="products__container">
        <h2>Top Products</h2>
        <div className="card__container">cenas1</div>
      </section>
      <section id="categories__container">
        <h2>Categories</h2>
        cenas2
      </section>
    </>
  );
};

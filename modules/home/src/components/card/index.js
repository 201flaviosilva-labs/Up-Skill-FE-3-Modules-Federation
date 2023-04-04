import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Card({ img, text, href, key }) {
  return (
    <Link to={href} key={key}>
      <article>
        <img src={img} />
        <h3>{text}</h3>
      </article>
    </Link>
  );
}

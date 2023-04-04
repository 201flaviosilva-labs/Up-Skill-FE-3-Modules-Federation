import React from "react";
import { Link } from "react-router-dom";

export function List({ children }) {
  return <ul>{children}</ul>;
}

export function ListItem({ text, key, href }) {
  return (
    <Link to={href}>
      <li key={key}>{text}</li>
    </Link>
  );
}

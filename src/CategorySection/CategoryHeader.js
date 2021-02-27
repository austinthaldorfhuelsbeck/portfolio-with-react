import React from "react";
import { Link } from "react-router-dom";

export default function CategoryHeader({ title, subtitle = null }) {
  const subtitleElement = subtitle ? <p>{subtitle}</p> : <p></p>;
  return (
    <header className="category-header">
      <Link to={`/${title}`}>
        <h1 className="category-title">{title}</h1>
      </Link>
      <hr />
      {subtitleElement}
    </header>
  );
}

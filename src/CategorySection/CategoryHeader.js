import React from "react";
import { Link } from "react-router-dom";

export default function CategoryHeader({ title, subtitle = null }) {
  const subtitleElement = subtitle ? <p>{subtitle}</p> : <p></p>;
  return (
    <header className="category-header">
      <h1 className="resume-title">
        <Link to={`/${title}`}>{title}</Link>
      </h1>
      <hr />
      {subtitleElement}
    </header>
  );
}

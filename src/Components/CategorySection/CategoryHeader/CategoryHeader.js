import React from "react";

export default function CategoryHeader({ title, subtitle = null }) {
  const subtitleElement = subtitle ? <p>{subtitle}</p> : <p></p>;
  return (
    <header className="category-header">
      <h1 className="category-title">{title}</h1>
      <hr />
      {subtitleElement}
    </header>
  );
}
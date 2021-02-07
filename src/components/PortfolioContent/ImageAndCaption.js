import React from "react";

function ImageAndCaption({ title, caption, data }) {
  // Find the page data
  const imgSrc = data[title].imageUrl;

  // Build the section and return
  return (
    <article id={title.toLowerCase()} data-nav={title.toLowerCase()}>
      <header className="category-header">
        <h1 className="category-title">{title}</h1>
      </header>
      <hr />
      <div className="flex-container">
        <img
          src={imgSrc}
          alt={title}
          title="Photo by: Henry Tieu Photography"
          className="inset-image"
        />
      </div>
      {caption}
    </article>
  );
}

export default ImageAndCaption;

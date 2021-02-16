import React from "react";
import CategoryHeader from "../CategorySection/CategoryHeader/CategoryHeader";

function ImageAndCaption({ title, caption, data }) {
  // Find the page data
  const imgSrc = data[title].imageUrl;
  const imgTitle = data[title].imageTitle;

  // Build the section and return
  return (
    <article id={title.toLowerCase()} data-nav={title.toLowerCase()}>
      <CategoryHeader title={title} />
      <div className="flex-container">
        <img
          src={imgSrc}
          alt={title}
          title={imgTitle}
          className="inset-image"
        />
      </div>
      {caption}
    </article>
  );
}

export default ImageAndCaption;

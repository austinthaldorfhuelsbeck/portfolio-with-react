import React from "react";
import CategoryHeader from "./CategorySection/CategoryHeader/CategoryHeader";

function ImageAndCaption({ title, caption, data }) {
  // Find the page data
  const imgSrc = data.imageUrl;
  const imgTitle = data.imageTitle;

  // Build the section and return
  return (
    <section id={title.toLowerCase()} data-nav={title.toLowerCase()}>
      <CategoryHeader title={title} />
      <div>
        <div className="flex-container" data-aos="fade-up">
          <img
            src={imgSrc}
            alt={title}
            title={imgTitle}
            className="inset-image"
          />
        </div>
        {caption}
      </div>
    </section>
  );
}

export default ImageAndCaption;

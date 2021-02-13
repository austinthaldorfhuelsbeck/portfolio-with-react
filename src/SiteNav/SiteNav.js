import React from "react";

export default function SiteNav({ pages }) {
  const pagesList = pages.map((page, index) => {
    return (
      <li key={index}>
        <a title={page.toLowerCase} href="">
          {page}
        </a>
      </li>
    );
  });

  return (
    <nav id="site-nav" data-aos="fade-up">
      <ul id="menu">{pagesList}</ul>
    </nav>
  );
}

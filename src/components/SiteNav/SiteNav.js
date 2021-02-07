import React from "react";
import { data } from "../../data";

const pages = Object.keys(data);
const pageData = Object.values(data);

const pagesList = pages.map((page, index) => {
  const href = pageData[index].url;
  return (
    <li key={index}>
      <a title={page.toLowerCase} href={href}>
        {page}
      </a>
    </li>
  );
});

function SiteNav() {
  return (
    <nav id="site-nav">
      <ul id="menu">{pagesList}</ul>
    </nav>
  );
}

export default SiteNav;

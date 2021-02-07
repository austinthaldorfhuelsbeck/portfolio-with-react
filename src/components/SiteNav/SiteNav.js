import React from "react";

function SiteNav({ data }) {
  // Get arrays of keys and values
  // Keys are page title, values hold urls
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

  return (
    <nav id="site-nav">
      <ul id="menu">{pagesList}</ul>
    </nav>
  );
}

export default SiteNav;

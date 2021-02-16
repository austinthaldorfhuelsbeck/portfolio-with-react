import React from "react";

export default function SiteNav(props) {
  const pagesList = props.pages.map((page, index) => {
    const link = `/${page.toLowerCase}`;
    return (
      <li key={index}>
        <NavLink to={link}>{page}</NavLink>
      </li>
    );
  });

  return (
    <nav id="site-nav">
      <ul id="menu">{pagesList}</ul>
    </nav>
  );
}

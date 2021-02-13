import React from "react";

export default function SiteNav(props) {
  const pagesList = props.pages.map((page, index) => {
    const title =
      props.currentPage === page ? <strong>{page}</strong> : <em>{page}</em>;
    return (
      <li key={index}>
        <button onClick={props.setCurrentPage(page)}>{title}</button>
      </li>
    );
  });

  return (
    <nav id="site-nav">
      <ul id="menu">{pagesList}</ul>
    </nav>
  );
}

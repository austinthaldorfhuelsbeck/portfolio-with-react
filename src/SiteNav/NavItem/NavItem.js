import React from "react";

export default function NavItem(props) {
  const { pageTitle, index, currentPage, handleNavClick } = props;

  return (
    <li key={index}>
      <button type="button" onClick={handleNavClick}>
        {pageTitle}
      </button>
    </li>
  );
}

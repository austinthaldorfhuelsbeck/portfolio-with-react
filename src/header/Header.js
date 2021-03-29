import React from "react";
import { Link } from "react-router-dom";

export default function Header({ pages }) {
  return (
    <div className="header">
      <Link to="/apps">
        <hgroup className="header-title">
          <h1>Austin Thaldorf-Huelsbeck</h1>
        </hgroup>
      </Link>
    </div>
  );
}

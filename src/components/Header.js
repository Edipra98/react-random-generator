import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="col">
        <div className="generator-name">
          Random
          <br />
          Pokemon
          <br />
          Generator
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Header;

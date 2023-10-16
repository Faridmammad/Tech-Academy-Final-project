import "./hamburger.scss"

import React, { useState } from 'react';

const ResponsiveNav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className={`menu ${menuVisible ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/pricing">Pricing</a>
        <a href="/content">Content</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default ResponsiveNav;

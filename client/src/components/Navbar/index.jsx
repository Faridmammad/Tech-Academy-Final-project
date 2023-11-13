import { useState } from "react";

import "./Navbar.scss"; // Import your CSS styles
import "../../assets/fonts/fonts.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className={`navbar ${showMobileMenu ? "mobile-menu-open" : ""}`}>
      <div className="logo">IconFood</div>

      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${showMobileMenu ? "active" : ""}`}>
        <Link className="nnav" to={"/"}>
          Home
        </Link>
        <Link className="nnav" to={"/products"}>
          Shop
        </Link>
        <Link className="nnav" to={"/about"}>
          About
        </Link>
        <Link className="nnav" to={"/blogs"}>
          Blog
        </Link>
        <Link className="nnav" to={"/contact"}>
          Contact
        </Link>
        <Link className="nnav" to={"/pages"}>
          Pages
        </Link>
      </ul>

      <ul className="nav-links">
        <Link className="nnav" to={"/login"}>
          Login
        </Link>

        <Link className="nnav" to={"/register"}>
          <Button className="become_member" label="Become a member" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;

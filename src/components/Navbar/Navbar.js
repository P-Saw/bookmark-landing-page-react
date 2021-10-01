import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo-bookmark.svg";
import logoWhite from "../../assets/logo-bookmark-w.png";
import Button from "../GlobalButton/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [button, setButton] = useState(true);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  const closeMobileMenu = () => setMenuOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className={menuOpen ? "navbar navbar-open" : "navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={menuOpen ? logoWhite : logo} alt="" />
        </Link>
        <div
          className={`menu-hamburger ${menuOpen ? "open" : ""}`}
          onClick={handleMenuOpen}
        >
          <div className="icon-hamburger"></div>
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/features"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              FEATURES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-links" onClick={closeMobileMenu}>
              PRICING
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            {button && <Button text="LOGIN" buttonClass="btn-red" />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-bookmark-w.png";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container section-global">
        <div className="footer-list">
          <img src={logo} alt="" className="footer-logo" />
          <Link to="/" className="footer-item">
            FEATURES
          </Link>
          <Link to="/" className="footer-item">
            PRICING
          </Link>
          <Link to="/" className="footer-item">
            CONTACT
          </Link>
        </div>
        <div className="socials-container">
          <Link to="/">
            <img src={facebookIcon} alt="" />
          </Link>
          <Link to="/">
            <img src={twitterIcon} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

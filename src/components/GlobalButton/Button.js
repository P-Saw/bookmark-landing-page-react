import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, buttonClass, route, onClick }) => {
  return (
    <Link to={`/${route}`} className="btn-mobile">
      <button className={`btn ${buttonClass}`} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;

import { useState } from "react";
import Button from "../Button";
import Validation from "./Validation";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError(Validation(email));
  };

  return (
    <div className="newsletter">
      <div className="news-wrapper section-global">
        <p className="news-p">35.000+ ALREADY JOINED</p>
        <h2 className="news-heading">Stay up-to-date with what we're doing</h2>
        <form className="news-form">
          <div className={`input-wrapper ${error ? "invalid" : ""}`}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
          </div>
          <Button
            text="Contact Us"
            buttonClass="btn-red news-btn"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

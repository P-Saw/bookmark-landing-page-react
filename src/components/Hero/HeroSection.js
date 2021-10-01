import Button from "../GlobalButton/Button";
import "./HeroSection.css";
import heroImg from "../../assets/illustration-hero.svg";

const HeroSection = () => {
  return (
    <div className="hero-section section-global">
      <div className="hero-container">
        <div className="hero-img-container">
          <div className="img-background"></div>
          <img src={heroImg} alt="" className="hero-img" />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">A Simple Bookmark Manager</h1>
          <p className="standard-p">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="buttons-container">
            <Button text="Get it on Chrome" buttonClass="btn-blue btn-m-l" />
            <Button text="Get it on Firefox" buttonClass="btn-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

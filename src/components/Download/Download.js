import BrowserCard from "./BrowserCard";
import "./Download.css";
import chromeLogo from "../../assets/logo-chrome.svg";
import firefoxLogo from "../../assets/logo-firefox.svg";
import operaLogo from "../../assets/logo-opera.svg";

const Download = () => {
  return (
    <section className="download-section section-global">
      <div className="text-container">
        <h2 className="standard-heading">Download the extension</h2>
        <p className="standard-p">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="browser-cards-container">
        <BrowserCard img={chromeLogo} browser="Chrome" version="62" />
        <BrowserCard img={firefoxLogo} browser="Firefox" version="55" />
        <BrowserCard img={operaLogo} browser="Opera" version="46" />
      </div>
    </section>
  );
};

export default Download;

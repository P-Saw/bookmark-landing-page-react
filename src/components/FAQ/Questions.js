import Button from "../GlobalButton/Button";
import FAQaccordion from "./FAQaccordion";
import "./Questions.css";

const Questions = () => {
  return (
    <section className="questions-section section-global">
      <div className="text-container">
        <h2 className="standard-heading">Frequently Asked Questions</h2>
        <p className="standard-p">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <FAQaccordion />
      <Button text="More Info" buttonClass="btn-blue" />
    </section>
  );
};

export default Questions;

import arrow from "../../assets/icon-arrow.svg";
import { useState } from "react";

const FAQaccordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="accordion-container">
      {questionsData.map((item, i) => (
        <div key={i} className="accordion-item">
          <div className="question" onClick={() => toggle(i)}>
            <p className="question-text">{item.question}</p>
            <img
              src={arrow}
              alt=""
              className={`arrow-img ${selected === i ? "rotate" : ""}`}
            />
          </div>
          <div className={`answer ${selected === i ? "active" : ""}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const questionsData = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export default FAQaccordion;

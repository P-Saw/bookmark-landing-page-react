import { useState } from "react";
import ChooseCard from "./ChooseCard";
import bookmarkImg from "../../assets/illustration-features-tab-1.svg";
import searchImg from "../../assets/illustration-features-tab-2.svg";
import shareImg from "../../assets/illustration-features-tab-3.svg";
import "./Features.css";

const Features = () => {
  const [chosenCard, setChosenCard] = useState("bookmark");

  function handleSetCard(cardName) {
    setChosenCard(cardName);
  }

  return (
    <section className="features-section section-global">
      <div className="text-container">
        <h2 className="standard-heading">Features</h2>
        <p className="standard-p">
          Our aim is to make it quick and easy for you to access you favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="cards-container">
        <div className="choice-btns">
          <button
            className={`feature-btn ${
              chosenCard === "bookmark" ? "active" : ""
            }`}
            onClick={() => handleSetCard("bookmark")}
          >
            Simple Bookmarking
          </button>
          <button
            className={`feature-btn ${chosenCard === "search" ? "active" : ""}`}
            onClick={() => handleSetCard("search")}
          >
            Speedy Searching
          </button>
          <button
            className={`feature-btn ${chosenCard === "share" ? "active" : ""}`}
            onClick={() => handleSetCard("share")}
          >
            Easy Sharing
          </button>
        </div>
        {chosenCard === "bookmark" && (
          <ChooseCard
            heading="Bookmark in one click"
            text="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your fovurite sites."
            img={bookmarkImg}
          />
        )}
        {chosenCard === "search" && (
          <ChooseCard
            heading="Intelligent search"
            text="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            img={searchImg}
          />
        )}
        {chosenCard === "share" && (
          <ChooseCard
            heading="Share your bookmarks"
            text="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
            img={shareImg}
          />
        )}
      </div>
    </section>
  );
};

export default Features;

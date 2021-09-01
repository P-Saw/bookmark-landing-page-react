import Button from "../Button";

const ChooseCard = ({ heading, text, img }) => {
  return (
    <div className="chosen-card">
      <div className="img-container">
        <div className="img-background2"></div>
        <img src={img} alt="" className="card-img" />
      </div>
      <div className="card-text-container">
        <h2 className="standard-heading">{heading}</h2>
        <p className="standard-p">{text}</p>
        <Button text="More Info" buttonClass="btn-blue btn-m-l" />
      </div>
    </div>
  );
};

export default ChooseCard;

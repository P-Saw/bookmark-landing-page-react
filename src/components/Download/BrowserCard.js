import Button from "../Button";

const BrowserCard = ({ browser, version, img }) => {
  return (
    <div className="browser-card">
      <div className="browser-info">
        <img src={img} alt="" />
        <h3 className="browser-heading">Add to {browser}</h3>
        <p className="standard-p">Minimum version {version}</p>
      </div>
      <Button text="Add & Install Extension" buttonClass="btn-blue" />
    </div>
  );
};

export default BrowserCard;

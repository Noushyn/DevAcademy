import "./HeroBox.css";
import CountUp from "react-countup";


function HeroBox({ title, count, children }) {
  return (
    <div className="heroBoxContainer">
      <div className="heroBoxHeader">
        {children}
        <b className="heroBoxTitle">{title}</b>
      </div>
      <p className="heroBoxCount">
        <CountUp
          start={0}
          end={count}
          duration={4}
          separator=""
          delay={0.5}
        />
      </p>
    </div>
  );
}

export default HeroBox;

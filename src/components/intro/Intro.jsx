import "./intro.css";
import Me from "../../img/me1.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Shubham Petwal</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
            <div className="i-title-item">3rd Year Student</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Python Developer</div>
            </div>
          </div>
          <p className="i-desc">
          A highly organized and smart-working individual looking for a responsible position to gain practical experience.
          </p>
        </div>
       
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

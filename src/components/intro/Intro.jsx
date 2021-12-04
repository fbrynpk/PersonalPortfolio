import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Febryan Putra Kartika</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MLAD Enthusiast</div>
              <div className="i-title-item">University Student</div>
              <div className="i-title-item">Software Engineer</div>
              <div className="i-title-item">Musician</div>
            </div>
          </div>
          <p className="i-desc">
            A third year student majoring in Electrical Engineering and Computer Science in National Taipei University of Technology
            passionate about learning technology and developing program.
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

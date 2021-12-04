import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="Photos from Pexels"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            I am from Indonesia, and studying university in Taiwan. Very enthusiastic about technology and how to develop software!
        </p>
        <p className="a-desc">
        I am currently learning about machine learning by using python to create and train CNN, specifically my project is about face recognition to recognize
          emotions. I am also trying to learn on how to create a good website both by backend and frontend.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Dean's List Award 2019/2020</h4>
            <p className="a-award-desc">
              Awarded for the top 7% in the department in the year 2019/2020 semester!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

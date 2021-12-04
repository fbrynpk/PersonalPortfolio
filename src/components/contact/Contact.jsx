import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import Docs from "../../img/documents.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">You can find me here!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +886973114752
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              fbrynpk@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              <a href="https://www.linkedin.com/in/febryan-putra-kartika-592934207/">Linkedin Profile</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a href="https://github.com/fbrynpk">Github Page</a>
            </div>
            <br/>
            <p>You can find and download my CV here!</p>
            <div className="c-info-item">
              <img className="c-icon" src={Docs} alt="" />
              <a href="cv.pdf" download>Curriculum Vitae</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Feel free to send me feedback about this website or any other projects!
          </p>
          <form action="https://formspree.io/f/xpzbagad" method="post">
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="10" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

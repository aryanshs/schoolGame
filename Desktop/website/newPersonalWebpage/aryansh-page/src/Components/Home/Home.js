import react, { useState } from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import profilePic from "../../Images/profilePic.png";
import linkedin from "../../Images/linkedin.png";
import emailIcon from "../../Images/message.png";
import github from "../../Images/github.png";
import { useNavigate } from "react-router-dom";
import ResumeModal from "../Resume/ResumeModal";

export default function Home({ toggleResumeModal }) {
  const [isHome, setIsHome] = useState(true);
  const [isProjects, setIsProjects] = useState(false);
  const [isExperience, setIsExperience] = useState(false);

  const navigate = useNavigate();
  const setIsProjectsTrue = () => {
    // setIsHome(false);
    // setIsProjects(true);
    // setIsExperience(false);
    navigate("/projects");
  };

  const setIsExperienceTrue = () => {
    // setIsHome(false);
    // setIsProjects(false);
    // setIsExperience(true);
    navigate("/experience");
  };

  //   const setIsHomeTrue = () => {
  //     setIsHome(true);
  //     setIsProjects(false);
  //     setIsExperience(false);
  //   };

  return (
    <div className="home">
      <div className="nav">
        <Nav activePage="home" toggleResumeModal={toggleResumeModal} />
      </div>
      <div className="homeContainer">
        <div className="linkDiv">
          <a
            href="https://www.linkedin.com/in/aryansh-sharma-91a452129/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="images linkedIn" src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/aryanshs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="images gitHub" src={github} alt="GitHub" />
          </a>
          <a
            href="mailto:aryanshs118@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="emailLink"
          >
            <img className="images emailIcon" src={emailIcon} alt="Email" />
          </a>
        </div>

        <div class="corner-box corner-box-top-left"></div>
        <div className="mainContent">
          <div className="homeIntro">
            <h2>
              Hey! I am <span className="introName">Aryansh</span>
            </h2>
            <p>
              I am a <span className="spanStrong">Software Developer</span> with
              a knack for transforming ideas into Applications.
            </p>
            <div className="introButtons">
              <button
                className="introButton projectsButton"
                onClick={setIsProjectsTrue}
              >
                Projects
              </button>
              <button
                className="introButton experienceButton"
                onClick={setIsExperienceTrue}
              >
                Experience
              </button>
            </div>
          </div>
          <div className="homeImage">
            <img src={profilePic} alt="profilePic" />
          </div>
        </div>

        <div class="corner-box corner-box-bottom-right"></div>
      </div>
    </div>
  );
}

import { react, useState } from "react";
import "./Nav.css";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Nav({ activePage, toggleResumeModal }) {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  const [isHome, setIsHome] = useState(true);
  const [isProjects, setIsProjects] = useState(false);
  const [isExperience, setIsExperience] = useState(false);

  const setIsProjectsTrue = () => {
    setIsHome(false);
    setIsProjects(true);
    setIsExperience(false);
    navigate("/projects");
  };
  const setIsExperienceTrue = () => {
    setIsHome(false);
    setIsProjects(false);
    setIsExperience(true);
    navigate("/experience");
  };
  const setIsHomeTrue = () => {
    setIsHome(true);
    setIsProjects(false);
    setIsExperience(false);
    navigate("/");
  };
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <div className="nav-links">
        <ul>
          <li
            className={`nav-item ${activePage === "home" ? "active" : ""}`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`nav-item ${activePage === "projects" ? "active" : ""}`}
            onClick={() => navigate("/projects")}
          >
            Projects
          </li>
          <li
            className={`nav-item ${
              activePage === "experience" ? "active" : ""
            }`}
            onClick={() => navigate("/experience")}
          >
            Experience
          </li>

          <li
            className="nav-item"
            onClick={() => activePage !== "resume" && toggleResumeModal()}
          >
            Resume
          </li>
        </ul>
        {/* <hr /> */}
      </div>
    </div>
  );
}

import react from "react";
import "./Projects.css";
import back from "../../Images/back.png";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

export default function Projects({ toggleResumeModal }) {
  const navigate = useNavigate();
  const projects = [
    {
      name: "Uknighted",
      description:
        "Built a web app to help students to sell any services or goods to their fellow students in university",
      used: "ReactJS, PHP, SQL, HTML, CSS",
      link: "https://www-student.cse.buffalo.edu/CSE442-542/2023-Fall/cse-442al/build/",
    },
    {
      name: "WakeWatch",
      description:
        "An app that helps users stay awake while on a long drive. The device buzzes as soon as it detects that the user is falling asleep. The goal was to build a system that can help reduce accidents by keeping drivers alert. A fully functional app that uses an EEG sensor to read and detect brain waves of a user, which then our algorithm converts into useful data and determines if the user is in a state of drowsiness or attentiveness. The data is then read by the web app and buzzer is set off based on the user's state",
      used: "React.js, MONGODB Atlas, Express.js, Node.js, C++, Arduino",
      link: "https://devpost.com/software/wakewatch",
    },
    {
      name: "CampusLink",
      description:
        "A fully functional prototype to Uknighted, helps students share and market their skills and talents.",
      used: "React.js, Express.js, Postgresql, and Node.js",
      link: "https://webdev.cse.buffalo.edu/hci/teams/buffalofc/",
    },
    {
      name: "FishTank",
      description:
        "A web3 application that helps small businesses raise funds from their community. The investors get perks in return based on the amount invested (we plan on adding equity as one of the perks in the future)",
      used: "React.js, Solidity, and Node.js",
    },
    {
      name: "Security Sensor",
      description:
        "A prototype security sensor that calls the authorities if a specific sound is detected a number of times",
      used: "Nucelo, C++, mbed-os",
      link: "https://github.com/aryanshs/CSE321_Project3",
    },
    {
      name: "DriveToPay",
      description:
        "A blockchain app created to help people pay for their meal or parking ticket through their car's number plate",
      used: "React.js, Solidity, and Express.js, Node.js",
      link: "https://github.com/aryanshs/DriveToPay",
    },
  ];
  return (
    <div className="projects">
      <div className="projectsNav">
        <Nav activePage="projects" toggleResumeModal={toggleResumeModal} />
      </div>
      <div className="projectsContainer">
        <div className="projectsHeading">
          <img
            className="backButton"
            src={back}
            onClick={() => navigate("/")}
          />
          <h2>Projects</h2>
        </div>
        <div className="projectsList">
          {projects.map((project, index) => (
            <div
              className="project"
              style={{ "--animation-order": index }}
              key={project.name}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                Used: <span className="projectUsed">{project.used}</span>
              </p>
              {project.link ? (
                <a href={project.link} target="_blank">
                  Show Me
                </a>
              ) : (
                <p className="privateRepo">Private Repo</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

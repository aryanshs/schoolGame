import react from "react";
import "./Experience.css";
import Nav from "../Nav/Nav";
import back from "../../Images/back.png";
import { useNavigate } from "react-router-dom";
export default function Experience({ toggleResumeModal }) {
  const navigate = useNavigate();
  const experience = [
    {
      name: "Software Developer Intern",
      company: "InternGuys",
      duration: "September 2023 - Present",
      description: [
        "Spearheading end-to-end development tasks using React and TypeScript for the frontend and .NET, C# for backend integration.",
        "Conceiving and introducing innovative features to boost user engagement, working closely with the CEO to align with product vision",
        "Crafting, maintaining, and optimizing robust RESTful APIs using .NET, facilitating reliable frontend functionalities and third-party integrations Software Engineer Int",
      ],
    },
    {
      name: "Software Engineer Intern",
      company: "Willis Towers Watson",
      duration: "September 2022 - August 2023",
      description: [
        "Built software primarily using C#, .NET Core, Angular, SQL Server, and Azure technologies such as Azure Kubernetes Services",
        "Led the adoption of Cypress testing reducing test run times by 20%",
        "Worked on Frontend and Backend to build new features/enhancements for their website",
        "Helped improve the quality of software by writing automated tests and performing code reviews",
      ],
    },
    {
      name: "Software Engineer Intern",
      company: "NomanIT",
      duration: "May 2022 - August 2022",
      description: [
        "Built new and robust web applications using Angular, TypeScript, and Java",
        "Worked across the full stack to make highly scalable and responsive websites for a better user experience",
        "Led a team of two and maintaining a high standard of code quality thus making collaboration more seamless",
      ],
    },
    {
      name: "Student Software Engineer",
      company: "Center of Computational Research, University at Buffalo",
      duration: "January 2020 - May 2021",
      description: [
        "Assisted researchers with all things Linux, using Singularity containers, and running Python for their respective projects",
        "Maintained and helping users with their running jobs on our computer clusters",
        "Created informational documents and videos on issues and errors that users might face",
        "Multi-tasked in between various projects and fixing bugs with the legacy codes, and answering help tickets from prospective users",
      ],
    },
    {
      name: "IT Ambassador",
      company: "University at Buffalo",
      duration: "August 2021 - May 2022",
      description: [
        "Assisted Faculty with their technical issues and helped them with their devices",
        "Helped students with their UBlearns and UBmail accounts",
      ],
    },
  ];

  const highlightTerms = [
    "React",
    "TypeScript",
    "C#",
    ".NET",
    "Angular",
    "SQL Server",
    "Azure",
    "Kubernetes",
    "Cypress",
    "Java",
    "Python",
    "Linux",
    "RESTful APIs",
  ];

  function highlightTechnologies(description) {
    let highlightedDescription = description;
    highlightTerms.forEach((term) => {
      const regex = new RegExp(`(${term})`, "g");
      highlightedDescription = highlightedDescription.replace(
        regex,
        '<span class="highlight-tech">$1</span>'
      );
    });
    return highlightedDescription;
  }
  return (
    <div className="experience">
      <div className="experienceNav">
        <Nav activePage="experience" toggleResumeModal={toggleResumeModal} />
      </div>
      <div className="experienceContainer">
        <div className="exprienceHeading">
          <img
            className="backButton"
            src={back}
            onClick={() => navigate("/")}
          />
          <h2>Experience</h2>
        </div>

        <div className="experienceList">
          {experience.map((exp, index) => (
            <div
              className="experienceCard"
              style={{ "--animation-order": index }}
              key={exp.name}
            >
              <h3>{exp.name}</h3>
              <h4>{exp.company}</h4>
              <h4>{exp.duration}</h4>
              <ul>
                {exp.description.map((desc) => {
                  const replacedDesc = highlightTechnologies(desc);
                  return (
                    <li dangerouslySetInnerHTML={{ __html: replacedDesc }}></li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

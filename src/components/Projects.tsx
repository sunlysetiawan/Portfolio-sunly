import React from "react";
import "../App.css";

import githubIcon from "../icons/github.svg";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Smart Parking System with ALPR & Mobile App",
      description:
        "Developed an IoT-based parking system with Raspberry Pi, ultrasonic sensors, and ALPR for license plate recognition and automated entry. Integrated AWS services and built a Flutter app with Cognito for real-time slot availability, history, and payments.",
      tech: [
        "Raspberry Pi",
        "Python",
        "OpenCV",
        "AWS",
        "Figma",
        "Flutter",
        "REST API",
      ],
      github: "",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a responsive portfolio website using React and TypeScript to showcase my projects, skills, and experience with a clean and modern UI.",
      tech: ["React", "TypeScript", "HTML", "CSS"],
      github: "https://github.com/sunlysetiawan/Portfolio-sunly",
    },
    
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                {project.github && (
                  <a
                    href={project.github === "." ? undefined : project.github}
                    className="github-btn"
                    target={project.github === "." ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    View on
                    <img
                      src={githubIcon}
                      alt="GitHub"
                      className="github-icon"
                    />
                  </a>
                )}

                <div className="tech-tags">
                  {project.tech.map((techItem, idx) => (
                    <span key={idx}>{techItem}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

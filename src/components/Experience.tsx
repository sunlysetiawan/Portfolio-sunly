import { useState } from "react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Tech Company",
    period: "Jan 2024 – Jun 2024",
    details:
      "Worked on mobile app development using Flutter and backend APIs with Node.js. Improved app performance by 25% through optimized code and better API integration.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2022 – 2023",
    details:
      "Developed responsive websites for small businesses using React, HTML, CSS, and AWS hosting solutions.",
  },
  {
    title: "University Projects",
    company: "Final Year Project",
    period: "2023 – 2024",
    details:
      "Built a Smart Parking System with Raspberry Pi, ALPR, AWS DynamoDB, and Flutter mobile app for real-time monitoring.",
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <button
              className="experience-header"
              onClick={() => toggle(index)}
            >
              <div>
                <h3>{exp.title}</h3>
                <p className="company">{exp.company} | {exp.period}</p>
              </div>
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {openIndex === index && (
              <div className="experience-details">
                <p>{exp.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

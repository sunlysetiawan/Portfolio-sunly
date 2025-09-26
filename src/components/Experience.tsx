import { useState } from "react";

const experiences = [
  {
    title: "App Developer Intern",
    company: "Alva Productions",
    period: "Jul 2024 - Nov 2024",
    details:
      "Developed Flutter mobile applications with responsive UI, designed user-friendly interfaces in Figma, and supported testing and debugging to ensure smooth releases. Collaborated with the team to integrate new features and resolve technical challenges.",
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
            <button className="experience-header" onClick={() => toggle(index)}>
              <div>
                <h3>{exp.title}</h3>
                <p className="company">
                  {exp.company} | {exp.period}
                </p>
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

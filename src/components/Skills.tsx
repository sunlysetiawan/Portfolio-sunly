const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        <div className="skills-category">
          <h3>Frontend</h3>
          <p>React, Flutter, HTML, CSS, JavaScript</p>
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          <p>Node.js, Python (Flask), AWS Lambda</p>
        </div>

        <div className="skills-category">
          <h3>Database</h3>
          <p>DynamoDB, MySQL, MongoDB</p>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <p>Git, Docker, Postman, VS Code</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

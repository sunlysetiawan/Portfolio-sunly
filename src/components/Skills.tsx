const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        <div className="skills-category">
          <h3>Frontend</h3>
          <p>React, Flutter, HTML5, CSS3, Typescript</p>
        </div>

        <div className="skills-category">
          <h3>Backend</h3>
          <p>Node.js, Python</p>
        </div>

        <div className="skills-category">
          <h3>Database</h3>
          <p>DynamoDB, MySQL</p>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <p>Git, VS Code, Figma, Android Studio, AWS, Canva</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sem nec tortor.</p>
          <div className="tech-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <p>Praesent a ultrices felis. Nulla velit ipsum, finibus id iaculis ut, aliquam semper nibh.</p>
          <div className="tech-tags">
            <span>Flutter</span>
            <span>Firebase</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Project 3</h3>
          <p>Quisque vel porta lacus. Nam quis lobortis ipsum. Vivamus consectetur mi quam.</p>
          <div className="tech-tags">
            <span>AWS</span>
            <span>DynamoDB</span>
            <span>Lambda</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

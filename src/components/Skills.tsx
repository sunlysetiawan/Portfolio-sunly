import {
  ReactLogo,
  FlutterLogo,
  HTML5Logo,
  CSS3Logo,
  TypeScriptLogo,
  NodeLogo,
  PythonLogo,
  DynamoDBLogo,
  MySQLLogo,
  GitLogo,
  GitHubLogo,
  VSCodeLogo,
  FigmaLogo,
  AndroidStudioLogo,
  AWSLogo,
} from "./Logos";

import "../App.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      {/* 2x2 Grid for Categories */}
      <div className="skills-grid">
        <div className="skills-category">
          <h3 className="category-title">Frontend</h3>
          <div className="icon-grid three-cols">
            <div className="icon-box">
              <ReactLogo />
              <span>React</span>
            </div>
            <div className="icon-box">
              <FlutterLogo />
              <span>Flutter</span>
            </div>
            <div className="icon-box">
              <HTML5Logo />
              <span>HTML5</span>
            </div>
            <div className="icon-box">
              <CSS3Logo />
              <span>CSS3</span>
            </div>
            <div className="icon-box">
              <TypeScriptLogo />
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Backend</h3>
          <div className="icon-grid two-cols">
            <div className="icon-box">
              <NodeLogo />
              <span>Node.js</span>
            </div>
            <div className="icon-box">
              <PythonLogo />
              <span>Python</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Database</h3>
          <div className="icon-grid two-cols">
            <div className="icon-box">
              <DynamoDBLogo />
              <span>DynamoDB</span>
            </div>
            <div className="icon-box">
              <MySQLLogo />
              <span>MySQL</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3 className="category-title">Tools</h3>
          <div className="icon-grid three-cols">
            <div className="icon-box">
              <GitLogo />
              <span>Git</span>
            </div>
            <div className="icon-box">
              <GitHubLogo />
              <span>GitHub</span>
            </div>
            <div className="icon-box">
              <VSCodeLogo />
              <span>VS Code</span>
            </div>
            <div className="icon-box">
              <FigmaLogo />
              <span>Figma</span>
            </div>
            <div className="icon-box">
              <AndroidStudioLogo />
              <span>Android Studio</span>
            </div>
            <div className="icon-box">
              <AWSLogo />
              <span>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

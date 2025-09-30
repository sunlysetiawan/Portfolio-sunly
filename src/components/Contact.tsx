import "../App.css";
import locationIcon from "../icons/location.svg";
import emailIcon from "../icons/email.svg";
import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        {/* Contact information */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            <img src={emailIcon} alt="Email" className="icon" />
            <a href="mailto:sunlysetiawan@gmail.com" className="email-link">
              sunlysetiawan@gmail.com
            </a>
          </p>

          <p>
            <img src={locationIcon} alt="Location" className="icon" />
            Riau Island, Indonesia
          </p>
          <div className="social-links">
            <a
              href="https://github.com/sunlysetiawan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
            <a
              href="https://linkedin.com/in/sunlysetiawan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5}></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

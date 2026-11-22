import "../styles/Contact.css";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-container">

        <h1>Contact <b>Me</b></h1>

        <p className="contact-intro">
          Have a project in mind or want to work
          together? Feel free to contact me.
          I would be happy to hear from you.
        </p>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              I am always interested in learning
              new things and exploring opportunities
              in frontend development.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p>amjathamju87@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Location</h3>
                  <p>Chennai,Tamil Nadu, India</p>
                </div>
              </div>

              <div className="contact-item">
                <FaBriefcase className="contact-icon" />
                <div>
                  <h3>Profession</h3>
                  <p>Frontend Developer</p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="contact-form">

            <form>

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button type="submit">
                <FaPaperPlane /> Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;
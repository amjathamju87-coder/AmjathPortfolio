import { useState } from "react";
import "../styles/Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Number
    const phoneNumber = "919087971012";

    // WhatsApp Message Format
    const whatsappMessage = `Hello Amjath,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  };

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

            <h2>Reach Me Here</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
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

import { useState } from "react";
import "./StaticPage.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  }

  return (
    <div className="static-page">
      <div className="static-hero">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <div className="static-content">
        <div className="contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-info-item">
              <span className="static-icon">📍</span>
              <div>
                <h3>Address</h3>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="static-icon">📞</span>
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="static-icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>support@myntraclone.example</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Send a Message</h2>

            {submitted && (
              <p className="form-success">
                Thanks! Your message has been received.
              </p>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="add-btn contact-submit-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

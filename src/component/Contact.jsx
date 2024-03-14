import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-info">
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          {/* Ajoutez d'autres informations de contact si nécessaire */}
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

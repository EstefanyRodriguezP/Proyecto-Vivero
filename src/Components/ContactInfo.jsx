import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <h2>Comunícate</h2>
      <p>
        Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam
        mollis ut montes, dui scelerisque ornare.
      </p>

      <div className="contact-details">
        <div className="contact-section">
          <h3>TELÉFONOS</h3>
          <p>+56 9 4501 6639</p>
          <p>+56 9 5679 4019</p>
        </div>

        <div className="contact-section">
          <h3>EMAIL</h3>
          <p>ventas@viveroschinigue.cl</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

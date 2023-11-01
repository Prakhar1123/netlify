import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sqvdgvq', 'template_kqf4jm5', form.current, 'RuU4mBxiZA4U47r5T')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message has been sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-us">
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <h1>Hire Me</h1>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs

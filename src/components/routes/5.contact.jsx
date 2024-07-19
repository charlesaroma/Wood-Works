import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_xzsyfqu', 'template_swwold8', formData, '4mPjDv9VLtCcH9UML')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again later.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-bgMain text-bg py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-textMain text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-textContainer p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-base font-semibold mb-2 text-bg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-semibold mb-2 text-bg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-base font-semibold mb-2 text-bg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 font-semibold text-base border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-bg text-textMain p-2 rounded hover:bg-bgMain transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

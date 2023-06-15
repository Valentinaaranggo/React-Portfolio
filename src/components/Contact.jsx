import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div id="contact" className=" headerFont w-full md:w-2/5 mx-auto bg-slate-100 rounded p-6 py-48">
    <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2 text-sm font-medium">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-slate-100 py-2 px-4 rounded hover:bg-indigo-300 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
  );
};

export default Contact;
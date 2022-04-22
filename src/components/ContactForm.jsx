import axios from "axios";
import React, { useState } from "react";

function ContactForm({ setShowingContactForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, email, message });
    setShowingContactForm(false);
    axios
      .post("DUMMY_URL", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        // console.log(res);
        setShowingContactForm(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-fit mx-auto max-w-2xl text-custom-green">
      <form onSubmit={handleSubmit}>
        <div className="p-1">
          <label htmlFor="name" className="block py-1 text-sm">
            Name
          </label>
          <input
            className="block w-full p-2 rounded-md focus:ring-2 ring-offset-2 bg-gray-300 text-custom-black"
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="Enter name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="p-1">
          <label htmlFor="email" className="block py-1 text-sm">
            Email
          </label>
          <input
            className="block w-full p-2 rounded-md focus:ring-2 ring-offset-2 bg-gray-300 text-custom-black"
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-1">
          <label htmlFor="message" className="block py-1 text-sm">
            Message
          </label>
          <textarea
            className="block w-full p-2 rounded-md focus:ring-2 ring-offset-2 bg-gray-300 text-custom-black"
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={message}
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="p-1">
          <button
            type="submit"
            className="block w-full transition-all ease-in-out p-2 border border-custom-green rounded-md hover:bg-custom-green hover:text-custom-black focus:ring-2 ring-custom-green ring-offset-1"
          >
            Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

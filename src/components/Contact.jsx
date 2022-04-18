import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="h-fit w-4/5 mx-auto max-w-2xl text-custom-green">
        <div className="p-1">
          <label htmlFor="name" className="block py-1 text-sm">
            Name
          </label>
          <input
            className="block w-full p-2 rounded-md focus:ring-2 ring-offset-2 bg-gray-300 text-custom-black"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            autoComplete="off"
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
            id="email"
            placeholder="email"
            autoComplete="off"
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
            autoComplete="off"
          ></textarea>
        </div>
        <div className="p-1">
          <button className="block w-full transition-all ease-in-out p-2 border border-custom-green rounded-md hover:bg-custom-green hover:text-custom-black focus:ring-2 ring-custom-green ring-offset-1">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

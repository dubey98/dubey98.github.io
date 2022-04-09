import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="h-fit w-4/5 mx-auto max-w-2xl">
        <div className="p-1">
          <label for="name" className="p-2 pl-0 text-lg">
            Name
          </label>
          <input
            className="block w-full p-2 outline-none bg-red-100 border-b-2 border-red-400"
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            autoComplete="off"
          />
        </div>
        <div className="p-1">
          <label for="email" className="p-2 pl-0 text-lg">
            Email
          </label>
          <input
            className="block w-full p-2 bg-red-100 outline-none border-b-2 border-red-400"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            autoComplete="off"
          />
        </div>
        <div className="p-1">
          <label for="message" className="p-2 pl-0 text-lg">
            A Few Words..
          </label>
          <textarea
            className="block w-full p-2 bg-red-100 outline-none border-b-2 border-red-400"
            name="message"
            id="message"
            cols="30"
            rows="10"
            autoComplete="off"
          ></textarea>
        </div>
        <div className="p-1">
          <button className="block w-full p-1 bg-red-400 text-red-100 rounded-md">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

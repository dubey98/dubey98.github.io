import React from "react";

function Contact() {
  return (
    <div className="h-screen w-full">
      <div className="flex pl-6 p-2 items-center h-full">
        <div className="hidden md:block w-1/4">
          <SocialLinks />
        </div>
        <div className="w-full md:w-3/4 flex h-full items-center ">
          <div className="border border-l-custom-green h-5/6"></div>
          <div className="px-2 m-2 mr-auto w-full md:w-3/4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="space-y-4 p-2 w-full">
      <div className="flex border border-custom-green rounded-lg">
        <div className="h-16 w-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            style={{ fill: "#BBC3A5" }}
          >
            <path d="M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 13 16 L 37 16 C 37.18 16 37.349766 16.020312 37.509766 16.070312 L 27.679688 25.890625 C 26.199688 27.370625 23.790547 27.370625 22.310547 25.890625 L 12.490234 16.070312 C 12.650234 16.020312 12.82 16 13 16 z M 11.070312 17.490234 L 18.589844 25 L 11.070312 32.509766 C 11.020312 32.349766 11 32.18 11 32 L 11 18 C 11 17.82 11.020312 17.650234 11.070312 17.490234 z M 38.929688 17.490234 C 38.979688 17.650234 39 17.82 39 18 L 39 32 C 39 32.18 38.979687 32.349766 38.929688 32.509766 L 31.400391 25 L 38.929688 17.490234 z M 20 26.410156 L 20.890625 27.310547 C 22.020625 28.440547 23.510234 29 24.990234 29 C 26.480234 29 27.959844 28.440547 29.089844 27.310547 L 29.990234 26.410156 L 37.509766 33.929688 C 37.349766 33.979688 37.18 34 37 34 L 13 34 C 12.82 34 12.650234 33.979687 12.490234 33.929688 L 20 26.410156 z"></path>
          </svg>
        </div>
        <div className="text-custom-green text-sm flex items-center">
          <a href="mailto:shivdubey.dev@gmail.com">shivdubey.dev@gmail.com</a>
        </div>
      </div>
      <div className="flex border border-custom-green rounded-lg">
        <div className="h-16 w-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            style={{ fill: "#BBC3A5" }}
          >
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
        </div>
        <div className="text-custom-green text-sm flex items-center">
          <a href="https://github.com/dubey98" target={"_blank"}>
            github.com/dubey98
          </a>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="h-fit mx-auto max-w-2xl text-custom-green">
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
  );
}

export default Contact;

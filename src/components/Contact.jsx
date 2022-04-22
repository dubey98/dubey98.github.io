import React from "react";
import SocialLinks from "./SocialLinks";

function Contact() {
  return (
    <div className="h-screen w-full">
      <div className="flex pl-6 p-2 items-center h-full">
        <div className="hidden md:block w-1/4">
          <div className="max-w-xs">
            <SocialLinks />
          </div>
        </div>
        <div className="w-full md:w-3/4 flex h-full items-center ">
          <div className="border border-l-custom-green h-5/6"></div>
          <div className="px-2 m-2 mr-auto w-full md:w-3/4">
            <div className="max-w-xs md:hidden">
              <SocialLinks />
            </div>
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Contact;

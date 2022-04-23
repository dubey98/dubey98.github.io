import React, { useState } from "react";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import write from "./../static/write.png";

function Contact() {
  const [showingContactForm, setShowingContactForm] = useState(false);

  const handleWriteButtonClick = () => {
    setShowingContactForm(true);
  };

  return (
    <div className="h-full w-full">
      <div className="flex pl-6 p-2 items-center h-full">
        <div className="hidden md:block w-1/4">
          <div className="max-w-xs">
            <SocialLinks />
          </div>
        </div>
        <div className="w-full md:w-3/4 flex h-full items-center ">
          <div className="border border-l-custom-green h-5/6"></div>
          <div className="px-2 m-2 mr-auto w-full md:w-3/4">
            <div
              className={
                "max-w-xs md:hidden " + (showingContactForm ? "hidden" : "")
              }
            >
              <SocialLinks />
            </div>
            <div className="hidden md:block">
              <ContactForm setShowingContactForm={setShowingContactForm} />
            </div>
            <div className="md:hidden">
              {showingContactForm ? (
                <ContactForm setShowingContactForm={setShowingContactForm} />
              ) : (
                <div className="max-w-xs p-2">
                  <div
                    onClick={handleWriteButtonClick}
                    className="flex border border-custom-green rounded-lg cursor-pointer"
                  >
                    <div className="h-16 w-16 flex items-center justify-center">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={write}
                      />
                    </div>
                    <div className="text-custom-green text-sm flex items-center">
                      Write to me
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

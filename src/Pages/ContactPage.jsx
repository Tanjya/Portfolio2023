import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="backgroundColour ">
      <Nav />
      <div className="sm:space-y-10 md:flex lg:flex justify-center py-44 gap-56">
        <div>
          <div className="space-y-5 ">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            {/* gmail */}
            <div className="flex gap-2">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=96&id=qyRpAggnV0zH&format=png"
                alt=""
              />
              <p>Tanjya26@gmail.com</p>
            </div>

            {/*social media */}
            <div className="flex gap-3">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=96&id=uLWV5A9vXIPu&format=png"
                alt=""
              />
              <img
                className="w-5"
                src="https://img.icons8.com/?size=80&id=28V5kqfCQWWk&format=png"
                alt=""
              />
              <img
                className="w-5"
                src="https://img.icons8.com/?size=80&id=ePCoYG3YxzfX&format=png"
                alt=""
              />
              <a href="https://www.linkedin.com/in/tanjya/">
                <img
                  className="w-5"
                  src="https://img.icons8.com/?size=96&id=13930&format=png"
                  alt=""
                />
              </a>
            </div>
            <a href="https://docs.google.com/document/u/0/d/1S-_aJlYDyioD8HU2NWvnnlwuWsRngdY5/edit?dls=true&usp=gmail_attachment_preview">
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="space-y-3 pb-3">
          <input
            type="text"
            className="bg-neutral-100 w-96 py-1"
            placeholder="   Your Name"
          />
          <br />
          <input
            type="email"
            className="bg-neutral-100 w-96 py-1"
            placeholder="   Your Email"
          />
          <br />
          <textarea
            name=""
            id=""
            cols="43"
            rows="10"
            placeholder="   Your Message"
            className="bg-neutral-100"
          ></textarea>
          <br />
          <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

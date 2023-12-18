import React from "react";
import AboutImg from "../../public/IMG_9678.jpeg";
const AboutSection = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        <span className="border-b-2 border-red-500 pb-2">Abo</span>ut Me
      </h1>
      <div className="flex justify-center px-32 gap-7 pb-28 py-10">
        <img className="w-5/12" src={AboutImg} alt="" />
        <div>
          <p className="pb-5  p-5 rounded mt-10">
            I am a self taught full-stack developer that can maintain web
            applications. I am proficient in a variety of programming languages
            and technologies. I am passionate about full-stack development
            because I enjoy working on all aspects of web application
            development. I love the challenge of building both the front-end and
            back-end of a web application, and I am always eager to learn new
            technologies. In my projects, I showcase developing and maintaining
            an e-commerce, pWc and Netflix website. I worked on a variety of
            projects, including developing new features, optimizing performance,
            and fixing bugs as well as building the front-end and back-end of
            the application.
          </p>

          <details className="dropdown ">
            <summary className="m-1 font-medium text-red-500 underline py-4">
              My Skills
            </summary>
            <div className="flex justify-center gap-3">
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=20909&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=7gdY5qNXaKC0&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=g9mmSxx3SwAI&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=PXTY4q2Sq2lG&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=123603&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=74402&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=54087&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=uJM6fQYqDaZK&format=png"
                alt=""
              />
              <img
                className="w-10"
                src="https://img.icons8.com/?size=96&id=62452&format=png"
                alt=""
              />
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

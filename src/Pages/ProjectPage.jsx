import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ProjectPage = () => {
  return (
    <div className="backgroundColour ">
      <Nav />
      <h1 className="text-3xl font-bold pt-20 px-20 text-center pb-10 ">
        My Projects
      </h1>
      <div className=" sm:flex  sm:justify-center lg:flex lg:justify-center gap-5 pb-44 text-white">
        <div className="bg-neutral-800 p-5 w-80 h-96 space-y-4 sm:h-full">
          <img
            className="w-4/12"
            src="https://img.icons8.com/?size=128&id=j82xBWDwDN3S&format=png"
            alt=""
          />
          <h3 className="text-lg font-medium">Netflix Show</h3>
          <p className="text-sm ">
            Netflix Clone website that allows users to navigate through
            different pages and browse for a show as well as view the show's
            information. The website is built using React and the information is
            retrieved from an API.
          </p>
          <div className="flex justify-start gap-4">
            <a href="https://655f71338eef9f04737e858a--dashing-pithivier-08eaf0.netlify.app/">
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Website
              </button>
            </a>
            <a href="https://655f71338eef9f04737e858a--dashing-pithivier-08eaf0.netlify.app/">
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="bg-neutral-800 p-5 w-80 h-96 space-y-4 sm:h-full">
          <img
            className="w-4/12"
            src="https://www.somo.uk/wp-content/uploads/2016/12/pwc-logo.png"
            alt=""
          />
          <h3 className="text-lg font-medium">PwC Company</h3>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            rem eius. Vel ipsum harum dolor architecto incidunt autem
            praesentium dolorem et quibusdam neque enim rem quam corrupti ullam,
            alias laudantium.
          </p>
          <div className="flex justify-start gap-4">
            <a href="https://creative-medovik-8d97da.netlify.app/">
              {" "}
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Website
              </button>
            </a>
            <a href="https://github.com/Tanjya/PwC-Clone">
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Code
              </button>
            </a>
          </div>
        </div>
        <div className="bg-neutral-800 p-5 w-80 h-96 space-y-4 sm:h-full">
          <img
            className="w-4/12"
            src="https://img.icons8.com/?size=160&id=IkmMK8SjKoY9&format=png"
            alt=""
          />
          <h3 className="text-lg font-medium">Restaurant Clone</h3>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            rem eius. Vel ipsum harum dolor architecto incidunt autem
            praesentium dolorem et quibusdam neque enim rem quam corrupti ullam,
            alias laudantium.
          </p>
          <div className="flex justify-start gap-4">
            <a href="https://655e808a01df1a7f5a2f2784--playful-kringle-0269ef.netlify.app/">
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Website
              </button>
            </a>
            <a href="https://github.com/Tanjya/RestaurantClone">
              <button className="transition duration-300 ease-in-out font-medium rounded border border-red-500 text-sm py-1 px-3 mt-2 hover:bg-red-500">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;

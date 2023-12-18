import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="p-5 bg-orange-100 ">
      <div className="text-center pb-96 pt-32">
        <center>
          {" "}
          <img
            src="https://img.icons8.com/?size=160&id=1RWURK6uUGd9&format=png"
            alt=""
          />
        </center>

        <h1 className="text-4xl font-bold p-5">SOMETHING'S WRONG HERE...</h1>
        <p className="text-gray-500 ">
          The requested URL was not found. Maybe what you are looking for can be
          found here:{" "}
          <Link className="text-red-600 underline hover:text-red-400" to="/">
            home page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;

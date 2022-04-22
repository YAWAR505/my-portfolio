import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";
const Navbar = () => {
  const style =
    " bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded rounded text-base mt-4 md:mt-0 ";
  return (
    <>
      <div className="flex items-center w-full p-4 fixed bg-black z-50 bg-opacity-50 font-sans">
        <div className=" w-1/4">
          <h4 className=" font-bold ">{`<Code With Mohammad/>`}</h4>
        </div>
        <div className="  space-x-3 w-1/2 inline-flex items-center">
          <Link to="/" className={style}>
            About
          </Link>
          <Link to="skills" className={style}>
            Skills
          </Link>
          <Link to="projects" className={style}>
            Projects
          </Link>
          <Link to="contact" className={style}>
            contact
          </Link>
          <Link to="testimonials" className={style}>
            Testimonials
          </Link>
        </div>
        <div className=" w-1/4  ">
          <Link
            to="contact"
            className={`float-right inline-flex items-center ${style}`}
          >
            Hire me <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

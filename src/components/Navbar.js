import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex w-full p-4 fixed bg-black z-50 bg-opacity-50 font-sans">
        <div className=" w-1/4">
          <h4 className=" font-bold ">{`<Code With Mohammad/>`}</h4>
        </div>
        <div className="  space-x-3 w-1/2">
          <Link to="/"> About</Link>
          <Link to="skills"> Skills</Link>
          <Link to="projects"> Projects</Link>
          <Link to="contact"> contact</Link>
          <Link to="testimonials"> Testimonials</Link>
        </div>
        <div className=" w-1/4  ">
          <Link to="contact" className=" float-right">
            Hire me {`->`}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

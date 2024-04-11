import React from "react";
import logo from "./img/logo.png";
import girl from "./img/girl.jpg";
import { CiSearch } from "react-icons/ci";
import { AiOutlineCar } from "react-icons/ai";

const Header = () => {
  return (
    <div >
      <div className="w-full    flex py-4">
        <div className="w-64">
          <img src={logo} alt="Logo" className="w-40 p-4 " />
        </div>
        <nav className="flex ">
          <ul className="flex p-4 ">
            <li className="pl-2">Inspiration</li>
            <li className="pl-6">Find Work</li>
            <li className="pl-6">Learn Design</li>
            <li className="pl-6"> Go Pro</li>
            <li className="pl-6">Hire Designers</li>
          </ul>
        </nav>
        <div className ="  flex  ml-27">
        <button type="search"  className=" bg-neutral-100 flex  w-20 my-4  ml-28 rounded-xl py-2"><CiSearch className=" mx-1 my-1"/>Search</button>
        <AiOutlineCar className="ml-4 text-xl my-6"/>
        <img src={girl} alt="Girl" className="ml-7 flex justify-end   rounded-full w-16 "/>
        <button type="button" className="text-center bg-pink-500  flex w-20 my-4 rounded-xl  ml-4 pl-4 py-2 text-white">Upload</button>
        </div>
        </div>
        <hr className="text-neutral-100 w-full"/>
       
    </div>
  );
};

export default Header;

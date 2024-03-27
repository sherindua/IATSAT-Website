import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  let navBarEle = document.querySelector(".nav");

  function showDropDownMenu() {
    setToggle(true);
  }
  function hideDropDownMenu() {
    setToggle(false);
  }

  function showHideNav() {
    navBarEle.classList.toggle("hidden");
    setShowNavBar(!showNavBar);
  }

  return (
    <div>
      <div className="relative flex justify-betweeen w-full">
        <img
          src={Logo}
          alt="logo"
          className="w-[60px] md:w-[80px] ml-2 mt-2 md:ml-10 "
        ></img>
        <div className="nav hidden absolute pt-4 pb-4 mt-16 md:mt-8 bg-white  border border-gray-400 md:border-0 border-black h-[400px] items-center justify-center right-0 md:h-0 md:pt-4 md:relative flex w-[50vw] justify-between items-end  flex-col md:ml-10 md:mr-10  md:flex md:flex-row md:items-center md:w-full md:justify-evenly gap-4">
          {" "}
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="hover:text-blue-600">
            Our Initiatives
          </a>
          <a href="#" className="hover:text-blue-600">
            Testimonials
          </a>
          <a href="#" className="hover:text-blue-600">
            Blog
          </a>
          <div className="relative">
            <button
              onMouseEnter={showDropDownMenu}
              onMouseLeave={hideDropDownMenu}
              className="flex items-center h-8 pl-3 pr-2 focus:outline-none hover:text-blue-600"
            >
              <span className="text-m leading-none mr-2 ">Services</span>
              <i
                className="fa-solid fa-chevron-down fa-2xs"
                style={{ color: "black" }}
              ></i>
            </button>
            {toggle == true ? (
              <div
                onClick={showDropDownMenu}
                onMouseEnter={showDropDownMenu}
                onMouseLeave={hideDropDownMenu}
                className="absolute flex flex-col w-60 -mt-1  -right-14 md:-right-20 bg-white border shadow-lg"
              >
                <a
                  className="flex items-center h-10 mt-1 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  International Olympiad
                </a>
                <a
                  className="flex items-center h-10 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  Global Principal Association
                </a>
                <a
                  className="flex items-center h-10 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  Global Universities
                </a>
                <a
                  className="flex items-center h-10 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  Global Assessment
                </a>
                <a
                  className="flex items-center h-10 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  IATSAT LMS
                </a>
                <a
                  className="flex items-center h-10 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  IATSAT Virtual Universities
                </a>
                <a
                  className="flex items-center h-10 px-3 text-sm hover:text-blue-400"
                  href="#"
                >
                  IATSAT Knowledge Tech
                </a>
              </div>
            ) : null}
          </div>
          <a href="#" className="hover:text-blue-600">
            FAQs
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact Us
          </a>
        </div>
        {/* </div> */}
      </div>

      {showNavBar == true ? (
        <div
          className="absolute right-4 top-8 md:hidden hover:cursor-pointer"
          onClick={showHideNav}
        >
          {" "}
          <i className="fa fa-close text-2xl"></i>
        </div>
      ) : (
        <div
          className="absolute right-4 top-8 md:hidden hover:cursor-pointer"
          onClick={showHideNav}
        >
          <i className="fa fa-bars text-2xl"></i>
        </div>
      )}
    </div>
  );
}

export default Navbar;

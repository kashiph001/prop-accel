import React from "react";
import logo from "../assets/Images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-transparent py-4">
      <nav className="flex justify-between items-center w-[75%] mx-auto">
        <div>
          <img className="w-12" src={logo} alt="company-logo" />
        </div>
        <div className="">
          <ul className="flex item-center gap-[10vw]">
            <li>
              <a className="text-white hover:text-red-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-white hover:text-red-500" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="text-white hover:text-red-500" href="#">
                Review
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

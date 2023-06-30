import React from "react";
import facebook from "../assets/Images/fb.png";
import instagram from "../assets/Images/insta.png";
import youtube from "../assets/Images/yt.png";
import twitter from "../assets/Images/twiite.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-4">
      <div className=" border border-[0.5px] border-[#7A3199] ">
        <div className="w-1/2">
          <p>All Right Reserved @Copyright 2023</p>
        </div>
        <div className=" flex ">
          <div className="">
            <ul className="flex item-center ">
              <li>
                <a className="" href="#">
          <p>Terms of Service</p>
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <p>Privacy Policy</p>
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <p>Product</p>
                </a>
              </li>
             
            </ul>
          </div>
          <ul className="flex item-center ">
            <li>
              <a className="" href="#">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a className="" href="#">
                <img src={youtube} alt="" />
              </a>
            </li>
            <li>
              <a className="" href="#">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a className="" href="#">
                <img src={twitter} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

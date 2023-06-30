import React from "react";
import facebook from "../assets/Images/fb.png";
import instagram from "../assets/Images/insta.png";
import youtube from "../assets/Images/yt.png";
import twitter from "../assets/Images/twiite.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent py-4 border-t-2 border-white-100 mt-20">
      <div className="flex justify-between items-center  gap-[10vw]">
        <div className="text-center text-white text-xs">
          <p>All Right Reserved &#169;Copyright 2023</p>
        </div>
        <div className="flex text-white  text-xs gap-16 mt-2">
          <ul className="flex item-center gap-8 ">
            <li>
              <a className="" href="#">
                Terms of Service
              </a>
            </li>
            <li>
              <a className="" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="" href="#">
                Product
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-3 ">
            <li>
              <a className="" href="#">
                <img src={facebook} className="w-[100%]" alt="" />
              </a>
            </li>
            <li>
              <a className="" href="#">
                <img src={youtube} className="w-[100%]" alt="" />
              </a>
            </li>
            <li>
              <a className="" href="#">
                <img src={instagram} className="w-[100%]" alt="" />
              </a>
            </li>
            <li>
              <a className="" href="#">
                <img src={twitter} className="w-[100%]" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className=" border border-[0.5px] border-[#7A3199] ">
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
      </div> */}
    </footer>
  );
};

export default Footer;

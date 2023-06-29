import React from "react";
import left from "../assets/Images/leftTriangle.png";
import dot from "../assets/Images/dot.png";
import everOneSmile from "../assets/Images/everyOneSmile.png";
import groupBussinesSmile from "../assets/Images/groupBussinesSmile.png";
import mikeLeft from "../assets/Images/mikeLeft.png";
import mikeRight from "../assets/Images/mikeRight.png";
import mikeBackground from "../assets/Images/mikeBackground.png";
import Header from "../components/Header";

const LandingPage: React.FC = () => {
  const divStyle = {
    backgroundImage: `url(${left})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
  };
  const backgroundMike = {
    backgroundImage: `url(${mikeBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "top right",
  };
  const buttonStyle = {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    width: "237px",
    height: "74.86053466796875px",
    padding: "19px 56px 25.86053466796875px 55px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
  };
  const exploreNow = {
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    width: "237px",
    height: "60px",
    padding: "17px 56px 25.86053466796875px 55px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
  };

  return (
    <div style={divStyle}>
      <Header />
      <div className="container px-4 py-8 mt-10 flex justify-end">
        <div className="flex  w-[90%]  mt-10">
          <div className="w-1/2 ">
            <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-white">
              Learn how to launch a successful podcast
            </h1>
            <div className="w-8/12  mt-10">
              <p className="w-full text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                in ustry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="mt-20">
              <button style={buttonStyle}>Sign up Now</button>
            </div>
          </div>
          <div className="w-3/5 relative">
            <img src={everOneSmile} alt="" className="absolute top-0 left-12" />
            <img src={dot} alt="" className="mt-10 ml-12" />
            <img
              src={groupBussinesSmile}
              alt=""
              className="absolute bottom-14 left-0"
            />
            <img src={mikeLeft} alt="" className="absolute top-20 right-12 " />
            <img
              src={mikeRight}
              className="absolute right-20 bottom-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="container px-4 py-8 flex justify-end"
        style={backgroundMike}
      >
        <div className="flex justify-end  w-[90%]">
          <div className="ml-20 pt-20 w-1/2">
            <div className="flex flex-wrap  gap-4">
              <div className="p-4 w-1/2 h-[160px] w-[268px] border border-1 border-[#7A3199] rounded-2xl">
                <h2 className="text-lg font-bold">Interactive Features</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div className="p-4 w-1/2 h-[160px] w-[268px] mt-10 border border-1 border-[#7A3199] rounded-2xl">
                <h2 className="text-lg font-bold">Interactive Features</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div className="p-4 w-1/2 h-[160px] w-[268px] border border-1 border-[#7A3199] rounded-2xl">
                <h2 className="text-lg font-bold">Interactive Features</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div className=" p-4 w-1/2 h-[160px] w-[268px] mt-10  border border-1 border-[#7A3199] rounded-2xl">
                <h2 className="text-lg font-bold">Interactive Features</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-start items-center">
            <div className="p-4 w-1/2 h-[274px] w-[450px]  mt-20 ">
              <h2 className="mb-2 mt-0 text-5xl font-bold leading-tight">
                About the courses
              </h2>
              <div className="w-5/6  mt-10">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unkno
                </p>
              </div>
              <div className="mt-10">
                <button style={exploreNow}>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React from "react";
import left from "../assets/Images/leftTriangle.png";
import dot from "../assets/Images/dot.png";
import everOneSmile from "../assets/Images/everyOneSmile.png";
import groupBussinesSmile from "../assets/Images/groupBussinesSmile.png";
import mikeLeft from "../assets/Images/mikeLeft.png";
import mikeRight from "../assets/Images/mikeRight.png";
import mikeBackground from "../assets/Images/mikeBackground.png";
import bar from "../assets/Images/bar.png";
import Radio from "../assets/Images/Radio.png";
import Lolla from "../assets/Images/Lolla.png";
import stars from "../assets/Images/stars.png";
import footerBg from "../assets/Images/Footerbg.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  const divStyle = {
    backgroundImage: `url(${left})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
  };
  const footerStyle = {
    backgroundImage: `url(${footerBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const backgroundMike = {
    backgroundImage: `url(${mikeBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "top right",
  };
  const backgrounBar = {
    backgroundImage: `url(${bar})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
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
  const startedNow = {
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    width: "237px",
    height: "60px",
    padding: "17px 56px 25.86053466796875px 55px",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
  };

  return (
    <div style={divStyle}>
      {/* Header */}
      <Header />
      {/* First Section */}
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
      {/* Second Section */}
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
      {/* Third  Section */}
      <div
        style={backgrounBar}
        className="container px-4 py-8 mt-10 flex justify-center flex-col"
      >
        <div className="flex  w-[90%]  mt-10 justify-center ml-10">
          <div className="w-1/2  flex justify-center items-center flex-col">
            <h1 className="mb-2 mt-0 text-4xl font-bold leading-tight">
              Choose your plan
            </h1>
            <div className="w-4/6 text-center mt-4 ">
              <p className="w-full ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <img src={Radio} alt="" />
          </div>
        </div>
        <div className="flex gap-24 justify-center mt-3 mr-10">
          <div className="w-[303px] h-[357px]   p-10  border border-[1px] border-[#7A3199] bg-[#ffffff]  rounded-[10px]">
            <h2 className="text-lg font-bold">Basic Plan</h2>
            <p className="text-sm mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div className="flex gap-10 items-center mt-5">
              <p className="text-[#7A3199] text-4xl font-bold leading-tight ">
                &#x24; 54
              </p>
              <p className="text-[#7A3199]">/months</p>
            </div>
            <ul className="list-disc font-bold ml-5 mt-5">
              <li id="">Free access to video class</li>
              <li id="">Free access to video class</li>
              <li id="">Free access to video class</li>
            </ul>
            <button className="w-[149px] h-[44px]  mt-5  border border-[1px] border-[#7A3199] rounded-[10px]  text-[#7A3199]">
              Start Free Trial
            </button>
          </div>
          <div className="w-[303px] h-[357px] p-10 bg-[#7a3199]  border border-[1px] border-[#7A3199] rounded-[10px] text-white">
            <h2 className="text-lg font-bold">Premium Plan</h2>
            <p className="text-sm mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div className="flex gap-10 items-center mt-5">
              <p className=" text-4xl font-bold leading-tight ">&#x24; 54</p>
              <p>/months</p>
            </div>
            <ul className="list-disc font-bold ml-5 mt-5">
              <li id="">Free access to video class</li>
              <li id="">Free access to video class</li>
              <li id="">Free access to video class</li>
            </ul>
            <button className="w-[149px] h-[44px] mt-5  bg-white border border-[1px] border-[#7A3199] rounded-[10px]  text-[#7A3199]">
              Start Free Trial
            </button>
          </div>
          <div className="w-[303px] h-[357px] p-10  border border-[1px] border-[#7A3199] rounded-[10px] bg-[#ffffff] ">
            <h2 className="text-lg font-bold">Basic Plan</h2>
            <p className="text-sm mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
            <div className="flex gap-10 items-center mt-5">
              <p className="text-[#7A3199] text-4xl font-bold leading-tight ">
                &#x24; 54
              </p>
              <p className="text-[#7A3199]">/months</p>
            </div>
            <ul className="list-disc font-bold ml-5 mt-5">
              <li id="">Free access to video class</li>
              <li id="">Free access to video class</li>
              <li id="">Free access to video class</li>
            </ul>
            <button className="w-[149px] h-[44px]  mt-5  border border-[1px] border-[#7A3199] rounded-[10px]  text-[#7A3199]">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
      {/* Fourth Section */}
      <div className="container flex justify-center pb-20">
        <div className="flex  w-[75%]  mt-10  flex-col">
          <div>
            <h3 className="mb-2 mt-0 text-5xl font-bold leading-tight">
              Review from customers
            </h3>
            <div className="w-1/2">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </p>
            </div>
          </div>
          <div className="flex gap-24  mt-3 mr-10 ">
            <div className="w-[465px] h-[238px] p-6 shadow-2xl rounded-2xl mt-10 ">
              <div className="flex flex-col gap-10">
                <div className="flex gap-5">
                  <img
                    src={Lolla}
                    alt="users"
                    className="w-[70px] h-[70px] rounded-full border border-[0.5px] border-[#7A3199]"
                  />
                  <div>
                    <h4 className="font-bold">Lolla Smith</h4>
                    <p>Microsoft</p>
                    <img src={stars} alt="ratings" />
                  </div>
                </div>
                <div className="text-sm">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[465px] h-[238px] p-6 shadow-2xl rounded-2xl mt-10">
              <div className="flex flex-col gap-10">
                <div className="flex gap-5">
                  <img
                    src={Lolla}
                    alt="users"
                    className="w-[70px] h-[70px] rounded-full border border-[0.5px] border-[#7A3199]"
                  />
                  <div>
                    <h4 className="font-bold">Lolla Smith</h4>
                    <p>Microsoft</p>
                    <img src={stars} alt="ratings" />
                  </div>
                </div>
                <div className="text-sm">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth section */}

      <div
        className="container flex items-center flex-col mt-20"
        style={footerStyle}
      >
        <div className="w-1/2 border border-[0.5px] border-[#7A3199] mt-10  text-center">
          <div className="flex  items-center flex-col ">
            <h4 className="text-4xl font-bold leading-tight">
              We have what you&#39;re looking for
            </h4>
            <div className="w-5/6 text-sm text-[#8898ee] mt-8 ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type a
              </p>
            </div>
          </div>
          <div className="mt-14">
            <button style={startedNow}>Get Started Now</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

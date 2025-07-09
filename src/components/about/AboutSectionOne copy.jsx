import React from "react";

const AboutSectionOne = () => {
  return (
    <div className="w-[100vw] bg-titusDarkBG flex flex-col items-center">
      <div className="top-[100px] h-full container pt-[150px] pb-[100px] md:pt-[200px] md:pb-[200px] items-center px-10 md:px-0">
        <div className="w-full md:w-[80%] mx-auto text-center mb-7">
          <h1 className="text-white text-[30px] md:text-[40px] uppercase mb-5 ">
            About Elder Intelligence <br /> Crypto issues resolving platform
          </h1>
          <p>
            We get all your issues solved by bringing machine effort and human
            intuition together
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-black flex flex-col gap-10 right-box">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-[30px]">
            <div
              className="col-span-1 p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300"
              style={{ border: "1px dashed #888" }}
            >
              <p>
                From the beginning, our team has been guided by a single mission
                - to eliminate the hindrances surrounding assets loss recovery
                and the devastating headaches faced by crypto enthusiasts in
                general.
              </p>
            </div>
            <div
              className="col-span-1 p-5 rounded-lg flex flex-col gap-5 hover:scale-105 ease-in duration-300"
              style={{ border: "1px dashed #888" }}
            >
              <p>
                Blockchain technology is changing the world, but there is still
                a concerning lack of credible, actionable information on the
                crypto industry and its major stakeholders especially with
                repect to getting back ost assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;

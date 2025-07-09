import React from "react";
import { GiTrade } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

const AboutSectionOne = () => {
  return (
    <div className="w-full">
      <div className="container pt-[120px] md:pt-[200px] pb-[100px] md:pb-[50px] px-7 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-20 text-[#ffffff9e] items-center mb-10">
          <div className="w-full lg:w-[85%] col-span-1 lg:col-span-2 p-2 lg:p-1 rounded-lg flex flex-col gap-5">
            <h1 className="text-white text-[30px] md:text-[40px] mb-5 ">
              Your Crypto Ark and Gateway to{" "}
              <span className="text-titusGreen">Web3</span>
              {/* Welcome to{" "}
            <span className="text-titusYellow">
              {import.meta.env.VITE_APP_NAME}
            </span> */}
            </h1>
            <p className="text-lg font-medium">
              Next Level Reliability, Products & Opportunities in Web3.
              Unleashing the full potential of crypto believers seeking to level
              up via Web3 with the next generation tools, support, and
              ecosystem. At {import.meta.env.VITE_APP_NAME}, we believe that
              everyone should have the freedom to earn, hold, spend, share and
              give their money - no matter who you are or where you come from.
            </p>
          </div>
          <div className="col-span-1 scale-100 lg:scale-150">
            <img
              src="/assets/images/about/banner.png"
              alt=""
              className="w-full lg:w-[900px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
          <div className="col-span-1 flex gap-5 md:gap-5">
            <GiTrade className="text-[35px] lg:text-[55px]" />
            <div className="flex flex-col h-full justify-between">
              <p className=" text-[#eee] text-[19px] md:text-[20px] font-semibold">
                $1 million
              </p>
              <p className="text-sm text-[#ffffff9e] font-medium">
                Estimated market projection
              </p>
            </div>
          </div>
          <div className="col-span-1 flex gap-5 md:gap-5">
            <FaUserFriends className="text-[35px] lg:text-[55px]" />
            <div className="flex flex-col h-full justify-between">
              <p className=" text-[#eee] text-[19px] md:text-[20px] font-semibold">
                10,000
              </p>
              <p className="text-sm text-[#ffffff9e] font-medium">
                Already registsred users
              </p>
            </div>
          </div>
          <div className="col-span-1 flex gap-5 md:gap-5">
            <MdSupportAgent className="text-[35px] lg:text-[55px]" />
            <div className="flex flex-col h-full justify-between">
              <p className=" text-[#eee] text-[19px] md:text-[20px] font-semibold">
                24/7
              </p>
              <p className="text-sm text-[#ffffff9e] font-medium">
                Customer Support in 20 languages
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-titusGreenDeep w-full md:w-[80%] mx-auto rounded-xl p-5 lg:p-10 mt-32 text-sm text-white border-[1px] border-titusGreen"
          style={{ boxShadow: "2px 2px 8px #00dbc2" }}
        >
          {import.meta.env.VITE_APP_NAME} is a user-friendly,{" "}
          <span className="font-semibold">non-custodial</span>
          cryptocurrency exchange built and designed to make digital assets easy
          and swift to trade, swap and exchange. Right from inception, we have
          been widely recognized for offering over 1000 different
          cryptocurrencies, complete with accountless exchanges, making it
          hassle-free and very convenient. <br /> <br />
          Probably the most impressive thing about{" "}
          {import.meta.env.VITE_APP_NAME} is the{" "}
          <span className="font-semibold">flexibility</span>: there are no upper
          limits on exchanges, and transactions usually take less than two
          minutes to complete. So, you are free to start swapping from minimal
          amounts, which is perfect for newbies or anyone wanting to test the
          waters. <br /> <br />
          We support most blockchains, allowing users to easily swap a wide
          variety of assets. Additionally, we provide the option to buy
          cryptocurrencies with fiat through major credit cards like Visa and
          MasterCard, giving you more ways to acquire your digital assets.
          <br />
          <br />
          When it comes to fees, we prioritize transparency: we offer
          competitive rates with no hidden charges. Plus, our users can choose
          between fixed and floating swap rates, allowing you to manage your
          exchange based on the market situation. You can lock in your rate or
          take advantage of market fluctuations as you see fit.
          <br />
          <br />
          The {import.meta.env.VITE_APP_NAME} team consists of professionals
          with vast experience in technology, finance, and blockchain. We are
          committed to enhancing your experience, ensuring that every
          transaction is as secure and efficient as possible. Our team actively
          engages with the crypto community, taking user feedback seriously to
          continually improve our offerings and services.
        </div>
      </div>
    </div>
  );
};

export default AboutSectionOne;

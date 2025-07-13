import React from "react";
import { FaCopy } from "react-icons/fa";
import { copyFunc } from "../../utils/helpers";

const DashUserOverview = ({ user }) => {
  console.log("user", user);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl bg-titusDashCardDarkBG p-5 h-full items-center">
      <div className="col-span-1 flex gap-5 justify-between md:justify-normal">
        <img
          src="/assets/images/avatar.avif"
          className="w-12 rounded-lg"
          alt=""
        />
        <div className="flex flex-col h-full justify-between ">
          <div className="text-white font-medium">{user?.name}</div>
          <div className="flex items-center gap-2 text-sm">
            <span>{user?.username}</span>{" "}
            <FaCopy
              onClick={() => copyFunc(user?.username, "username copied!")}
              className="cursor-pointer text-[15px] text-titusText"
            />
          </div>
        </div>
        {/* <div className="h-[70%] my-auto w-[2px] bg-titusLightBorder"></div> */}
      </div>
      <div className="hidden col-span-1 md:flex flex-col gap-0">
        <div className="">user ID</div>
        <div className="flex items-center gap-2">
          <div className="text-white text-sm">
            {user?._id.substr(0, 5)}...{user?._id.substr(user?._id.length - 5)}
          </div>
          <FaCopy
            onClick={() => copyFunc(user?._id, "UID copied!")}
            className="cursor-pointer text-[15px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DashUserOverview;

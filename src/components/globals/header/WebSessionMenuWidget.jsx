import { useState } from "react";
import { userLogout, userProfile } from "../../../api";
import { errorNotification, successNotification } from "../../../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowCircleRight,
  FaCog,
  FaDownload,
  FaGlobe,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimesCircle,
  FaUserCircle,
} from "react-icons/fa";
import Loader from "../Loader";
import ErrorWidget from "../ErrorWidget";
import Cookies from "js-cookie";

const WebSessionMenuWidget = ({ nav, setNav }) => {
  const history = useNavigate();
  const { user, userLoading, userError } = userProfile();
  const [showLang, setshowLang] = useState(false);
  const [showLogout, setshowLogout] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const handleLogout = async () => {
    const response = await userLogout();
    if (response.status === 200) {
      setNav(false);
      successNotification(response.data.message);
      Cookies.remove("u-x");
      history("/login");
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <div className="relative">
        <div className="flex bg-titusDarkLightBG p-2 lg:px-3 rounded-md text-white cursor-pointer">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex md:hidden items-center gap-2 md:gap-3"
              >
                <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-titusYellow flex items-center justify-center text-black text-sm md:text-md font-medium">
                  {user?.data?.name?.split(" ")[0]?.charAt(0)}
                  {user?.data?.name?.split(" ")[1]?.charAt(0)}
                </div>
                <div className="flex gap-2 md:gap-7 items-center">
                  <div className="text-sm font-medium">Dashboard</div>
                </div>
              </Link>
              <div
                className="hidden md:flex items-center gap-2 md:gap-3"
                onClick={handleNavToggle}
              >
                <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-titusYellow flex items-center justify-center text-black text-sm md:text-md font-medium">
                  {user?.data?.name?.split(" ")[0]?.charAt(0)}
                  {user?.data?.name?.split(" ")[1]?.charAt(0)}
                </div>
                <div className="flex gap-2 md:gap-7 items-center">
                  <div className="text-sm font-medium">Dashboard</div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* menu */}
        <div
          className={
            nav
              ? "absolute z-[150] -left-14 lg:-left-14 top-[70px] lg:top-20 w-[30vw] lg:w-[300px] bg-titusDarkBG p-5  ease-in duration-500 border-[1px] border-titusLightBorder rounded-lg"
              : "hidden"
          }
        >
          <div className="py-4 flex flex-col gap-5 relative">
            <div
              className="absolute -top-10 -right-10 p-1 cursor-pointer"
              onClick={handleNavToggle}
            >
              <FaTimesCircle className="text-[#d2d2d2] text-3xl md:text-3xl" />
            </div>

            <div className="flex flex-col gap-6 text-sm text-[#ffffffdc] lg:font-normal">
              <Link
                onClick={() => setNav(false)}
                to="/dashboard/account/manage-profile"
                className="flex items-center gap-4"
              >
                <FaUserCircle className="text-[17px]" />
                <span className="">Manage Profile</span>
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/"
                className="flex items-center gap-4"
              >
                <FaQuestionCircle className="text-[17px]" />
                <span className="">Help Center</span>
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/dashboard/account/settings"
                className="flex items-center gap-4"
              >
                <FaCog className="text-[17px]" />
                <span className="">Settings</span>
              </Link>

              <div className="h-[1px] w-full bg-titusLightBorder"></div>

              <div
                onClick={handleLogout}
                className="flex items-center gap-4 cursor-pointer"
              >
                <FaSignOutAlt className="text-[17px]" />
                <span className="">Log Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative">
        <FaGlobe
          className="hidden lg:block text-xl text-white cursor-pointer"
          onMouseEnter={() => setshowLang(true)}
          onMouseLeave={() => setshowLang(false)}
        />
        <div
          className={
            showLang
              ? "absolute z-[1000] top-9 -left-7 bg-titusDarkLightBG p-2 rounded-md text-white font-medium text-[12px] w-max"
              : "hidden"
          }
        >
          Language
        </div>
      </div>

      <div className="hidden lg:block relative">
        <FaSignOutAlt
          className="hidden lg:block text-xl text-white cursor-pointer"
          onMouseEnter={() => setshowLogout(true)}
          onMouseLeave={() => setshowLogout(false)}
          onClick={handleLogout}
        />
        <div
          className={
            showLogout
              ? "absolute z-[1000] top-9 -left-5 bg-titusDarkLightBG p-2 rounded-md text-white font-medium text-[12px] w-max"
              : "hidden"
          }
        >
          Logout
        </div>
      </div>

      <div
        onClick={() => {
          successNotification("Mobile apps are coming soon!");
        }}
        className="hidden md:block scaleItem cursor-pointer text-white"
      >
        <FaDownload className="text-sm" />
      </div>
    </div>
  );
};

export default WebSessionMenuWidget;

import { useEffect, useState } from "react";
import {
  fetchCurrencies,
  fetchUserCurrencyBalances,
  fetchUserTokenBalances,
  updateUserSettings,
  userLogout,
  userProfile,
} from "../../../api";
import { errorNotification, successNotification } from "../../../utils/helpers";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowAltCircleRight,
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

const DashSessionMenuWidget = ({ nav, setNav }) => {
  const history = useNavigate();
  const { user, userLoading, userError } = userProfile();
  const [showLang, setshowLang] = useState(false);
  const [showChangeCurrency, setshowChangeCurrency] = useState(false);
  const { currencies, currenciesLoading } = fetchCurrencies();

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

  const handleUpdateCurrency = async (item) => {
    try {
      const response = await updateUserSettings({ currency: item });
      if (response.status === 200) {
        setshowChangeCurrency(false);
        window.location.reload();
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <div className="flex items-center gap-4 md:gap-5">
      <div className="relative">
        <div
          className="flex items-center gap-2 md:gap-3 bg-titusDarkLightBG p-2 rounded-md text-white cursor-pointer"
          onClick={handleNavToggle}
        >
          {user ? (
            <>
              <div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-titusYellow flex items-center justify-center text-black text-sm md:text-md font-medium">
                {user?.data?.name?.split(" ")[0]?.charAt(0)}
                {user?.data?.name?.split(" ")[1]?.charAt(0)}
              </div>
              <div className="flex gap-2 md:gap-7 items-center">
                <div className="text-sm font-medium">
                  {`${user?.data?.name?.split(" ")[0]} ${
                    user?.data?.name?.split(" ")[1]
                  }`.substr(0, 8)}
                </div>
                <FaArrowCircleRight />
              </div>
            </>
          ) : null}
          {/* {userLoading && <Loader />} */}
          {/* {userError ? <ErrorWidget error={userError} color="white" /> : null} */}
        </div>
        {/* menu */}
        <div
          className={
            nav
              ? "absolute z-[150] -left-24 lg:left-0 top-16 lg:top-20 w-[50vw] lg:w-[300px] bg-titusDarkBG p-5  ease-in duration-500 border-[1px] border-titusLightBorder rounded-lg"
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
              <div
                onClick={() => {
                  setNav(false);
                  setshowChangeCurrency(true);
                }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <FaCog className="text-[17px]" />
                <span className="">Change Currency</span>
              </div>
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

      <div className="hidden md:block relative">
        <FaGlobe
          className="text-xl text-white cursor-pointer"
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

      <div
        onClick={() => {
          successNotification("Mobile apps are coming soon!");
        }}
        className="hidden md:block scaleItem cursor-pointer text-white"
      >
        <FaDownload className="text-sm" />
      </div>

      <div
        className={
          showChangeCurrency
            ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
            : "hidden"
        }
        style={{
          backdropFilter: showChangeCurrency ? "blur(5px)" : "",
        }}
      >
        <div className="w-[85%] mx-auto md:w-[500px]  bg-titusDashCardDarkBG p-5 md:p-7">
          <div className="flex justify-between items-center mb-5">
            <div className="text-white font-medium">Change App Currency</div>
            <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
              <FaTimesCircle
                onClick={() => setshowChangeCurrency(false)}
                className="text-xl"
              />
            </div>
          </div>
          <div className="h-[350px] md:h-[400px] overflow-y-scroll">
            {currencies &&
              currencies?.data?.map((item, i) => (
                <div
                  className="p-3 py-4 border-b-titusLightBorder border-b-[0.4px] flex items-center justify-between cursor-pointer"
                  key={i}
                  onClick={() => handleUpdateCurrency(item)}
                >
                  <div className="flex gap-5">
                    <img src={item?.icon} alt="" className="w-6 h-6" />
                    <span className="text-sm">{item?.name}</span>
                  </div>
                  <FaArrowAltCircleRight className="text-white" />
                </div>
              ))}
            {currenciesLoading ? <Loader /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSessionMenuWidget;

import React, { useState } from "react";
import {
  FaCogs,
  FaHome,
  FaMoneyBill,
  FaPlus,
  FaShoppingBag,
  FaTimesCircle,
  FaToolbox,
  FaUser,
  FaUserCog,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { dashboardSidebarMenu } from "../../data/menuData";

const DashboardFooter = () => {
  let location = useLocation();
  const pathname = location.pathname;
  const [hover, sethover] = useState();

  const handleShowSubmenu = (item) => {
    setSubmenu(item.children);
    setShowSubmenu((prev) => !prev);
  };

  const closeSubMenu = () => {
    setSubmenu([]);
    setShowSubmenu(false);
  };

  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenu, setSubmenu] = useState([]);

  return (
    <div className="w-full fixed bottom-3 md:bottom-7 left-0 z-[2000]">
      <div
        className="dash-container-footer rounded-3xl border-[2px] md:border-[2px] border-[#ffffff1a] bg-titusDarkGrey/95 lg:bg-titusDarkGrey/70 overflow-x-scroll lg:overflow-x-hidden"
        style={{
          backdropFilter: !showSubmenu ? "blur(8px)" : "",
        }}
      >
        <div className="flex items-center justify-between gap-8 lg:gap-20 relative text-[#aaa]">
          {dashboardSidebarMenu.map((item, i) => {
            let itemChild;
            if (item.children) {
              item.children ? (itemChild = item.children) : null;
            }

            function isCherries(fruit) {
              return fruit.url === pathname;
            }

            return (
              <div className="" key={i}>
                {item.children ? (
                  <>
                    <div
                      className={
                        itemChild?.find(isCherries)?.url === pathname
                          ? "flex items-center gap-2 text-titusYellow py-[2px] md:py-[6px] px-[2px] pr-[6px] md:px-4 rounded-full bg-titusYellow md:bg-[#ffffff0c] font-medium cursor-pointer"
                          : "flex items-center gap-2 cursor-pointer scale-90 md:scale-100"
                      }
                      onClick={() => handleShowSubmenu(item)}
                      // onMouseEnter={() => handleShowSubmenu(item)}
                    >
                      <img
                        src={
                          itemChild?.find(isCherries)?.url === pathname
                            ? `/assets/images/dahboard/footer-icons/${item?.activeImg}`
                            : `/assets/images/dahboard/footer-icons/${item?.inactiveImg}`
                        }
                        className="h-10 md:h-9 bg-titusDarkBG rounded-full p-2 md:p-2"
                      />
                      <span className="text-[0px] md:text-sm w-max">
                        {item.title}
                      </span>
                    </div>

                    <div
                      className={
                        showSubmenu &&
                        submenu.length &&
                        item.children === submenu
                          ? "fixed z-50 right-0 bottom-0 w-screen h-screen bg-black/60 flex items-end justify-end "
                          : "hidden slideOutRight"
                      }
                      style={{
                        backdropFilter:
                          showSubmenu &&
                          submenu.length &&
                          item.children === submenu
                            ? "blur(5px)"
                            : "",
                      }}
                    >
                      {/* <div className="mx-5 lg:mx-0 w-max h-max text-sm grid grid-cols-2 gap-x-3 gap-y-7 md:gap-11 rounded-lg py-10 px-5 md:p-10 bg-titusDarkGrey border-[1px] border-titusLightBorder relative"> */}
                      <div
                        className={
                          showSubmenu &&
                          submenu.length &&
                          item.children === submenu
                            ? "mt-8 md:mt-0 w-[70%] md:w-[30%] h-[90vh] md:h-screen text-sm flex flex-col gap-7 md:gap-10 px-5 md:p-10 pt-7 md:pt-20 bg-titusDarkGrey relative slideInRight"
                            : "slideOutRight"
                        }
                      >
                        <>
                          <div
                            className="absolute top-3 right-3 p-1 cursor-pointer"
                            onClick={closeSubMenu}
                          >
                            <FaTimesCircle className="text-[#d2d2d2] text-3xl md:text-3xl" />
                          </div>

                          {submenu.map((child, i2) => (
                            <Link
                              key={i2}
                              to={child.url}
                              className="col-span-1 flex gap-1 md:gap-3 items-center hover:bg-titusDarkGrey rounded-md"
                              onClick={() => setShowSubmenu(false)}
                              onMouseEnter={() => sethover(child.title)}
                              onMouseLeave={() => sethover()}
                            >
                              <img
                                src={
                                  hover === child.title
                                    ? `/assets/images/dahboard/footer-icons/${child?.activeImg}`
                                    : `/assets/images/dahboard/footer-icons/${child?.inactiveImg}`
                                }
                                className="h-10 md:h-10 bg-black rounded-full p-2 md:p-2"
                              />
                              <div className="flex flex-col gap-1">
                                <span className=" text-sm text-white md:font-semibold">
                                  {child.title}
                                </span>
                                <span className="hidden md:block text-xs">
                                  {child.subtitle}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.url}
                    className={
                      pathname === item.url
                        ? "flex items-center gap-2 text-titusYellow py-[2px] md:py-[6px] px-[2px] pr-[6px] md:px-4 rounded-full bg-titusYellow md:bg-[#ffffff0c] font-medium"
                        : "flex items-center gap-2 scale-90 md:scale-100"
                    }
                  >
                    <img
                      src={
                        pathname === item.url
                          ? `/assets/images/dahboard/footer-icons/${item?.activeImg}`
                          : `/assets/images/dahboard/footer-icons/${item?.inactiveImg}`
                      }
                      className="h-10 md:h-9 bg-titusDarkBG rounded-full p-2 md:p-2"
                    />
                    <span className="text-[0px] md:text-sm w-max">
                      {item.title}
                    </span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardFooter;

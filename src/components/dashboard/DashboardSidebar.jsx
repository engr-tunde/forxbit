import React, { useEffect, useState } from "react";
import { dashboardSidebarMenu } from "../../utils/data";
import { Link, useLocation } from "react-router-dom";
import {
  FaArrowCircleDown,
  FaCoins,
  FaHome,
  FaShoppingBag,
  FaToolbox,
  FaUser,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

const DashboardSidebar = () => {
  let location = useLocation();
  const pathname = location.pathname;
  console.log({ pathname });
  const link = {
    active:
      "w-full bg-titusChatBg text-white flex items-center gap-4 duration-300 ease-in text-sm py-3 px-7 rounded-r-xl cursor-pointer relative",
    inactive:
      "w-full bg-transparent text-[#828C9B] hover:text-white hover:bg-titusChatBg flex items-center gap-4 duration-300 ease-in text-sm py-3 px-7 hover:rounded-r-xl cursor-pointer relative",
  };

  const handleShowSubmenu = (item) => {
    setSubmenu(item.children);
    setShowSubmenu((prev) => !prev);
  };

  useEffect(() => {
    console.log({ submenu });
    console.log("includes", submenu.includes(pathname));
    if (submenu.includes(pathname)) {
      setShowSubmenu(true);
    }
  }, [pathname]);

  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenu, setSubmenu] = useState([]);
  return (
    <div className=" z-[2000] flex flex-col gap-4 max-h-screen overflow-y-scroll">
      {dashboardSidebarMenu.map((item, i) => (
        <div className="" key={i}>
          {item.children ? (
            <div
              onClick={() => handleShowSubmenu(item)}
              className={
                showSubmenu && submenu.length && item.children === submenu
                  ? "flex flex-col gap-4"
                  : "flex flex-col gap-0"
              }
            >
              <div
                className={
                  pathname == item.url || item.children.includes(pathname)
                    ? link.active
                    : link.inactive
                }
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    {item.title === "Dashboard" ? (
                      <FaHome className="text-[16px]" />
                    ) : item.title === "Wallet" ? (
                      <FaWallet className="text-[16px]" />
                    ) : item.title ===
                      `${import.meta.env.VITE_P2P_NAME} Trading` ? (
                      <FaUsers className="text-[16px]" />
                    ) : item.title === "Orders" ? (
                      <FaShoppingBag className="text-[16px]" />
                    ) : item.title === "Account" ? (
                      <FaUser className="text-[16px]" />
                    ) : (
                      <FaToolbox className="text-[16px]" />
                    )}
                    <span>{item.title}</span>
                  </div>
                  <FaArrowCircleDown />
                </div>
              </div>
              <div
                className={
                  showSubmenu && submenu.length && item.children === submenu
                    ? "text-sm flex flex-col gap-3 rounded-lg w-full pl-7"
                    : "hidden"
                }
              >
                {submenu.map((child, i2) => (
                  <Link
                    key={i2}
                    to={child.url}
                    // className=" hover:bg-titusChatBg hover:text-white pl-4 py-3 w-full ease-in duration-300 px-7 hover:rounded-r-xl cursor-pointer"
                    className={
                      pathname == child.url ? link.active : link.inactive
                    }
                    onClick={() => setShowSubmenu(false)}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              to={item.url}
              className={pathname == item.url ? link.active : link.inactive}
            >
              <div className="flex items-center gap-2">
                {item.title === "Dashboard" ? (
                  <FaHome className="text-[16px]" />
                ) : item.title === "Wallet" ? (
                  <FaWallet className="text-[16px]" />
                ) : item.title ===
                  `${import.meta.env.VITE_P2P_NAME} Trading` ? (
                  <FaUsers className="text-[16px]" />
                ) : item.title === "Orders" ? (
                  <FaShoppingBag className="text-[16px]" />
                ) : item.title === "Account" ? (
                  <FaUser className="text-[16px]" />
                ) : (
                  <FaToolbox className="text-[16px]" />
                )}
                <span>{item.title}</span>
              </div>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;

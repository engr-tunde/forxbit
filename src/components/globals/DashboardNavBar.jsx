import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useOutsideClick } from "../../utils/helpers";
import DashSessionMenuWidget from "./header/DashSessionMenuWidget";

const DashboardNavBar = ({ nav, setNav }) => {
  let location = useLocation();
  const pathname = location.pathname;

  const ref = useRef();
  useOutsideClick(ref.current, () => {
    // setShowExplore(false);
    // setShowCompany(false);
    // setNav(false);
  });

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-titusDarkGrey z-[1200]">
        <div className="dash-container-navbar  shadow-lg z-[100] ">
          <div className="flex justify-between items-center w-full h-full">
            <div className="flex items-center gap-14">
              <Link to="/" className="flex items-center justify-center">
                <img
                  src="/assets/images/logo-green-2.png"
                  alt=""
                  className="w-[40px] md:w-[50px]"
                />
                <div className="flex flex-col items-start gap-0 text-white">
                  <span className="text-[11px] md:text-[14px] font-bold uppercase p-0 m-0 flex items-end gap-[2px]">
                    <span className="">For</span>
                    <span className="text-titusYellow text-[16px] md:text-[18px]">
                      x
                    </span>
                    <span className="">bit</span>
                  </span>
                </div>
              </Link>
            </div>

            <DashSessionMenuWidget nav={nav} setNav={setNav} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavBar;

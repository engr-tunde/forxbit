import { Link, useLocation } from "react-router-dom";
import { m2mMenu } from "../../utils/data";
import {
  FaBriefcase,
  FaFile,
  FaMoneyBill,
  FaPlus,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";

const M2MHeaderMenu = ({ title }) => {
  let location = useLocation();
  const pathname = location.pathname;
  const link = {
    active:
      "hover:text-titusGreenFaded duration-300 ease-in text-titusGreen flex items-center gap-[6px]",
    inactive:
      "hover:text-titusGreenFaded duration-300 ease-in text-white flex items-center gap-[6px]",
  };
  return (
    <>
      <div className=" w-full z-[10] pb-[10px] mb-5 px-5 md:px-10 border-b-titusGreenDeep border-b-[1px] text-white">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-[0px] md:text-md ">
            Member 2 Member Market
          </div>
          <div className="flex flex-wrap justify-between gap-y-3 lg:gap-8 text-[12px] items-center text-white ">
            {m2mMenu.map((item, i) => (
              <Link
                to={item.url}
                key={i}
                className="hover:text-titusGreenFaded duration-300 ease-in text-white flex items-center gap-1 md:gap-[6px]"
              >
                {item.title === "Create Trade" ? (
                  <FaPlus className="text-[16px]" />
                ) : item.title === "My Trades" ? (
                  <FaBriefcase className="text-[16px]" />
                ) : item.title === "Orders" ? (
                  <FaShoppingBag className="text-[16px]" />
                ) : (
                  <FaMoneyBill className="text-[16px]" />
                )}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default M2MHeaderMenu;

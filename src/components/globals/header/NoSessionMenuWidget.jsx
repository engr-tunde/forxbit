import { FaArrowCircleRight, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { successNotification } from "../../../utils/helpers";

const NoSessionMenuWidget = () => {
  return (
    <>
      <div className="hidden md:flex items-center gap-2 lg:gap-3">
        <Link
          to="/login"
          className="flex btnn-dark py-[6px] px-2 lg:px-4 text-[12px] font-medium justify-center items-center ease-in duration-300"
        >
          <span className="mr-1 lg:mr-2">Login</span>
          <span>
            <FaArrowCircleRight className="text-titusGreen" />
          </span>
        </Link>
        <Link
          to="/register"
          className="flex btnn1 py-[6px] px-2 lg:px-4 text-[12px] font-medium justify-center items-center ease-in duration-300"
        >
          <span className="mr-1 lg:mr-2">Sign Up</span>
          <span>
            <FaArrowCircleRight />
          </span>
        </Link>
        <div
          onClick={() => {
            successNotification("Mobile apps are coming soon!");
          }}
          className="scaleItem flex p-[6px] px-1 lg:px-2 cursor-pointer"
        >
          <span>
            <FaDownload />
          </span>
        </div>
      </div>
    </>
  );
};

export default NoSessionMenuWidget;

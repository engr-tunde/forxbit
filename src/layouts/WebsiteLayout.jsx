import NavBar from "../components/globals/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default WebsiteLayout;

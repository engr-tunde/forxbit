import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavBar from "../components/globals/DashboardNavBar";
import DashboardFooter from "../components/globals/DashboardFooter";

const DashboardLayout = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <DashboardNavBar nav={nav} setNav={setNav} />
      <div className="h-full w-full">
        <div
          className="dash-container flex flex-col gap-10"
          style={{
            backdropFilter: nav ? "blur(8px)" : "",
          }}
        >
          <Outlet />
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavBar from "../components/globals/DashboardNavBar";
import DashboardFooter from "../components/globals/DashboardFooter";
import { checkSession } from "../api";

const DashboardLayout = () => {
  const [nav, setNav] = useState(false);

  const { session, sessionLoading } = checkSession();
  useEffect(() => {
    if (!session && !sessionLoading) {
      window.location.href = "/login";
    }
  }, [session]);

  return (
    <>
      <DashboardNavBar nav={nav} setNav={setNav} />
      <div className="h-full w-full">
        <div
          className="dash-container flex flex-col gap-10 mb-8 lg:mb-2"
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

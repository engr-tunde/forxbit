import { useEffect } from "react";
import NavBar from "../components/globals/NavBar";
import { Outlet } from "react-router-dom";
import { checkSession } from "../api";

const AuthLayout = () => {
  const { session } = checkSession();
  useEffect(() => {
    if (session) {
      window.location.href = "/dashboard";
    }
  }, [session]);

  return (
    <>
      <NavBar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;

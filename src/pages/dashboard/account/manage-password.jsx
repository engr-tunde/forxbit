import React from "react";
import axios from "axios";
import Head from "../../../components/Head";
import DashAccountHeader from "../../../components/dashboard/account/DashAccountHeader";
import EditPasswordBody from "../../../components/dashboard/account/manage-password/EditPasswordBody";
axios.defaults.withCredentials = true;

const ManagePasswordPage = () => {
  return (
    <>
      <Head pageTitle="Manage Account Password" />
      <div className="bg-titusDashCardDarkBG rounded-lg flex flex-col gap-1">
        <div className="border-b-[1px] border-b-titusLightBorder">
          <DashAccountHeader />
        </div>
        <div className="card-padding">
          <EditPasswordBody />
        </div>
      </div>
    </>
  );
};

export default ManagePasswordPage;

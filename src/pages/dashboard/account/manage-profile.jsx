import axios from "axios";
import { userData } from "../../../utils/data";
import Head from "../../../components/Head";
import EditProfileBody from "../../../components/dashboard/account/manage-profile/EditProfileBody";
import DashAccountHeader from "../../../components/dashboard/account/DashAccountHeader";
import { userProfile } from "../../../api";
import Loader from "../../../components/globals/Loader";
axios.defaults.withCredentials = true;

const EditProfilePage = () => {
  const { user, userLoading } = userProfile();

  return (
    <>
      <Head pageTitle="Manage Profile" />
      <>
        <div className="bg-titusDashCardDarkBG rounded-lg flex flex-col gap-1">
          <div className="border-b-[1px] border-b-titusLightBorder">
            <DashAccountHeader />
          </div>
          {/* <div className="border-b-[1px] border-b-titusLightBorder"></div> */}
          <div className="card-padding">
            {user && <EditProfileBody data={user?.data} />}
            {userLoading && <Loader />}
          </div>
        </div>
      </>
    </>
  );
};

export default EditProfilePage;

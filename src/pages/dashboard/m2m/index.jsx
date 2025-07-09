import axios from "axios";
import Head from "../../../components/Head";
import CreateTradeHeader from "../../../components/dashboard/m2m/CreateTradeHeader";
import CreateTradeForm from "../../../components/dashboard/m2m/CreateTradeForm";
axios.defaults.withCredentials = true;

const CreateTradePage = () => {
  return (
    <>
      <Head pageTitle="User Dashboard - Create Trade" />
      <div className="h-full max-w-[1000px] mx-auto flex flex-col gap-10 overflow-y-scroll">
        <CreateTradeHeader />

        <CreateTradeForm />
      </div>
      {/* <DashMarkets /> */}
    </>

    // <>
    //   <Head pageTitle="User Dashboard - Create Trade" />
    //   <div className="w-screen h-full relative">
    //     <div className="w-full h-full flex gap-0 md:gap-10 ">
    //       <div className=" bg-titusDarkGrey pt-24 pb-14 w-0 md:w-2/12 ps-0 md:ps-10">
    //         <DashboardSidebar />
    //       </div>
    //       <div className="bg-titusDarkBG w-full md:w-10/12 pt-24 pb-14 ps-5 md:ps-0 pe-5 md:pe-10">
    // <M2MCreateTradeBody />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default CreateTradePage;

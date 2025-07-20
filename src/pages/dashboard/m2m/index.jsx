import Head from "../../../components/Head";
import CreateTradeHeader from "../../../components/dashboard/m2m/CreateTradeHeader";
import CreateTradeForm from "../../../components/dashboard/m2m/CreateTradeForm";

const CreateTradePage = () => {
  return (
    <>
      <Head pageTitle="User Dashboard - Create Trade" />
      <div className="h-full w-full lg:max-w-[65%] mx-auto flex flex-col gap-10 overflow-y-scroll">
        <CreateTradeHeader />

        <CreateTradeForm />
      </div>
    </>
  );
};

export default CreateTradePage;

import { useEffect } from "react";
import Head from "../../components/Head";
import CareerSectionOne from "../../components/careers/CareerSectionOne";
import CareerSectionTwo from "../../components/careers/CareerSectionTwo";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Careers Us" />
      <div className="bg-titusDarkBG">
        <CareerSectionOne />
        <CareerSectionTwo />
      </div>
    </>
  );
};

export default CareersPage;

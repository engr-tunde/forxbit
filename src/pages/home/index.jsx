import Head from "../../components/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import RowTwoSection from "../../components/home/HomeSectionTwo";
import HomeSectionThree from "../../components/home/HomeSectionThree";
import HomeSectionFour from "../../components/home/HomeSectionFour";
import HomeSectionFive from "../../components/home/HomeSectionFive";
import HomeSectionSix from "../../components/home/HomeSectionSix";
import HomeSectionSeven from "../../components/home/HomeSectionSeven";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Welcome to Forxbit Exchange" />
      <div className="bg-black">
        <HomeSectionOne />
        <RowTwoSection />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
        <HomeSectionSix />
        <HomeSectionSeven />
      </div>
    </>
  );
};

export default HomePage;

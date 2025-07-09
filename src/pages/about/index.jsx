import AboutSectionOne from "../../components/about/AboutSectionOne";
import AboutSectionTwo from "../../components/about/AboutSectionTwo";
import AboutSectionThree from "../../components/about/AboutSectionThree";
import Head from "../../components/Head";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="About Us" />
      <div className="bg-titusDarkBG">
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
      </div>
    </>
  );
};

export default AboutPage;

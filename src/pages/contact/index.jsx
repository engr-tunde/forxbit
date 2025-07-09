import { useEffect } from "react";
import Head from "../../components/Head";
import ContactSectionOne from "../../components/contact/ContactSectionOne";
import ContactSectionTwo from "../../components/contact/ContactSectionTwo";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Get n Touch" />
      <ContactSectionOne />
      <ContactSectionTwo />
    </>
  );
};

export default ContactPage;

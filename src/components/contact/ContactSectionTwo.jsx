import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSectionTwo = () => {
  return (
    <div className="w-screen bg-titusDarkBG flex flex-col items-center">
      {/* <div className="container pt-[100px] md:pt-[100px] pb-[180px] md:pb-[200px] items-center px-10 md:px-0 grid grid-cols-1 md:grid-cols-3 "> */}
      <div className="container py-[100px] md:py-[100px] items-center px-10 md:px-0 ">
        {/* <div className="col-span-1 lg:col-span-2 flex flex-col justify-center items-center gap-6 md:w-[70%]">
          <h1 className="text-white text-[30px] md:text-[40px] uppercase mb-5 ">
            Get in Touch
          </h1>
          <p>
            What query do you have for us? Use any of the means below to reach
            out to us and we will reach back to you as son as possible
          </p>
          <p>
            Use our live chat widget on the footer to talk to us in real time.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-white">
          <Link
            to="https://x.com"
            target="_blank"
            className="col-span-1 p-7 rounded-2xl bg-black flex flex-col items-center gap-3 right-box border-[1px] border-titusGreen border-dashed"
          >
            <FaTwitter size={35} className="text-titusGreen" />
            <p>@titusexchange</p>
          </Link>
          <Link
            to="https://telegram.com"
            target="_blank"
            className="col-span-1 p-5 rounded-2xl bg-black flex flex-col items-center gap-3 right-box border-[1px] border-titusGreen border-dashed"
          >
            <FaTelegram size={35} className="text-titusGreen" />
            <p>@titusexchange</p>
          </Link>
          <Link
            to="https://discord.com"
            target="_blank"
            className="col-span-1 p-5 rounded-2xl bg-black flex flex-col items-center gap-3 right-box border-[1px] border-titusGreen border-dashed"
          >
            <FaDiscord size={35} className="text-titusGreen" />
            <p>@titusexchange</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionTwo;

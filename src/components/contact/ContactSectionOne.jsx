const ContactSectionOne = () => {
  return (
    <div className="w-screen text-titusLightText flex flex-col items-center">
      <div className="container pt-[120px] md:pt-[200px] pb-[20px] md:pb-[20px] items-center px-10 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-[50px]">
        <div className="col-span-1 flex flex-col justify-centerr gap-6">
          <h1 className="text-[30px] md:text-[40px] text-white">Contact Us</h1>
          <p className="font-medium">
            What query do you have for us? Use any of the means below to reach
            out to us and we will reach back to you as son as possible. For
            Business & Partnership Inquiries, Kindly Reach Out to Us
          </p>
        </div>

        <div className="col-span-1 flex justify-end md:justify-start">
          <img
            src="/assets/images/contact.png"
            alt=""
            className="w-[150px] lg:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSectionOne;

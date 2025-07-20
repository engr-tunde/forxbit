const HomeSectionFive = () => {
  return (
    <div
      className="w-[100vw] bg-titusDarkBG flex flex-col items-center"
      id="features"
    >
      <div className="container py-[100px] md:py-[170px] items-center px-7 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-20 md:gap-12">
          <div className="col-span-4 flex flex-col justify-center gap-5">
            <div className="w-full mx-auto flex flex-col items-start gap-6 mb-1">
              <p className="rounded-full px-8 py-4 bg-[#1B1B1D] text-[#999999] font-semibold">
                Features
              </p>
              <h1 className=" text-[30px] md:text-[36px] leading-[1.3em] text-white">
                Why Trade With Us?
              </h1>
              <p className="text-[#ACACAC] text-md text-start">
                You can buy and sell 150+ cryptocurrencies with 20+ fiat
                currencies using bank transfers on your credit or debit card and
                enjoy the following features
              </p>
            </div>
            <img
              src="/assets/images/home/Why-trade-with-us.png"
              alt={import.meta.env.VITE_APP_NAME}
              className="dancingSlide rounded-[0px]"
            />
          </div>
          <div className="col-span-5 flex flex-col gap-12 md:gap-10 text-titusLightText">
            <div className="flex flex-col gap-10 lg:gap-6">
              <div className="feature-card">
                <div className="h-max flex justify-center items-center bg-titusGreen rounded-full">
                  <img
                    src="/assets/images/icons/home-icons/Lightning-Speed-Transactions-01.svg"
                    alt={import.meta.env.VITE_APP_NAME}
                    className="w-32"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Lightning Speed Transactions
                  </span>
                  <span className="text-sm font-light">
                    Our platform is designed to meet surge demand. Our servers
                    can isolate lightweight, virtualized environments and
                    maintain extensive control over usage.
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max flex justify-center items-center bg-titusGreen rounded-full">
                  <img
                    src="/assets/images/icons/home-icons/Advanced-Security-01.svg"
                    alt={import.meta.env.VITE_APP_NAME}
                    className="w-32"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Advanced Security
                  </span>
                  <span className="text-sm font-light">
                    To ensure {import.meta.env.VITE_APP_NAME}'s security, we are
                    investing in periodic audits and deploying enterprise grade
                    security shield to protect your assets 24/7
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max flex justify-center items-center bg-titusGreen rounded-full">
                  <img
                    src="/assets/images/icons/home-icons/Intuitive-Interface-01.svg"
                    alt={import.meta.env.VITE_APP_NAME}
                    className="w-32"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    Intuitive Interface
                  </span>
                  <span className="text-sm font-light">
                    Trading on {import.meta.env.VITE_APP_NAME} is a remarkable
                    experience even for neophytes. Having created multiple
                    infrastructures globally, it was seamless to create an
                    intuitive interface.
                  </span>
                </div>
              </div>
              <div className="feature-card">
                <div className="h-max flex justify-center items-center bg-titusGreen rounded-full">
                  <img
                    src="/assets/images/icons/home-icons/247-Support-01.svg"
                    alt={import.meta.env.VITE_APP_NAME}
                    className="w-32"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-[16px] lg:text-xl font-medium">
                    24/7 Support
                  </span>
                  <span className="text-sm font-light">
                    With a dedicated and experienced CS team on standby
                    round-the-clock across boards,{" "}
                    {import.meta.env.VITE_APP_NAME} is dedicated to ensuring you
                    have seamless transactions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFive;

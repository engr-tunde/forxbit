import { partnerLogos } from "../../utils/data";

const HomeSectionSix = () => {
  return (
    <div className="w-[100vw] bg-[#000000eb] flex flex-col items-center">
      <div className="max-w-[1000px] py-[90px] md:py-[150px] grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-10 items-center px-8 md:px-0">
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-white text-[25px] md:text-[35px] mb-5 ">
            Development <span className="text-titusGreen">Partners</span>
          </h1>
          <p className="text-sm">
            Trusted by hundreds of digital businesses across emerging markets
            for Identity Verification, Fraud Detection/Prevention & Background
            Checks; to safely acquire, onboard customers and perform seamless
            transactions across borders with trust & without restrictions, while
            maintaining required regulatory compliance checks.
          </p>
        </div>
        <div
          className="col-span-1 lg:col-span-3 p-5 rounded-2xl bg-titusGreen flex flex-col gap-5 right-box"
          style={{ boxShadow: "3px 3px 6px #f7a50030" }}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-7 md:gap-[30px]">
            {partnerLogos &&
              partnerLogos.map((partner, i) => (
                <div
                  key={i}
                  className="col-span-1 rounded-lg max-w-[120px] max-h-[60px] flex justify-center items-center hover:scale-110 ease-in duration-300"
                >
                  <img
                    src={`/assets/images/partners/${partner}`}
                    alt=""
                    className="max-w-[90px] max-h-[50px]"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSix;

import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { userProfile, verifyUsername } from "../../../api";
import { errorNotification, successNotification } from "../../../utils/helpers";

const TransferRecipient = ({ errors, setrecipient }) => {
  const [username, setusername] = useState();
  const [userDataUsername, setuserDataUsername] = useState();
  const [verify, setverify] = useState("Verify");
  const { user } = userProfile();

  useEffect(() => {
    if (user) {
      const ud = user?.data;
      setuserDataUsername(ud);
    }
  }, [user]);

  const handleVerifyUser = async () => {
    if (!username) {
      errors.recipient = "Username is missing!";
    } else {
      const response = await verifyUsername({ recipient: username });
      console.log("response", response);
      if (response.status == 200) {
        if (
          response.data.username === userDataUsername?.username ||
          response.data.email === userDataUsername?.email
        ) {
          errorNotification("Invalid. You cannot transfer asset to yourseld!");
        } else {
          successNotification(response.data.message);
          setrecipient(username);
          setverify("Verified");
        }
      } else {
        errorNotification("Invalid username. User account does not exist");
        setrecipient("");
        setverify("Verify");
      }
    }
  };

  const handleChange = (value) => {
    setverify("Verify");
    if (!value) {
      errors.recipient = "Username is missing!";
    } else if (
      value === userDataUsername?.username ||
      value === userDataUsername?.email
    ) {
      errors.recipient = "You cannot be the recipient";
    } else {
      delete errors["recipient"];
    }
    setusername(value);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full flex items-center gap-2 justify-between ">
        <div className="w-full md:w-[88%] flex flex-col border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
          <input
            //   disabled={disabled}
            type="text"
            // value={username}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Username"
            className="w-full px-2 py-2 border-[1px] bg-transparent input-no-border placeholder:text-[15px] placeholder:font-semibold text-[15px]"
          />
        </div>
        <div
          className="font-semibold text-white text-sm cursor-pointer flex items-center gap-1 w-max"
          onClick={handleVerifyUser}
        >
          {verify}
          {verify == "Verified" && <FaCheck className="text-titusGreenFaded" />}
        </div>
      </div>
      {errors.recipient && <div className="error">{errors.recipient}</div>}
    </div>
  );
};

export default TransferRecipient;

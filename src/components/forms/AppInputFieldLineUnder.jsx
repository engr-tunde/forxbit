import { useState } from "react";
import { FaEye } from "react-icons/fa";

const AppInputFieldLineUnder = ({
  placeholder,
  type = "text",
  register,
  name,
  defaultValue = null,
  error,
  inputProps,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={"w-full"}>
      <div className="border-b-[1px] border-b-titusLightBorder">
        {type === "password" ? (
          <div className="pass-field border w-[100%] bg-transparent flex items-center gap-1 pe-1">
            <input
              type={showPassword ? "text" : "password"}
              {...register(name)}
              disabled={disabled}
              className="w-[90%] ps-0 pt-0 p-3 pb-1 text-[14px] font-[400] input-no-border"
              defaultValue={defaultValue}
              placeholder={placeholder}
              {...inputProps}
            />
            <FaEye size={17} onClick={togglePassword} />
          </div>
        ) : (
          <input
            type={type}
            {...register(name)}
            disabled={disabled}
            className="w-[100%] bg-transparent p-0 text-[14px] font-[400] input-no-border"
            defaultValue={defaultValue}
            placeholder={placeholder}
            {...inputProps}
          />
        )}
      </div>
      {error?.message && (
        <p className="text-xs text-red-300">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default AppInputFieldLineUnder;

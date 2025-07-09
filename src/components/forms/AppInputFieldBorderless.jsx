import { useState } from "react";
import { FaEye } from "react-icons/fa";

const AppInputFieldBorderless = ({
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

  console.log("error", error);

  return (
    <div className="flex flex-col gap-2">
      {type === "password" ? (
        <div className="pass-field w-[100%] bg-transparent flex items-center gap-1 pe-1 input-no-border">
          <input
            type={showPassword ? "text" : "password"}
            {...register(name)}
            disabled={disabled}
            className="border-0 w-[90%] bg-transparent p-3 text-[14px] font-[400] input-no-border"
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
          className="w-[100%] bg-transparent p-3 text-[14px] font-[400] input-no-border"
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...inputProps}
        />
      )}
      {error?.message && (
        <p className="text-xs text-red-300">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default AppInputFieldBorderless;

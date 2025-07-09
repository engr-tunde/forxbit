import { useFormikContext } from "formik";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const InputFieldLineUnder = ({
  name,
  placeholder,
  type = "text",
  full = false,
  className,
  disabled = false,
  ...rest
}) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    // <div className="col-span-1">
    <div className={"w-full"}>
      {type === "password" ? (
        <div className="pass-field border w-[100%] bg-transparent flex items-center gap-1 pe-1">
          <input
            value={value}
            placeholder={placeholder}
            onChange={handleChange(name)}
            onBlur={handleBlur(name)}
            type={showPassword ? "text" : "password"}
            disabled={disabled}
            className="w-[90%] ps-0 pt-0 p-3 pb-1 text-[14px] font-[400] input-no-border"
            autoComplete="off"
            {...rest}
          />
          <FaEye size={17} onClick={togglePassword} />
        </div>
      ) : (
        <input
          value={value}
          placeholder={placeholder}
          onChange={handleChange(name)}
          onBlur={handleBlur(name)}
          type={type}
          disabled={disabled}
          className="w-[100%] bg-transparent p-0 text-[14px] font-[400] input-no-border"
          autoComplete="off"
          {...rest}
        />
      )}
      {error && isInputTouched ? (
        <div className="text-red-500 text-[12px] font-400 lowercase">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default InputFieldLineUnder;

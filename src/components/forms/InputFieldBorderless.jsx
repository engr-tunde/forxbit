import { useFormikContext } from "formik";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const InputFieldBorderless = ({
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
    <div className={full ? "col-span-1 md:col-span-2" : "col-span-1"}>
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        type={type}
        disabled={disabled}
        className="border-0 rounded-md w-[100%] bg-transparent p-0 text-xl font-medium"
        autoComplete="off"
        {...rest}
      />
      {error && isInputTouched ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default InputFieldBorderless;

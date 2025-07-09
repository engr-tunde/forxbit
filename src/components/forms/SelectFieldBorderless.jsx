import { useFormikContext } from "formik";

const SelectFieldBorderless = ({ name, options, placeholder, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  console.log({ options });

  return (
    <div className="col-span-1">
      <select
        value={value}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        // placeholder={placeholder}
        className="border-0 rounded-md w-[100%] bg-transparent px-0 py-3 text-[16px] h-14"
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options?.map((item, i) => (
          <option key={i} value={item} className="text-[14px] p-5 mb-2">
            {item}
          </option>
        ))}
      </select>
      {error && isInputTouched ? (
        <div className="text-red-500 text-[12px] font-400 lowercase">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default SelectFieldBorderless;

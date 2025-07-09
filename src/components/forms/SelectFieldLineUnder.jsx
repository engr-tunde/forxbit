import { useFormikContext } from "formik";

const SelectFieldLineUnder = ({ name, placeholder, array, ...rest }) => {
  const { errors, values, touched, handleBlur, handleChange } =
    useFormikContext();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <div className="col-span-1 cursor-pointer p-0">
      <select
        value={value}
        onChange={handleChange(name)}
        onBlur={handleBlur(name)}
        className="w-[100%] bg-transparent p-0 text-[14px] font-[400] input-no-border cursor-pointer"
        {...rest}
      >
        <option value="">{placeholder}</option>
        {array.map((item, i) => (
          <option className="" key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && isInputTouched ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default SelectFieldLineUnder;

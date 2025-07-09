const AppSelectFieldLineUnder = ({
  label,
  register,
  name,
  defaultValue,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-gray-400">{label}</label>
      <select
        className="ring-[1.5px] ring-titusLightBorder bg-transparent p-2 rounded-md text-sm w-full"
        {...register(name)}
        defaultValue={defaultValue}
      >
        {options.map((item, i) => (
          <option
            value={`${item}`}
            key={i}
            className="text-titusDark"
            // selected={defaultValue === item ? true : false}
          >
            {item}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default AppSelectFieldLineUnder;

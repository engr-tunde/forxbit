const HandleFuncButton = ({
  handleSubmit,
  title,
  className,
  isSubmitting,
  disabled,
}) => {
  return (
    <div
      onClick={!disabled && !isSubmitting && handleSubmit}
      className={
        disabled
          ? `${className} btnn1-disabled py-2 text-center text-sm font-medium`
          : isSubmitting
          ? `${className} btnn1-disabled py-2 text-center text-sm font-medium`
          : `${className} btnn1 py-2 text-center text-sm font-medium`
      }
    >
      {isSubmitting ? "Loading..." : title}
    </div>
  );
};

export default HandleFuncButton;

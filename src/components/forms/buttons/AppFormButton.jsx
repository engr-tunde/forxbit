const AppFormButton = ({ title, className, isSubmitting, disabled }) => {
  return (
    <button
      className={
        disabled
          ? `${className} btnn1-disabled py-2 text-center text-sm font-medium`
          : isSubmitting
          ? `${className} btnn1-disabled py-2 text-center text-sm font-medium`
          : `${className} btnn1 py-2 text-center text-sm font-medium`
      }
    >
      {isSubmitting ? "Loading..." : title}
    </button>
  );
};

export default AppFormButton;

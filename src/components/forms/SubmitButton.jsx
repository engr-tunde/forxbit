import { useFormikContext } from "formik";

const SubmitButton = ({ title, className, disabled = false }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  const label = isSubmitting ? "Loading..." : title;

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className={className}
      disabled={disabled ? true : isSubmitting ? true : false}
      style={{
        background: isSubmitting ? "#066156" : disabled ? "#066156" : "#00DBC2",
        color: isSubmitting ? "#000" : disabled ? "#000" : "#000",
        border: isSubmitting && "1px solid #fff",
      }}
    >
      {label}
    </button>
  );
};

export default SubmitButton;

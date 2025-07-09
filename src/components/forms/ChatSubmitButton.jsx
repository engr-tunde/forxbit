import { useFormikContext } from "formik";
import { FaPaperPlane } from "react-icons/fa";

const ChatSubmitButton = ({ disabled = false }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="w-full"
      disabled={disabled ? true : isSubmitting ? true : false}
      style={{
        color: isSubmitting ? "#000" : disabled ? "#000" : "#fff",
        border: isSubmitting && "1px solid #fff",
      }}
    >
      <FaPaperPlane size={20} />
    </button>
  );
};

export default ChatSubmitButton;

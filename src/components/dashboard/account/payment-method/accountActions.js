import { useNavigate } from "react-router-dom";
import {
  errorNotification,
  successNotification,
} from "../../../../utils/helpers";
import { updateBankDetailsValues } from "../../../../utils/initialValues";
import { validateAddBank } from "../../../../utils/validate";

export const handleEditBank = ({ values }) => {
  const initialValues = updateBankDetailsValues();
  const validationSchema = validateAddBank();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    const payload = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    // const response = await axios.put(
    //   `${import.meta.env.VITE_API_URL}/user-profile/update-password`,
    //   payload,
    //   { withCredentials: true }
    // );
    // console.log(response);
    // try {
    //   if (response.status === 200) {
    //     const data = response.data;
    //     successNotification(data.message);
    //     history("/dashboard");
    //   } else {
    //     errorNotification(response?.data?.error);
    //   }
    // } catch (error) {
    //   errorNotification(error?.response?.data?.error);
    // }
  };

  handleSubmit();

  return;
};

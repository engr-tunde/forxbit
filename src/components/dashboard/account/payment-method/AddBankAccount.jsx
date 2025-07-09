import { validateAddBank } from "../../../../utils/validate";
import { FaTimesCircle } from "react-icons/fa";
import { addUserBankAccounts, updateUserBankAccounts } from "../../../../api";
import {
  errorNotification,
  successNotification,
} from "../../../../utils/helpers";
import AppInputFieldLineUnder from "../../../forms/AppInputFieldLineUnder";
import AppSelectFieldLineUnder from "../../../forms/AppSelectFieldLineUnder";
import AppFormButton from "../../../forms/buttons/AppFormButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const AddBankAccount = ({ showAddBank, setshowAddBank, mutate, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, values },
  } = useForm({
    resolver: zodResolver(validateAddBank),
  });

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const payload = {
      account_name: values.account_name,
      account_number: values.account_number,
      bank_name: values.bank_name,
      account_type: values.account_type,
      sort_code: values.sort_code,
    };
    const response = data
      ? await updateUserBankAccounts(payload, data._id)
      : await addUserBankAccounts(payload);
    console.log("response", response);
    if (response.status === 200) {
      successNotification(response.data.message);
      setshowAddBank(false);
      mutate();
    } else {
      errorNotification(response?.data?.error);
    }
  });

  return (
    <div
      className={
        showAddBank
          ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
          : "hidden"
      }
      style={{
        backdropFilter: showAddBank ? "blur(5px)" : "",
      }}
    >
      <div className="w-[85%] mx-auto md:w-[500px] h-max bg-titusDashCardDarkBG p-5 md:p-7">
        <div className="flex justify-between items-center mb-5">
          <div className="text-white font-medium">
            {data
              ? `Edit Your ${data?.bank_name} Account Details`
              : "Add a New Bank Account"}
          </div>
          <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
            <FaTimesCircle
              onClick={() => setshowAddBank(false)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="max-h-[43vh] md:max-h-[50vh] overflow-y-scroll">
          <form onSubmit={onSubmit}>
            <div className="text-sm flex flex-col gap-8">
              <div className="flex flex-col -gap-1">
                <label className="p-0">Account Name</label>
                <AppInputFieldLineUnder
                  name="account_name"
                  defaultValue={data?.account_name}
                  register={register}
                  error={errors?.account_name}
                />
              </div>
              <div className="flex flex-col -gap-1">
                <label className="p-0">Account Number</label>
                <AppInputFieldLineUnder
                  name="account_number"
                  defaultValue={data?.account_number}
                  register={register}
                  error={errors?.account_number}
                />
              </div>
              <div className="flex flex-col -gap-1">
                <label className="p-0">Bank Name</label>
                <AppInputFieldLineUnder
                  name="bank_name"
                  defaultValue={data?.bank_name}
                  register={register}
                  placeholder={`Bank name`}
                  error={errors?.bank_name}
                />
              </div>
              <div className="flex flex-col ">
                <label className="p-0">Account Type</label>
                <AppSelectFieldLineUnder
                  label="Select account type"
                  register={register}
                  name="account_type"
                  defaultValue={data?.account_type}
                  error={errors?.account_type}
                  options={["Savings", "Current", "Checking", "Others"]}
                />
              </div>
              <div className="flex flex-col ">
                <label className="p-0">Sort Code (optional)</label>
                <AppInputFieldLineUnder
                  name="sort_code"
                  defaultValue={data?.sort_code}
                  register={register}
                  placeholder={`Sort Code`}
                  error={errors?.sort_code}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <AppFormButton
                title={data ? "Update Bank Details" : "Add Bank Details"}
                isSubmitting={false}
                disabled={false}
                className="mt-10 w-full md:w-[50%]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBankAccount;

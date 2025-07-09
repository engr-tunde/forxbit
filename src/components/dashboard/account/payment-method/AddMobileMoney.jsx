import { validateAddMobileMoney } from "../../../../utils/validate";
import { FaTimesCircle } from "react-icons/fa";
import AppFormButton from "../../../forms/buttons/AppFormButton";
import AppInputFieldLineUnder from "../../../forms/AppInputFieldLineUnder";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddMobileMoney = ({ showAddMobileMoney, setshowAddMobileMoney }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validateAddMobileMoney),
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
        showAddMobileMoney
          ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/25"
          : "hidden"
      }
      style={{
        backdropFilter: showAddMobileMoney ? "blur(5px)" : "",
      }}
    >
      <div className="w-full md:w-[500px] h-max bg-titusDashCardDarkBG p-5 md:p-7">
        <div className="flex justify-between items-center mb-5">
          <div className="text-white font-medium">
            {data
              ? `Edit Your ${data?.operator} Mobile Money Account`
              : "Add Mobile Money Account"}
          </div>
          <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
            <FaTimesCircle
              onClick={() => setshowAddMobileMoney(false)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="">
          <form onSubmit={onSubmit}>
            <div className="text-sm flex flex-col gap-8">
              <div className="flex flex-col -gap-1">
                <label className="p-0">Account Name</label>
                <AppInputFieldLineUnder
                  name="account_name"
                  type="text"
                  defaultValue={data?.account_name}
                  register={register}
                  error={errors?.account_name}
                />
              </div>
              <div className="flex flex-col -gap-1">
                <label className="p-0">Operator</label>
                <AppInputFieldLineUnder
                  name="operator"
                  type="text"
                  defaultValue={data?.operator}
                  register={register}
                  error={errors?.operator}
                />
              </div>
              <div className="flex flex-col -gap-1">
                <label className="p-0">Phone Number</label>
                <AppInputFieldLineUnder
                  name="phone_number"
                  type="text"
                  defaultValue={data?.phone_number}
                  register={register}
                  error={errors?.phone_number}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <AppFormButton
                title={data ? "Update Account Details" : "Add Account Details"}
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

export default AddMobileMoney;

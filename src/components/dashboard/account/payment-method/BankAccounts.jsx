import { useEffect, useState } from "react";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import AddBankAccount from "./AddBankAccount";
import { deleteUserBankAccount } from "../../../../api";
import {
  errorNotification,
  successNotification,
} from "../../../../utils/helpers";

const BankAccounts = ({ bankAccounts, mutate }) => {
  const [showAddBank, setshowAddBank] = useState(false);
  const [data, setdata] = useState();
  mutate();

  const handleDeleteBank = async (id) => {
    const response = await deleteUserBankAccount(id);
    if (response?.status === 200) {
      successNotification(response.data.message);
      mutate();
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const openBankForm = (item) => {
    setdata(item);
    setshowAddBank(true);
  };

  useEffect(() => {
    if (!showAddBank) {
      setdata();
    }
  }, [showAddBank]);

  return (
    <div className="w-full flex flex-col justify-between gap-6 md:gap-8 bg-titusDashCardDarkItemBG p-5 md:p-5 rounded-lg border-[1px] border-titusLightBorder">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="text-white text-[16px] md:text-md">Bank Accounts</div>
          <div className="text-[12px] leading-[14px]">
            You can add up to 5 accounts
          </div>
        </div>
        <div
          className="hidden h-max w-max btnn1 py-2 px-8 gap-2 md:flex items-center text-sm font-semibold"
          onClick={() => setshowAddBank(true)}
        >
          <FaPlus />
          <span>Add</span>
        </div>
      </div>
      {bankAccounts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5">
          {bankAccounts?.map((item, i) => {
            return (
              <div key={item?._id}>
                <div className="col-span-1 bg-titusDarkLightBG/75  p-4 md:p-5 rounded-md flex items-center gap-3 md:gap-6">
                  <img
                    src="/assets/images/icons/bank.png"
                    alt=""
                    className="w-6 md:w-9"
                  />
                  <div className="w-full flex justify-between">
                    <div className="flex flex-col md:gap-1">
                      <div className="text-sm text-white font-medium mb-2">
                        {item.bank_name}
                      </div>
                      <div className="text-[12px]">
                        {item.account_name} ({item.account_type})
                      </div>
                      <div className="text-[12px]">{item.account_number}</div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div
                        className="text-titusGreen p-1 font-semibold cursor-pointer"
                        onClick={() => openBankForm(item)}
                      >
                        <FaPen className="text-[12px] md:text-md" />
                      </div>
                      <div
                        className="text-red-400 p-1 font-semibold cursor-pointer"
                        onClick={() => handleDeleteBank(item?._id)}
                      >
                        <FaTrash className="text-[12px] md:text-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      <AddBankAccount
        showAddBank={showAddBank}
        setshowAddBank={setshowAddBank}
        mutate={mutate}
        data={data}
      />
    </div>
  );
};

export default BankAccounts;

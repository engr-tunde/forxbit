import axios from "axios";
import Head from "../../../components/Head";
import DashAccountHeader from "../../../components/dashboard/account/DashAccountHeader";
import { otherPAymentMethods, paymentMethods } from "../../../data/userData";
import BankAccounts from "../../../components/dashboard/account/payment-method/BankAccounts";
import OtherPaymentMethods from "../../../components/dashboard/account/payment-method/OtherPaymentMethods";
import { fetchUserBankAccounts } from "../../../api";
axios.defaults.withCredentials = true;

const PaymentMethodPage = () => {
  const { bankAccounts, bankAccountLoading, mutate } = fetchUserBankAccounts();

  return (
    <>
      <Head pageTitle="Manage Account Password" />
      <div className="bg-titusDashCardDarkBG rounded-lg flex flex-col gap-5 md:gap-0">
        <div className="border-b-[1px] border-b-titusLightBorder">
          <DashAccountHeader />
        </div>
        <div className="mt-2 md:mt-5 py-5 md:py-7 px-5 md:px-10">
          {bankAccounts && (
            <BankAccounts
              bankAccounts={bankAccounts?.data}
              mutate={mutate}
              type="bank"
            />
          )}
        </div>

        <div className="p-5 md:py-7 px-5 md:px-10">
          {/* <BankAccounts
            paymentMethods={paymentMethods}
            mutate={mutate}
            type="mobile money"
          /> */}
        </div>

        <div className="p-5 md:py-7 px-5 md:px-10">
          <OtherPaymentMethods
            otherPAymentMethods={otherPAymentMethods}
            type="mobile money"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentMethodPage;

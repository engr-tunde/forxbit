export const joinValues = () => {
  const initialValues = {
    email: "",
  };
  return initialValues;
};

export const loginValues = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return initialValues;
};

export const signUpValues = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return initialValues;
};

export const updateProfileValues = (data) => {
  const initialValues = {
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    country: data.country,
  };
  return initialValues;
};

export const editPaswordValues = () => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  return initialValues;
};

export const forgotPasswordValues = () => {
  const initialValues = {
    email: "",
  };
  return initialValues;
};

export const resetPasswordValues = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  return initialValues;
};

export const otpValues = () => {
  const initialValues = {
    otp: "",
  };
  return initialValues;
};

export const requestServiceValues = (data) => {
  const initialValues = {
    service: `Issue: ${data.title}`,
    walletValue: "",
    walletAddress: "",
    social: "",
    socialHandle: "",
  };
  return initialValues;
};

// Trade
export const p2pTradeValues = (selectedTrade) => {
  console.log({ selectedTrade });
  const initialValues = {
    pay: "200",
    // pay: selectedTrade?.min_limit,
    get: "",
  };
  return initialValues;
};

export const tradeChatValues = () => {
  const initialValues = {
    message: "",
  };
  return initialValues;
};

// profile
export const updateBankDetailsValues = (data) => {
  console.log({ data });
  const initialValues = {
    account_name: data.account_name,
    account_number: data.account_number,
    bank_name: data.bank_name,
    account_type: data.account_type,
    sort_code: data.sort_code,
  };
  return initialValues;
};

export const addBankDetailsValues = () => {
  const initialValues = {
    account_name: "",
    account_number: "",
    bank_name: "",
    account_type: "",
    sort_code: "",
  };
  return initialValues;
};

export const updateMobileMoneyValues = (data) => {
  console.log({ data });
  const initialValues = {
    operator: data.operator,
    name: data.name,
    phone_number: data.phone_number,
  };
  return initialValues;
};

export const addMobileMoneyValues = () => {
  const initialValues = {
    operator: "",
    name: "",
    phone_number: "",
  };
  return initialValues;
};

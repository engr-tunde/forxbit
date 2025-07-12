import useSWR from "swr";
import {
  ADD_BANK_ACCOUNTS,
  ADD_TOKEN_TO_WALLET,
  ALL_M2M_POSTS,
  BUY_SELL_TOKENS,
  CANCEL_M2M_ORDER,
  CLOSE_M2M_POSTS,
  CREATE_M2M_ORDER,
  CURRENCIES,
  DELETE_BANK_ACCOUNT,
  DEPOSIT_CRYPTO,
  DEPOSIT_FIAT,
  FETCH_BANK_ACCOUNTS,
  FETCH_CURRENCY_BALANCES,
  FETCH_PAYMENT_METHODS,
  FETCH_TOKEN_BALANCES,
  FETCH_TOKEN_NETWORKS,
  FETCH_TRANSACTION_DETAILS,
  FETCH_USER_SETTINGS,
  FETCH_USER_TRANSACTIONS,
  FETCH_USER_UNADDED_TOKENS,
  OPEN_M2M_POSTS,
  P2P_TOKENS,
  POST_M2M_TRADE,
  REMOVE_TOKEN_FROM_WALLET,
  SINGLE_CURRENCY,
  SINGLE_M2M_ORDER,
  SINGLE_M2M_POST,
  SWAP_TOKENS,
  TRANSFER_CRYPTO,
  TRANSFER_FIAT,
  UPDATE_BANK_ACCOUNTS,
  UPDATE_USER_SETTINGS,
  USER_FORGOT_PASSWORD,
  USER_LOGIN,
  USER_LOGOUT,
  USER_M2M_ORDERS,
  USER_M2M_POSTS,
  USER_PROFILE,
  USER_REGISTER,
  USER_RESEND_VERIFY_EMAIL_OTP,
  USER_RESEND_VERIFY_LOGIN_OTP,
  USER_RESET_PASSWORD,
  USER_VERIFY_EMAIL,
  USER_VERIFY_LOGIN,
  VERIFY_USERNAME,
  WITHDRAW_CRYPTO,
  WITHDRAW_FIAT,
} from "../constants/routes";
import { mutationRequest } from "./sendData";
import { fetcher, sessionFetcher } from "./fetcher";

// WEBSITE
// Tokens
export const fetchP2PTokenList = () => {
  const { data, error, mutate } = useSWR(
    { url: P2P_TOKENS, withCredentials: true },
    fetcher
  );
  return {
    tokens: data,
    tokensLoading: !error && !data,
    tokensError: error,
    mutate,
  };
};
export const fetchSwapTokenList = () => {
  const { data, error, mutate } = useSWR(
    { url: SWAP_TOKENS, withCredentials: true },
    fetcher
  );
  return {
    tokens: data,
    tokensLoading: !error && !data,
    tokensError: error,
    mutate,
  };
};
export const fetchBuySellTokenList = () => {
  const { data, error, mutate } = useSWR(
    { url: BUY_SELL_TOKENS, withCredentials: true },
    fetcher
  );
  return {
    tokens: data,
    tokensLoading: !error && !data,
    tokensError: error,
    mutate,
  };
};
// Currencies
export const fetchCurrencies = () => {
  const { data, error, mutate } = useSWR(
    { url: CURRENCIES, withCredentials: true },
    fetcher
  );
  return {
    currencies: data,
    currenciesLoading: !error && !data,
    currenciesError: error,
    mutate,
  };
};
export const fetchSingleCurrency = (id) => {
  const { data, error, mutate } = useSWR(
    { url: `${SINGLE_CURRENCY}/${id}`, withCredentials: true },
    fetcher
  );
  return {
    currency: data,
    currencyLoading: !error && !data,
    currencyError: error,
    mutate,
  };
};
// Payment Methods
export const fetchPaymentMethods = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_PAYMENT_METHODS, withCredentials: true },
    fetcher
  );
  return {
    paymentMethods: data,
    paymentMethodsLoading: !error && !data,
    paymentMethodsError: error,
    mutate,
  };
};
// M2M
export const fetchAllM2MPosts = () => {
  const { data, error, mutate } = useSWR(
    { url: ALL_M2M_POSTS, withCredentials: true },
    fetcher
  );
  return {
    m2mPosts: data,
    m2mPostsLoading: !error && !data,
    m2mPostsError: error,
    mutate,
  };
};
export const fetchOpenM2MPosts = () => {
  const { data, error, mutate } = useSWR(
    { url: OPEN_M2M_POSTS, withCredentials: true },
    fetcher
  );
  return {
    m2mPosts: data,
    m2mPostsLoading: !error && !data,
    m2mPostsError: error,
    mutate,
  };
};
export const fetchCloseM2MPosts = () => {
  const { data, error, mutate } = useSWR(
    { url: CLOSE_M2M_POSTS, withCredentials: true },
    fetcher
  );
  return {
    m2mPosts: data,
    m2mPostsLoading: !error && !data,
    m2mPostsError: error,
    mutate,
  };
};
export const fetchSingleM2MPost = (id) => {
  const { data, error, mutate } = useSWR(
    { url: `${SINGLE_M2M_POST}/${id}`, withCredentials: true },
    fetcher
  );
  return {
    m2mPost: data,
    m2mPostLoading: !error && !data,
    m2mPostError: error,
    mutate,
  };
};

// Auth
export const checkSession = () => {
  const { data, error, mutate } = useSWR(USER_PROFILE, sessionFetcher);
  return {
    session: data,
    sessionLoading: !error && !data,
    sessionError: error,
    mutate,
  };
};
export const userRegister = async (values) => {
  const result = await mutationRequest(USER_REGISTER, "post", values, false);
  return result;
};
export const userVerifyEmail = async (values) => {
  const result = await mutationRequest(USER_VERIFY_EMAIL, "post", values, true);
  return result;
};
export const userResendVerifyEmailOTP = async (values) => {
  const result = await mutationRequest(
    USER_RESEND_VERIFY_EMAIL_OTP,
    "post",
    values,
    true
  );
  return result;
};

export const userLogin = async (values) => {
  const result = await mutationRequest(USER_LOGIN, "post", values, false);
  return result;
};
export const userVerifyLogin = async (values) => {
  const result = await mutationRequest(USER_VERIFY_LOGIN, "post", values, true);
  return result;
};
export const userResendVerifyLoginOTP = async (values) => {
  const result = await mutationRequest(
    USER_RESEND_VERIFY_LOGIN_OTP,
    "post",
    values,
    true
  );
  return result;
};
export const userForgotPassword = async (values) => {
  const result = await mutationRequest(
    USER_FORGOT_PASSWORD,
    "post",
    values,
    false
  );
  return result;
};
export const userResetPassword = async (id, token, values) => {
  const result = await mutationRequest(
    `${USER_RESET_PASSWORD}?id=${id}&token=${token}`,
    "post",
    values,
    false
  );
  return result;
};

// Profile
export const userProfile = () => {
  const { data, error, mutate } = useSWR(USER_PROFILE, sessionFetcher);
  return {
    user: data,
    userLoading: !error && !data,
    userError: error,
    mutate,
  };
};
export const userProfileForTrade = () => {
  const { data, error, mutate } = useSWR(
    { url: USER_PROFILE, withCredentials: true },
    sessionFetcher
  );
  return {
    userForTrade: data,
    userForTradeLoading: !error && !data,
    userForTradeError: error,
    mutate,
  };
};
// M2M
export const postM2MTrade = async (values) => {
  const result = await mutationRequest(POST_M2M_TRADE, "post", values, false);
  return result;
};
export const userM2MPosts = () => {
  const { data, error, mutate } = useSWR(
    { url: USER_M2M_POSTS, withCredentials: true },
    fetcher
  );
  return {
    m2mPosts: data,
    m2mPostsLoading: !error && !data,
    m2mPostsError: error,
    mutate,
  };
};
export const createM2MOrder = async (values) => {
  const result = await mutationRequest(CREATE_M2M_ORDER, "post", values, false);
  return result;
};
export const userM2MOrders = () => {
  const { data, error, mutate } = useSWR(
    { url: USER_M2M_ORDERS, withCredentials: true },
    fetcher
  );
  return {
    m2mOrders: data,
    m2mOrdersLoading: !error && !data,
    m2mOrdersError: error,
    mutate,
  };
};
export const fetchSingleM2MOrder = (order_no) => {
  const { data, error, mutate } = useSWR(
    { url: `${SINGLE_M2M_ORDER}/${order_no}`, withCredentials: true },
    fetcher
  );
  return {
    order: data,
    orderLoading: !error && !data,
    orderError: error,
    mutate,
  };
};
export const cancelM2MOrder = async (order_no, trade_id) => {
  const result = await mutationRequest(
    `${CANCEL_M2M_ORDER}?order_no=${order_no}&trade_id=${trade_id}`,
    "put",
    null,
    true
  );
  return result;
};
//
// Wallet
export const fetchUserTokenBalances = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_TOKEN_BALANCES, withCredentials: true },
    fetcher
  );
  return {
    tokenBalances: data,
    tokenBalancesLoading: !error && !data,
    tokenBalancesError: error,
    mutate,
  };
};
export const fetchUserTokenNetworks = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_TOKEN_NETWORKS, withCredentials: true },
    fetcher
  );
  return {
    networks: data,
    networksLoading: !error && !data,
    networksError: error,
    mutate,
  };
};
export const fetchUserCurrencyBalances = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_CURRENCY_BALANCES, withCredentials: true },
    fetcher
  );
  return {
    currencyBalances: data,
    currencyBalancesLoading: !error && !data,
    currencyBalancesError: error,
    mutate,
  };
};
export const fetchUserUnaddedWalletTokens = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_USER_UNADDED_TOKENS, withCredentials: true },
    fetcher
  );
  return {
    unadded_tokens: data,
    unadded_tokensLoading: !error && !data,
    unadded_tokensError: error,
    mutate,
  };
};
export const fetchdWalletTokens = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_USER_UNADDED_TOKENS, withCredentials: true },
    fetcher
  );
  return {
    wallet_tokens: data,
    wallet_tokensLoading: !error && !data,
    wallet_tokensError: error,
    mutate,
  };
};
export const addTokenToWallet = async (id) => {
  const result = await mutationRequest(
    `${ADD_TOKEN_TO_WALLET}/${id}`,
    "post",
    null,
    true
  );
  return result;
};
export const removeTokenFromWallet = async (id) => {
  const result = await mutationRequest(
    `${REMOVE_TOKEN_FROM_WALLET}/${id}`,
    "delete",
    true
  );
  return result;
};

//
// Deposit/Withdraw/Transfer
export const verifyUsername = async (values) => {
  const result = await mutationRequest(VERIFY_USERNAME, "post", values, true);
  return result;
};
export const transferFiatAsset = async (values) => {
  const result = await mutationRequest(TRANSFER_FIAT, "post", values, true);
  return result;
};
export const transferCryptoAsset = async (values) => {
  const result = await mutationRequest(TRANSFER_CRYPTO, "post", values, true);
  return result;
};
export const withdrawFiatAsset = async (values) => {
  const result = await mutationRequest(WITHDRAW_FIAT, "post", values, true);
  return result;
};
export const DepositFiatAsset = async (values) => {
  const result = await mutationRequest(DEPOSIT_FIAT, "post", values, true);
  return result;
};
export const withdrawCryptoAsset = async (values) => {
  const result = await mutationRequest(WITHDRAW_CRYPTO, "post", values, true);
  return result;
};
export const depositCryptoAsset = async (values) => {
  const result = await mutationRequest(DEPOSIT_CRYPTO, "post", values, true);
  return result;
};
//
export const fetchUserTransactions = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_USER_TRANSACTIONS, withCredentials: true },
    fetcher
  );
  return {
    transactions: data,
    transactionsLoading: !error && !data,
    transactionsError: error,
    mutate,
  };
};
export const fetchUserTransactionDetails = (t_id) => {
  const { data, error, mutate } = useSWR(
    { url: `${FETCH_TRANSACTION_DETAILS}/${t_id}`, withCredentials: true },
    fetcher
  );
  return {
    transaction: data,
    transactionLoading: !error && !data,
    transactionError: error,
    mutate,
  };
};

// Account & Settings
export const userSettings = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_USER_SETTINGS, withCredentials: true },
    fetcher
  );
  return {
    settings: data,
    settingsLoading: !error && !data,
    settingsError: error,
    mutate,
  };
};
export const updateUserSettings = async (values) => {
  const result = await mutationRequest(
    UPDATE_USER_SETTINGS,
    "put",
    values,
    true
  );
  return result;
};
// BAnk details
export const fetchUserBankAccounts = () => {
  const { data, error, mutate } = useSWR(
    { url: FETCH_BANK_ACCOUNTS, withCredentials: true },
    fetcher
  );
  return {
    bankAccounts: data,
    bankAccountsLoading: !error && !data,
    bankAccountsError: error,
    mutate,
  };
};
export const addUserBankAccounts = async (values) => {
  const result = await mutationRequest(
    ADD_BANK_ACCOUNTS,
    "post",
    values,
    false
  );
  return result;
};
export const updateUserBankAccounts = async (values, id) => {
  const result = await mutationRequest(
    `${UPDATE_BANK_ACCOUNTS}/${id}`,
    "put",
    values,
    true
  );
  return result;
};
export const deleteUserBankAccount = async (id) => {
  const result = await mutationRequest(
    `${DELETE_BANK_ACCOUNT}/${id}`,
    "delete",
    true
  );
  return result;
};
//
export const userLogout = async () => {
  const result = await mutationRequest(USER_LOGOUT, "post", null, true);
  console.log("result", result);
  return result;
};

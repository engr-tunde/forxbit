const USER_REGISTER = "/user-auth/signup";
const USER_VERIFY_EMAIL = "/user-auth/verify-email";
const USER_RESEND_VERIFY_EMAIL_OTP = "/user-auth/resend-verification-otp";
const USER_FORGOT_PASSWORD = "/user-auth/forgot-password";
const USER_RESET_PASSWORD = "/user-auth/reset-password";

const USER_LOGIN = "/user-auth/login";
const USER_VERIFY_LOGIN = "/user-auth/verify-login";
const USER_RESEND_VERIFY_LOGIN_OTP = "/user-auth/resend-login-otp";

//
//
// Payment Methods
const FETCH_PAYMENT_METHODS =
  "/website/payment-methods/fetch-all-payment-methods";

// Website
// Tokens
const P2P_TOKENS = "/website/tokens/fetch-p2p-tokens";
const SWAP_TOKENS = "/website/tokens/fetch-swap-tokens";
const BUY_SELL_TOKENS = "/website/tokens/fetch-buy-sell-tokens";
// Currencies
const CURRENCIES = "/website/currencies/fetch-currencies";
const SINGLE_CURRENCY = "/website/currencies/fetch-single-currency";
// M2M
const ALL_M2M_POSTS = "/website/m2m/fetch-all-m2m-posts";
const OPEN_M2M_POSTS = "/website/m2m/fetch-open-m2m-posts";
const CLOSE_M2M_POSTS = "/website/m2m/fetch-close-m2m-posts";
const SINGLE_M2M_POST = "/website/m2m/fetch-single-m2m-post";

// USER APP
const USER_LOGOUT = "/user-auth/logout";
const USER_PROFILE = "/user-app/user-profile/user";
// M2M
const POST_M2M_TRADE = "/user-app/m2m-trading/post-trade";
const USER_M2M_POSTS = "/user-app/m2m-trading/m2m-posts";
const CREATE_M2M_ORDER = "/user-app/m2m-trading/create-order";
const USER_M2M_ORDERS = "/user-app/m2m-trading/fetch-m2m-orders";
const SINGLE_M2M_ORDER = "/user-app/m2m-trading/single-m2m-order";
const CANCEL_M2M_ORDER = "/user-app/m2m-trading/cancel-m2m-order";
// Wallet
const FETCH_TOKEN_BALANCES = "/user-app/wallet/token-balances";
const FETCH_TOKEN_NETWORKS = "/user-app/wallet/token-networks";
const FETCH_CURRENCY_BALANCES = "/user-app/wallet/currency-balances";
const FETCH_WALLET_TOKENS = "/user-app/wallet/wallet-tokens";
const FETCH_USER_UNADDED_TOKENS = "/user-app/wallet/user-unadded-tokens";
const ADD_TOKEN_TO_WALLET = "/user-app/wallet/add-token-to-wallet";
const REMOVE_TOKEN_FROM_WALLET = "/user-app/wallet/remove-token-from-wallet";
// Deposit/Withdraw/Transfer
const VERIFY_USERNAME = "/user-app/depo-withdraw-transfer/verify-username";
const TRANSFER_FIAT = "/user-app/depo-withdraw-transfer/transfer-fiat";
const TRANSFER_CRYPTO = "/user-app/depo-withdraw-transfer/transfer-crypto";
const WITHDRAW_FIAT = "/user-app/depo-withdraw-transfer/withdraw-fiat";
const DEPOSIT_FIAT = "/user-app/depo-withdraw-transfer/deposit-fiat";
const WITHDRAW_CRYPTO = "/user-app/depo-withdraw-transfer/withdraw-crypto";
const DEPOSIT_CRYPTO = "/user-app/depo-withdraw-transfer/deposit-crypto";
const FETCH_USER_TRANSACTIONS =
  "/user-app/depo-withdraw-transfer/user-transactions";
const FETCH_TRANSACTION_DETAILS =
  "/user-app/depo-withdraw-transfer/transaction-details";
// Settings & Account
const FETCH_USER_SETTINGS = "/user-app/user-profile/user-settings";
const UPDATE_USER_SETTINGS = "/user-app/user-profile/update-settings";
// User Payment methods
const ADD_BANK_ACCOUNTS = "/user-app/user-profile/add-bank-details";
const UPDATE_BANK_ACCOUNTS = "/user-app/user-profile/update-bank-details";
const DELETE_BANK_ACCOUNT = "/user-app/user-profile/delete-bank-details";
const FETCH_BANK_ACCOUNTS = "/user-app/user-profile/bank-details";

// HEADERS
const CHANGE_NOW_HEADERS = {
  "x-changenow-api-key": import.meta.env.VITE_CHANGE_N_IPA_YEK,
  Accept: "*/*",
  "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json",
};
const CHANGE_NOW_HEADERS_AUTH = {
  Accept: "*/*",
  // "Access-Control-Allow-Headers": "*",
  "Content-Type": "application/json",
};
const CG_HEADERS = {
  "x-cg-pro-api-key": import.meta.env.VITE_CC_IPA_YEK,
  Accept: "application/json",
};

//
const TRADE_MIN_PERCENT = 70;
const TRADE_MAX_PERCENT = 130;

export {
  USER_REGISTER,
  USER_VERIFY_EMAIL,
  USER_RESEND_VERIFY_EMAIL_OTP,
  USER_FORGOT_PASSWORD,
  USER_RESET_PASSWORD,
  USER_LOGIN,
  USER_VERIFY_LOGIN,
  USER_RESEND_VERIFY_LOGIN_OTP,
  //
  USER_LOGOUT,
  USER_PROFILE,
  //
  POST_M2M_TRADE,
  USER_M2M_POSTS,
  CREATE_M2M_ORDER,
  USER_M2M_ORDERS,
  SINGLE_M2M_ORDER,
  CANCEL_M2M_ORDER,
  //
  FETCH_TOKEN_BALANCES,
  FETCH_TOKEN_NETWORKS,
  FETCH_CURRENCY_BALANCES,
  FETCH_WALLET_TOKENS,
  FETCH_USER_UNADDED_TOKENS,
  ADD_TOKEN_TO_WALLET,
  REMOVE_TOKEN_FROM_WALLET,
  //
  VERIFY_USERNAME,
  TRANSFER_FIAT,
  TRANSFER_CRYPTO,
  WITHDRAW_FIAT,
  DEPOSIT_FIAT,
  WITHDRAW_CRYPTO,
  DEPOSIT_CRYPTO,
  FETCH_USER_TRANSACTIONS,
  FETCH_TRANSACTION_DETAILS,
  //
  FETCH_USER_SETTINGS,
  UPDATE_USER_SETTINGS,
  //
  ADD_BANK_ACCOUNTS,
  UPDATE_BANK_ACCOUNTS,
  DELETE_BANK_ACCOUNT,
  FETCH_BANK_ACCOUNTS,
  //
  P2P_TOKENS,
  SWAP_TOKENS,
  BUY_SELL_TOKENS,
  //
  CURRENCIES,
  SINGLE_CURRENCY,
  //
  FETCH_PAYMENT_METHODS,
  //
  ALL_M2M_POSTS,
  OPEN_M2M_POSTS,
  CLOSE_M2M_POSTS,
  SINGLE_M2M_POST,
  //

  //

  //
  CHANGE_NOW_HEADERS,
  CHANGE_NOW_HEADERS_AUTH,
  CG_HEADERS,
  //
  TRADE_MIN_PERCENT,
  TRADE_MAX_PERCENT,
};

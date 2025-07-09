import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/index.jsx";
import NotFound from "./pages/404";
import LoginPage from "./pages/auth/login/index.jsx";
import ForgotPasswordPage from "./pages/auth/forgot-password/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyEmailPage from "./pages/auth/verify-email/index.jsx";
import ResetPasswordPage from "./pages/auth/reset-password/index.jsx";
import RegisterPage from "./pages/auth/register/index.jsx";
import AboutPage from "./pages/about/index.jsx";
import MarketsPage from "./pages/markets/index.jsx";
import ContactPage from "./pages/contact/index.jsx";
import CareersPage from "./pages/careers/index.jsx";
import IndustryUpdatesPage from "./pages/blog/industry-updates.jsx";
import ProductUpdatesPage from "./pages/blog/product-updates.jsx";
import BlogSinglePage from "./pages/blog/blog-single-page.jsx";
import M2MPage from "./pages/m2m/index.jsx";
import HomePage from "./pages/home/index";
import FiatOrderDetailsPage from "./pages/m2m/fiat-order-details/index.jsx";

import M2MProvider from "./context/m2mContext.jsx";

import WalletPage from "./pages/dashboard/wallet/index.jsx";
import CreateTradePage from "./pages/dashboard/m2m/index.jsx";
import M2MOrdersPage from "./pages/dashboard/orders/m2m-orders.jsx";
import TransactionHistoryPage from "./pages/dashboard/orders/transaction-history.jsx";
import BuySellOrdersPage from "./pages/dashboard/orders/buy-sell-orders.jsx";
import FiatOrdersPage from "./pages/dashboard/orders/fiat-orders.jsx";
import SwapOrdersPage from "./pages/dashboard/orders/swap-orders.jsx";
import MyM2MTradesPage from "./pages/dashboard/m2m/my-trades.jsx";
import WebsiteLayout from "./layouts/WebsiteLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

import EditProfilePage from "./pages/dashboard/account/manage-profile.jsx";
import ManagePasswordPage from "./pages/dashboard/account/manage-password.jsx";
import PaymentMethodPage from "./pages/dashboard/account/payment-method.jsx";
import SettingsPage from "./pages/dashboard/account/settings.jsx";
import BuySellPage from "./pages/buy-sell/index.jsx";
import BuySellProvider from "./context/buySellContext.jsx";
import BuySellLayout from "./layouts/BuySellLayout.jsx";
import SwapPage from "./pages/swap/index.jsx";
import SwapProvider from "./context/swapContext.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import VerifyLoginPage from "./pages/auth/verify-login/index.jsx";
import M2MOrderDetailsPage from "./pages/dashboard/orders/m2m-order-details.jsx";
import SwapStatusPage from "./pages/swap/swap-status.jsx";
import FiatDepositWithdrawContext from "./context/fiatDepositWithdrawContext.jsx";
import DepositFiatPage from "./pages/dashboard/deposit-withdraw/deposit-fiat.jsx";
import WithdrawFiatPage from "./pages/dashboard/deposit-withdraw/withdraw-fiat.jsx";
import TransferFiatPage from "./pages/dashboard/deposit-withdraw/transfer-fiat.jsx";
import TransactionDetailsPage from "./pages/dashboard/orders/transaction-details.jsx";
import TransferCryptoPage from "./pages/dashboard/deposit-withdraw/transfer-crypto.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <M2MProvider>
          <BuySellProvider>
            <SwapProvider>
              <FiatDepositWithdrawContext>
                {/* <NavBar /> */}
                <div className="">
                  <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <Routes>
                    <Route element={<WebsiteLayout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route
                        path="/industry-updates"
                        element={<IndustryUpdatesPage />}
                      />
                      <Route
                        path="/product-updates"
                        element={<ProductUpdatesPage />}
                      />
                      <Route
                        path="/posts/:permalink"
                        element={<BlogSinglePage />}
                      />

                      <Route path="/m2m" element={<M2MPage />} />

                      <Route
                        path="/m2m/fiat-order-details"
                        element={<FiatOrderDetailsPage />}
                      />
                      <Route path="/markets" element={<MarketsPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                    </Route>

                    <Route element={<BuySellLayout />}>
                      <Route path="/buy-sell" element={<BuySellPage />} />
                      <Route path="/swap" element={<SwapPage />} />
                      <Route
                        path="/swap-status/:id"
                        element={<SwapStatusPage />}
                      />
                    </Route>

                    <Route element={<DashboardLayout />}>
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route
                        path="/dashboard/wallet"
                        element={<WalletPage />}
                      />

                      {/* Fiat */}
                      <Route
                        path="/dashboard/deposit-fiat"
                        element={<DepositFiatPage />}
                      />
                      <Route
                        path="/dashboard/withdraw-fiat"
                        element={<WithdrawFiatPage />}
                      />
                      <Route
                        path="/dashboard/transfer-fiat"
                        element={<TransferFiatPage />}
                      />
                      <Route
                        path="/dashboard/transfer-crypto"
                        element={<TransferCryptoPage />}
                      />
                      {/* Crypto */}

                      {/* M2M */}
                      <Route
                        path="/dashboard/m2m/create-trade"
                        element={<CreateTradePage />}
                      />
                      <Route
                        path="/dashboard/m2m/my-trades"
                        element={<MyM2MTradesPage />}
                      />

                      {/* Orders */}
                      <Route
                        path="/dashboard/orders/m2m"
                        element={<M2MOrdersPage />}
                      />
                      <Route
                        path="/dashboard/orders/m2m/order-details/:order_no"
                        element={<M2MOrderDetailsPage />}
                      />
                      <Route
                        path="/dashboard/orders/buy-sell"
                        element={<BuySellOrdersPage />}
                      />
                      <Route
                        path="/dashboard/orders/fiat"
                        element={<FiatOrdersPage />}
                      />
                      <Route
                        path="/dashboard/orders/swap"
                        element={<SwapOrdersPage />}
                      />
                      <Route
                        path="/dashboard/orders/transaction-history"
                        element={<TransactionHistoryPage />}
                      />
                      <Route
                        path="/dashboard/orders/transaction-history/:t_id"
                        element={<TransactionDetailsPage />}
                      />

                      {/* Account */}
                      <Route
                        path="dashboard/account/manage-profile"
                        element={<EditProfilePage />}
                      />
                      <Route
                        path="dashboard/account/manage-password"
                        element={<ManagePasswordPage />}
                      />
                      <Route
                        path="dashboard/account/payment-method"
                        element={<PaymentMethodPage />}
                      />
                      <Route
                        path="dashboard/account/settings"
                        element={<SettingsPage />}
                      />
                    </Route>

                    <Route element={<AuthLayout />}>
                      <Route path="/register" element={<RegisterPage />} />
                      <Route
                        path="/verify-account"
                        element={<VerifyEmailPage />}
                      />
                      <Route path="/login" element={<LoginPage />} />
                      <Route
                        path="/verify-login"
                        element={<VerifyLoginPage />}
                      />
                      <Route
                        path="/forgot-password"
                        element={<ForgotPasswordPage />}
                      />
                      <Route
                        path="/reset-password"
                        element={<ResetPasswordPage />}
                      />
                    </Route>

                    <Route path="/*" element={<NotFound />} />
                  </Routes>
                </div>
                {/* <Footer /> */}
              </FiatDepositWithdrawContext>
            </SwapProvider>
          </BuySellProvider>
        </M2MProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

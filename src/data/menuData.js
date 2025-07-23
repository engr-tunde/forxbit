export const m2mMenu = [
  {
    title: "Create Trade",
    url: `/dashboard/${import.meta.env.VITE_P2P_NAME.toLowerCase()}/create-trade`,
  },
  {
    title: "My Trades",
    url: `/dashboard/${import.meta.env.VITE_P2P_NAME.toLowerCase()}/my-trades`,
  },
  {
    title: "Orders",
    url: `/dashboard/orders/${import.meta.env.VITE_P2P_NAME.toLowerCase()}`,
  },
  {
    title: "Payment Method",
    url: "/dashboard/account/payment-method",
  },
];

export const dashboardSidebarMenu = [
  {
    title: "Dashboard",
    url: "/dashboard",
    inactiveImg: "Dashboard-03.svg",
    activeImg: "Dashboard-02.svg",
  },
  {
    title: "Wallet",
    url: "/dashboard/wallet",
    inactiveImg: "Wallet-03.svg",
    activeImg: "Wallet-02.svg",
  },
  {
    title: `${import.meta.env.VITE_P2P_NAME}`,
    inactiveImg: "Trade-M2M.svg",
    activeImg: "Trade-M2M-2.svg",
    children: [
      {
        title: "Create Trade",
        url: `/dashboard/${import.meta.env.VITE_P2P_NAME.toLowerCase()}/create-trade`,
        inactiveImg: "m2m/Create-trade-02.svg",
        activeImg: "m2m/Create-trade-03.svg",
      },
      {
        title: "My Trades",
        url: `/dashboard/${import.meta.env.VITE_P2P_NAME.toLowerCase()}/my-trades`,
        inactiveImg: "m2m/My-trade-02.svg",
        activeImg: "m2m/My-trade-03.svg",
      },
    ],
  },
  {
    title: "Orders",
    inactiveImg: "order-03.svg",
    activeImg: "order-02.svg",
    children: [
      {
        title: `${import.meta.env.VITE_P2P_NAME} Orders`,
        subtitle: `Explore your ${import.meta.env.VITE_P2P_NAME} orders`,
        url: `/dashboard/orders/${import.meta.env.VITE_P2P_NAME.toLowerCase()}`,
        inactiveImg: "orders-menu-icons/Trade-M2M-2.svg",
        activeImg: "orders-menu-icons/Trade-M2M.svg",
      },
      {
        title: "Buy/Sell Orders",
        subtitle: "Fetch your Buy/Sell orders history",
        url: "/dashboard/orders/buy-sell",
        inactiveImg: "orders-menu-icons/Buy-n-Sell-02.svg",
        activeImg: "orders-menu-icons/Buy-n-Sell-03.svg",
      },
      // {
      //   title: "Fiat Orders",
      //   subtitle: "Fetch your fiat transactions history",
      //   url: "/dashboard/orders/fiat",
      //   inactiveImg: "Buy.svg",
      //   activeImg: "Buy.svg",
      // },
      {
        title: "Swap Orders",
        subtitle: "Fetch your swap orders history",
        url: "/dashboard/orders/swap",
        inactiveImg: "orders-menu-icons/Asset-Swap-01.svg",
        activeImg: "orders-menu-icons/Asset-Swap-03.svg",
      },
      {
        title: "Transaction History",
        subtitle: "Your deposit/withdrawals history",
        url: "/dashboard/transaction-history",
        inactiveImg: "orders-menu-icons/Transaction-History-02.svg",
        activeImg: "orders-menu-icons/Transaction-History-03.svg",
      },
    ],
  },
  {
    title: "Account",
    inactiveImg: "account-03.svg",
    activeImg: "account-02.svg",
    children: [
      {
        title: "Manage Profile",
        url: "/dashboard/account/manage-profile",
        inactiveImg: "account/Manage-Profile-02.svg",
        activeImg: "account/Manage-Profile-03.svg",
      },
      {
        title: "Manage Password",
        url: "/dashboard/account/manage-password",
        inactiveImg: "account/Manage-Password-02.svg",
        activeImg: "account/Manage-Password-03.svg",
      },
      {
        title: "Payment Method",
        url: "/dashboard/account/payment-method",
        inactiveImg: "account/Payment-method-02.svg",
        activeImg: "account/Payment-method-03.svg",
      },
      // {
      //   title: "Identification",
      //   url: "/dashboard/account/identification",
      // },
      {
        title: "Settings",
        url: "/dashboard/account/settings",
        inactiveImg: "account/Settings-02.svg",
        activeImg: "account/Settings-03.svg",
      },
    ],
  },
];

export const relatedLinks = [
  {
    title: "Manage Profile",
    url: "/dashboard/account/manage-profile",
  },
  {
    title: "Manage Password",
    url: "/dashboard/account/manage-password",
  },
  {
    title: "Payment Method",
    url: "/dashboard/account/payment-method",
  },
  // {
  //   title: "Identification",
  //   url: "/dashboard/account/identification",
  // },
  {
    title: "Settings",
    url: "/dashboard/account/settings",
  },
];

export const dashActionsMenu = [
  {
    title: "Buy/Sell",
    url: "/buy-sell",
    img: "Buy-n-Sell-02.svg",
    hoverImg: "Buy-n-Sell-03.svg",
  },
  {
    title: `Trade ${import.meta.env.VITE_P2P_NAME}`,
    url: "/m2m",
    img: "Trade-M2M-2.svg",
    hoverImg: "Trade-M2M.svg",
  },
  {
    title: `Swap Assets`,
    url: "/swap",
    img: "Asset-Swap-01.svg",
    hoverImg: "Asset-Swap-03.svg",
  },
  {
    title: `Convert`,
    url: "/dashboard/convert",
    img: "Convert-02.svg",
    hoverImg: "Convert-03.svg",
  },
];

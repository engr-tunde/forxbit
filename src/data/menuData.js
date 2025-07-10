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
  },
  {
    title: "Wallet",
    url: "/dashboard/wallet",
  },
  {
    title: `${import.meta.env.VITE_P2P_NAME}`,
    children: [
      {
        title: "Create Trade",
        url: `/dashboard/${import.meta.env.VITE_P2P_NAME.toLowerCase()}/create-trade`,
      },
      {
        title: "My Trades",
        url: `/dashboard/${import.meta.env.VITE_P2P_NAME.toLowerCase()}/my-trades`,
      },
      //   {
      //     title: "Orders",
      //     url: `/dashboard/orders/${import.meta.env.VITE_P2P_NAME.toLowerCase()}`,
      //   },
    ],
  },
  {
    title: "Orders",
    children: [
      {
        title: `${import.meta.env.VITE_P2P_NAME} Orders`,
        subtitle: `Explore your ${import.meta.env.VITE_P2P_NAME} orders`,
        url: `/dashboard/orders/${import.meta.env.VITE_P2P_NAME.toLowerCase()}`,
      },
      {
        title: "Buy/Sell Orders",
        subtitle: "Fetch your Buy/Sell orders history",
        url: "/dashboard/orders/buy-sell",
      },
      {
        title: "Fiat Orders",
        subtitle: "Fetch your fiat transactions history",
        url: "/dashboard/orders/fiat",
      },
      {
        title: "Swap Orders",
        subtitle: "Fetch your swap orders history",
        url: "/dashboard/orders/swap",
      },
      {
        title: "Transaction History",
        subtitle: "Your deposit/withdrawals history",
        url: "/dashboard/orders/transaction-history",
      },
    ],
  },
  {
    title: "Account",
    children: [
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
  },
  {
    title: `Trade ${import.meta.env.VITE_P2P_NAME}`,
    url: "/m2m",
  },
  {
    title: `Swap Assets`,
    url: "/swap",
  },
  {
    title: `Convert`,
    url: "/dashboard/convert",
  },
];

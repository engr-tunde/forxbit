export const companyMenu = [
  {
    title: "About Us",
    url: "about",
  },
  {
    title: "Our Team",
    url: "/about#team",
  },
  {
    title: "Careers",
    url: "/careers",
  },
];

export const exploreMenu = [
  {
    title: "Industry Updates",
    url: "/industry-updates",
  },
  {
    title: "Product Updates",
    url: "/product-updates",
  },
  {
    title: "FAQs",
    url: "/faqs",
  },
  {
    title: "Whitepaper",
    url: "/whitepaper",
  },
];

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
    title: `${import.meta.env.VITE_P2P_NAME} Trading`,
    children: [
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
    ],
  },
  {
    title: "Orders",
    children: [
      {
        title: `${import.meta.env.VITE_P2P_NAME} Orders`,
        url: `/dashboard/orders/${import.meta.env.VITE_P2P_NAME.toLowerCase()}`,
      },
      {
        title: "Buy/Sell Orders",
        url: "/dashboard/orders/buy-sell",
      },
      {
        title: "Fiat Orders",
        url: "/dashboard/orders/fiat",
      },
      {
        title: "Swap Orders",
        url: "/dashboard/orders/swap",
      },
      {
        title: "Transaction History",
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
      {
        title: "Identification",
        url: "/dashboard/account/identification",
      },
    ],
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
  },
];

export const partnerLogos = [
  "thresh0ld.jpeg",
  "bybit.png",
  "coinbase.webp",
  "kucoin.png",
  "coingate.webp",
  "okyx.png",
  "htx.png",
  "moonpay.svg",
  // 'circle.svg',
  "falconx.svg",
  "anchor.png",
  "trusttoken.svg",
  "localbitcoins.webp",
  "genesis.webp",
  "bitflyer.webp",
  "stellar.webp",
  "paysafe.webp",
  "mourocapital.webp",
  "bitgo.webp",
  // 'wirex.webp',
];

export const dashboardServices = [
  {
    title: "Wallet Attack",
    description: "Retrieve your wallet from attackers",
  },
  {
    title: "Assets Scam",
    description: "Retrieve your assets from scammers",
  },
  {
    title: "Wrong Address",
    description: "Get back assets from mistakes",
  },
  {
    title: "Airdrop Scam",
    description: "Save your wallet from airdrop scam",
  },
  {
    title: "Staking Scam",
    description: "Get your assets from staking cams",
  },
  {
    title: "Investment Scam",
    description: "Retrieve your assets from investments",
  },
];

export const popularCoinsData = [
  {
    name: "Bitcoin",
    ticker: "BTC",
    logo: "btc.png",
    price: 96700,
    priceChange: "+0.55%",
  },
  {
    name: "Ethereum",
    ticker: "ETH",
    logo: "eth.png",
    price: 3405.99,
    priceChange: "+0.76%",
  },
  {
    name: "BNB",
    ticker: "BNB",
    logo: "bnb.png",
    price: 704.05,
    priceChange: "+0.63%",
  },
  {
    name: "Ripple",
    ticker: "XRP",
    logo: "xrp.png",
    price: 2.2,
    priceChange: "-0.34%",
  },
];
export const newCoinsData = [
  {
    name: "Tether",
    ticker: "USDT",
    logo: "usdt.png",
    price: 1,
    priceChange: "+1%",
  },
  {
    name: "Tron",
    ticker: "TRX",
    logo: "trx.png",
    price: 0.2645,
    priceChange: "+0.55%",
  },
  {
    name: "Toncoin",
    ticker: "TON",
    logo: "bnb.png",
    price: 5.83,
    priceChange: "-0.19%",
  },
  {
    name: "Cardano",
    ticker: "ADA",
    logo: "ada.png",
    price: 0.9026,
    priceChange: "+0.08%",
  },
];

export const notificationsData = [
  "Discontinuation of WBTC as Collateral and Lending Asset",
  "USDT Perpetual: Risk Limit Adjustment for DEXEUSDT",
  "Security Alert: Beware of WhatsApp Phishing Groups",
];

export const mediaPosts = [
  {
    title: "Meet Titus Exchange - The New Whale",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed labore aliquam non quis dolor deserunt ducimus, aperiam facere vel maxime quasi architecto qui, quam eligendi harum reprehenderit molestias laudantium?",
    image: "news2.png",
  },
  {
    title: "Titus Exchange Emerges As the Number 1 Exchange",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed labore aliquam non quis dolor deserunt ducimus, aperiam facere vel maxime quasi architecto qui, quam eligendi harum reprehenderit molestias laudantium?",
    image: "news1.png",
  },
  {
    title: "Titus Exchange Is Changing Trading Experience",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed labore aliquam non quis dolor deserunt ducimus, aperiam facere vel maxime quasi architecto qui, quam eligendi harum reprehenderit molestias laudantium?",
    image: "news3.png",
  },
];
export const blogPosts = [
  {
    title:
      "NFT sales spike to $155m, Pudgy Penguins push back with an 82% surge",
    category: "NFT",
    content:
      "<p>The NFT market has turned upward despite crypto price weakness, with Bitcoin falling 3% to $94,000 and Ethereum dropping sharply by 9% to $3,200.</p> <p>The NFT market has turned upward despite crypto price weakness, with Bitcoin falling 3% to $94,000 and Ethereum dropping sharply by 9% to $3,200.</p>",
    image: "news-4.webp",
    date: "2025-01-07T16:09:09.941+00:00",
    permalink:
      "nft-sales-spike-to-155m-pudgy-penguins-push-back-with-an-82-surge",
  },
  {
    title: "CBDCs must close the gap between old and new financial systems",
    category: "Finance",
    content:
      "<p>The concept of a central bank digital currency predates crypto's most recent down market. However, it has steadily gained momentum as governments recognize the need to modernize payment systems while addressing various economic and technological challenges.</p> <p>The concept of a central bank digital currency predates crypto's most recent down market. However, it has steadily gained momentum as governments recognize the need to modernize payment systems while addressing various economic and technological challenges.</p> <h2>But it doesn't end there</h2> <p>The concept of a central bank digital currency predates crypto's most recent down market. However, it has steadily gained momentum as governments recognize the need to modernize payment systems while addressing various economic and technological challenges.</p>",
    image: "news-6.jpg",
    date: "2025-01-06T16:09:09.941+00:00",
    permalink: "cbcds-must-close-the-gap-between-old-and-new-financial-systems",
  },
  {
    title:
      "XRP vs. Ethereum: Investors bet on new altcoin to provide better gains",
    category: "Altcoin",
    content:
      "<p>As the cryptocurrency market continues to evolve, XRP and Ethereum (ETH) remain two of the most closely watched assets. XRP has gained popularity due to its use case in cross-border payments, while Ethereum continues to be a leader in the smart contract and DeFi spaces.</p> <p>As the cryptocurrency market continues to evolve, XRP and Ethereum (ETH) remain two of the most closely watched assets. XRP has gained popularity due to its use case in cross-border payments, while Ethereum continues to be a leader in the smart contract and DeFi spaces.</p>",
    image: "news-5.webp",
    date: "2025-01-05T16:09:09.941+00:00",
    permalink: "xrp-vs-ethereum-investors-bet-on-new-altcoin",
  },
  {
    title: "Babylon Labs joins forces with Fiamma to unlock Bitcoin DeFi",
    category: "Bitcoin",
    content:
      "<p>Babylon Labs and Fiamma, a Lightspeed Faction-backed platform focused on unlocking real-world assets on Bitcoin, are teaming up to advance a BTC-secured decentralized world.</p> <p>Babylon Labs and Fiamma, a Lightspeed Faction-backed platform focused on unlocking real-world assets on Bitcoin, are teaming up to advance a BTC-secured decentralized world.</p>",
    image: "news-7.png",
    date: "2025-01-08T16:09:09.941+00:00",
    permalink: "babylon-labs-joins-forces-with-fiamma",
  },
  {
    title: "How crypto plans to steal the spotlight at Trump's inauguration",
    category: "Finance",
    content:
      "<p>What do massive crypto donations to Trump's inauguration reveal about the industry's hopes for regulation, innovation, and survival in a changing political climate?</p> <p>What do massive crypto donations to Trump's inauguration reveal about the industry's hopes for regulation, innovation, and survival in a changing political climate?</p>",
    image: "news-8.jpg",
    date: "2025-01-08T16:09:09.941+00:00",
    permalink: "how-crypto-plans-to-steal-spotlight",
  },
  {
    title: "Genius Group buys $5m more in Bitcoin, totaling treasury to $35m",
    category: "Bitcoin",
    content:
      "<p>This purchase surpassed its milestone ahead of schedule in its ongoing effort to amass $120 million in Bitcoin holdings, according to a company release. The latest purchase comes just two months after the Singapore-based, AI-powered education company announced its “Bitcoin-first” strategy in early November.</p> <p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum</p>",
    image: "news-4.webp",
    date: "2025-01-08T16:09:09.941+00:00",
    permalink: "genius-group-buys-5m-btc",
  },
  {
    title: "Bitcoin reserve law pitched in New Hampshire",
    category: "Bitcoin",
    content:
      "<p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum </p> <p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum</p>",
    image: "news-5.webp",
    date: "2025-01-08T16:09:09.941+00:00",
    permalink: "bitcoin-reserves-law-pitched",
  },
  {
    title: "Bitcoin reserve law pitched in New Hampshire 2",
    category: "Bitcoin",
    content:
      "<p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum</p> <p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum</p>",
    image: "news-6.jpg",
    date: "2025-01-10T16:09:09.941+00:00",
    permalink: "bitcoin-reserves-law-pitched-2",
  },
  {
    title: "Bitcoin reserve law pitched in New Hampshire 3",
    category: "Bitcoin",
    content:
      "<p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum</p> <p>The Republican Representative Keith Ammon proposed legislation that would establish a strategic Bitcoin (BTC) reserve for the state, enabling the state's treasury to custody BTC alongside traditional assets like gold, silver, and platinum</p>",
    image: "news2.png",
    date: "2025-01-08T16:09:09.941+00:00",
    permalink: "bitcoin-reserves-law-pitched-3",
  },
];

// This app
export const m2mTradeAssets = [
  { ticker: "BTC", icon: "BTC.png", value: 80603.23 },
  { ticker: "ETH", icon: "ETH.png", value: 2027.02 },
  { ticker: "BNB", icon: "BNB.png", value: 553.19 },
  { ticker: "USDT", icon: "USDT.png", value: 1.0 },
  { ticker: "USDC", icon: "USDC.png", value: 1.0 },
  { ticker: "DOGE", icon: "DOGE.png", value: 0.17 },
  { ticker: "DAI", icon: "DAI.png", value: 0.9997 },
];
export const m2mTradeCurrencies = [
  { icon: "USD.png", ticker: "USD", symbol: "$", value: 1 },
  { icon: "CAD.png", ticker: "CAD", symbol: "$", value: 1.44 },
  { icon: "EUR.png", ticker: "EUR", symbol: "€", value: 0.92 },
  { icon: "GBP.png", ticker: "GBP", symbol: "£", value: 0.77 },
  { icon: "GHS.png", ticker: "GHS", symbol: "GH¢", value: 15.54 },
  { icon: "NGN.png", ticker: "NGN", symbol: "#", value: 1530.6 },
  { icon: "XOF.png", ticker: "XOF", symbol: "FCFA", value: 604.81 },
  { icon: "ZAR.png", ticker: "ZAR", symbol: "R", value: 18.26 },
];

export const paymentMethods = ["Bank Transfer", "Interbank"];

export const paymentLimitWindows = ["15 mins", "30 mins", "45 mins", "1 hr"];

export const tradeTermsTags = [
  {
    title: "Bank statement required",
    subtitle: "Bank statement will be required for additional verification",
  },
  {
    title: "Extra KYC required",
    subtitle: "Need to complete one time extra KYC verification",
  },
  {
    title: "No Additional Verification Needed",
    subtitle: "No additional verification requirements from the maker",
  },
  {
    title: "No Payment Receipt Needed",
    subtitle: "Receipt not required for this trade",
  },
  {
    title: "Payment Receipt Required",
    subtitle: "You must provide transaction receipt to complete the trade",
  },
  {
    title: "Photo ID Required",
    subtitle: "Valid government-issued photo ID required",
  },
];

export const sortTradeBy = [
  "Price",
  "Completed order number",
  "Completion rate",
  "Rating",
];

export const openAdsData = [
  {
    user: {
      username: "Teeking",
      orders: 100,
      completion_rate: 96.5,
      rating: 100,
    },
    order: {
      type: "Sell",
      token: "USDT",
      quantity: 150,
      available: 150,
      price: 0.99,
      min_limit: 10,
      max_limit: 148,
      completion_window: 15,
    },
    payment: ["Bank Transfer"],
    terms: "Prompt deal only",
  },
  {
    user: {
      username: "Ghost27",
      orders: 135,
      completion_rate: 94,
      rating: 97,
    },
    order: {
      type: "Sell",
      token: "BTC",
      quantity: 0.05,
      available: 0.05,
      available: 0.05,
      price: 103784.23,
      min_limit: 100,
      max_limit: 5000,
      completion_window: 15,
    },
    payment: ["Bank Transfer", "Interbank"],
    terms: "You should be ready to complete the trade asap",
  },
  {
    user: {
      username: "Tems50",
      orders: 57,
      completion_rate: 98,
      rating: 100,
    },
    order: {
      type: "Buy",
      token: "USDT",
      quantity: 500,
      available: 500,
      price: 1,
      min_limit: 5,
      max_limit: 150,
      completion_window: 15,
    },
    payment: ["Bank Transfer"],
    terms: "No time wasting",
  },
  {
    user: {
      username: "CaptainTom",
      orders: 1234,
      completion_rate: 98,
      rating: 99,
    },
    order: {
      type: "Sell",
      token: "ETH",
      quantity: 3.5,
      available: 3.5,
      price: 3201.12,
      min_limit: 15,
      max_limit: 150,
      completion_window: 15,
    },
    payment: ["Bank Transfer"],
    terms: "Deal with the fear of God",
  },
  {
    user: {
      username: "Mayweather",
      orders: 1234,
      completion_rate: 98,
      rating: 99,
    },
    order: {
      type: "Sell",
      token: "USDT",
      quantity: 5750,
      available: 5750,
      price: 1,
      min_limit: 10,
      max_limit: 2000,
      completion_window: 15,
    },
    payment: ["Bank Transfer"],
    terms: "Fast deal only",
  },
];

export const buySellFaq = [
  {
    title: "1. Place an Order",
    description:
      "Once you place a P2P order, the crypto asset will be escrowed by Binance P2P.",
    icon: "order.svg",
    type: "Buy",
  },
  {
    title: "2. Pay the Seller",
    description:
      "Send money to the seller via the suggested payment methods. Complete the fiat transaction and click 'Transferred, notify seller' on Binance P2P.",
    icon: "pay.svg",
    type: "Buy",
  },
  {
    title: "3. Receive Crypto",
    description:
      "Once the seller confirms receipt of money, the escrowed crypto will be released to you.",
    icon: "receive.svg",
    type: "Buy",
  },
  {
    title: "1. Place an Order",
    description:
      "After you place an order, your crypto will be escrowed by Binance P2P.",
    icon: "order.svg",
    type: "Sell",
  },
  {
    title: "2. Verify Payment",
    description:
      "Check the transaction record in the given payment account, and make sure you receive the money sent by the buyer.",
    icon: "verify.svg",
    type: "Sell",
  },
  {
    title: "3. Release Crypto",
    description:
      "Once you confirm the receipt of money, release crypto to the buyer on Binance P2P.",
    icon: "release.svg",
    type: "Sell",
  },
];

export const orderData = {
  order_no: "2543663746833746",
  type: "Sell",
  fiat_amount: 2500,
  fiat_symbol: "$",
  price: 12093.43,
  token_amount: 1.1209343,
  token: "BTC",
  trade_partner: {
    username: "devtee",
    name: "Tee King",
  },
  receiving_account: {
    bank: "Access Bank",
    account_number: "127647664",
    account_name: "Tee King",
    account_type: "Savings",
  },
};

export const tradeSystemMessage = [
  "Successfully placed an order, please pay within the time limit",
  'Order will be cancelled within a few minutes. Make sure to click the "Transfered, Notify Seller" button upon making payment',
  "Order number is 2543663746833746. If you need more time, ask the other party",
];

export const tradeChat = [
  {
    sender_id: "64774636544",
    receiver_id: "98304367210",
    message: "Hi, have you made payment?",
  },
  {
    sender_id: "98304367210",
    receiver_id: "64774636544",
    message: "I'm currently on it.",
  },
  {
    sender_id: "98304367210",
    receiver_id: "64774636544",
    message: "Payment made!",
  },
  {
    sender_id: "64774636544",
    receiver_id: "98304367210",
    message: "Hang on a minute! I'm trying to confirm...",
  },
];

export const userData = {
  name: "Tee King",
  first_name: "Tee",
  last_name: "King",
  username: "teeking",
  phone: "+2349046832081",
  _id: "98304367210",
  email: "devteeking@gmail.com",
};

export const userBankData = [
  {
    bank: "Access Bank",
    account_number: "127647664",
    account_name: "Tee King",
    account_type: "Savings",
  },
  {
    bank: "First Bank of Nigeria",
    account_number: "127647664",
    account_name: "Tee King",
    account_type: "Savings",
  },
];
export const userBalances = [
  {
    token: "Bitcoin",
    ticker: "BTC",
    balance: 0.29837,
    change: 1,
    price: 85000,
  },
  {
    token: "Ethereum",
    ticker: "ETH",
    balance: 2.29837,
    change: -1.5,
    price: 2530.4,
  },
  {
    token: "Tether USD",
    ticker: "USDT",
    balance: 532.5,
    change: 0.02,
    price: 1,
  },
  {
    token: "Binance Coin",
    ticker: "BNB",
    balance: 34.5,
    change: -4.782,
    price: 450,
  },
  {
    token: "Solana",
    ticker: "SOL",
    balance: 55,
    change: -5.032,
    price: 320,
  },
  {
    token: "Tron",
    ticker: "TRX",
    balance: 2300,
    change: -5.032,
    price: 0.15,
  },
];

export const dashboardMarketChart = [
  {
    title: "Holding",
    assets: [
      {
        asset: {
          name: "TetherUS",
          ticker: "USDT",
          balance: 532.5,
        },
        price: 1,
        change: 0.02,
      },
      {
        asset: {
          name: "Binance Coin",
          ticker: "BNB",
          balance: 34.5,
        },
        price: 574,
        change: -4.782,
      },
    ],
  },
  {
    title: "Hot",
    assets: [
      {
        asset: {
          name: "TetherUS",
          ticker: "USDT",
          balance: 532.5,
        },
        price: 1,
        change: 0.02,
      },
      {
        asset: {
          name: "Binance Coin",
          ticker: "BNB",
          balance: 34.5,
        },
        price: 574,
        change: -4.782,
      },
    ],
  },
  {
    title: "New Listing",
    assets: [
      {
        asset: {
          name: "TetherUS",
          ticker: "USDT",
          balance: 532.5,
        },
        price: 1,
        change: 0.02,
      },
      {
        asset: {
          name: "Binance Coin",
          ticker: "BNB",
          balance: 34.5,
        },
        price: 574,
        change: -4.782,
      },
    ],
  },
];

export const listedTokens = [
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
  {
    token: "Ethereum",
    ticker: "ETH",
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
  {
    token: "Bitcoin",
    ticker: "BTC",
  },
];

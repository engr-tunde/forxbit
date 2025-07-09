import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>
        {pageTitle} | {import.meta.env.VITE_APP_NAME} - Buy and Sell Bitcoin,
        Ethereum, BNB, USDT and Others | Cryptocurrency Exchange
      </title>
      <meta
        name="description"
        content={`${
          import.meta.env.VITE_APP_NAME
        } is a cryptocurrency exchange and trading platform that provides Crypto trading experience for crypto traders. Buy, sell, trade BTC, altcoins &amp; NFTs. Get access to the spot and futures market or stake your coins securely..`}
      />
      <meta
        name="keywords"
        content="Forxbit, Forxbit exchange, crypto exchange, cryptocurrency exchange, Bitcoin trading, Ethereum trading, crypto derivatives, spot trading, perpetual contracts, trading pairs, crypto assets, trading bot, copy trading, crypto card, unified trading account,  Web3 innovation, crypto trading platform, trade GPT, master traders, crypto earn, futures trading, leveraged tokens, ETH, BTC, XRP, USDT, Solana, BNB."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Buy &amp; Sell Bitcoin, Ether | Cryptocurrency Exchange | Forxbit"
      />
      <meta
        property="og:description"
        content="Crypto trading experience elevated. Buy, sell, trade BTC, altcoins &amp; NFTs. Get access to the spot and futures market or stake your coins securely."
      />
      <meta property="og:url" content="https://www.forxbit.com/" />
      <meta hid="og:locale" property="og:locale" content="en" />
      <meta
        property="twitter:title"
        content="Buy &amp; Sell Bitcoin, Ether | Cryptocurrency Exchange | Forxbit"
      />
      <meta
        property="twitter:description"
        content="Crypto trading experience elevated. Buy, sell, trade BTC, altcoins &amp; NFTs. Get access to the spot and futures market or stake your coins securely."
      />
      <meta name="author" content="" />
      <link
        rel="shortcut icon"
        href="/assets/images/logo-green-2.png"
        type="image/x-icon"
      />
      <meta name="theme-color" content="#040204" />
      <meta name="msapplication-navbutton-color" content="#040204"></meta>
      <meta content="#040204" name="msapplication-navbutton-color" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta
        content="black-translucent"
        name="apple-mobile-web-app-status-bar-style"
      />
    </Helmet>
  );
};

export default Head;

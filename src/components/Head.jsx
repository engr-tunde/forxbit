import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>
        {import.meta.env.VITE_APP_NAME} - {pageTitle}
      </title>
      <meta
        name="description"
        content={`${
          import.meta.env.VITE_APP_NAME
        } is a cryptocurrency investment trading platform that provides high Returns on Invesments for investors.`}
      />
      <meta
        name="keywords"
        content="Crypto investments, Cryptocurrency trading groups, trading groups, premium trading groups"
      />
      <meta name="author" content="" />
      <link
        rel="shortcut icon"
        href="/assets/images/logo.png"
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

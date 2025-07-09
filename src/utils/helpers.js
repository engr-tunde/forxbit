import { useEffect } from "react";
import { toast } from "react-toastify";

export const successNotification = (message) => toast.success(message);
export const errorNotification = (message) => toast.error(message);
export const infoNotification = (message) => toast.info(message);

export const formatter = (amount) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return fm.format(amount);
};

export const dateFormatter = (date) => {
  var dateString = new Date(date).toString();
  // console.log({ dateString });
  var splittedDateString = dateString.split(" ");
  var day = splittedDateString[0];
  var day2 = splittedDateString[1];
  var month = splittedDateString[2];
  var year = splittedDateString[3];
  var formatttedDate = `${day}, ${day2} ${month}, ${year}`;
  return formatttedDate;
};
export const dateTimeFormatter = (date) => {
  var dateString = new Date(date).toString();
  // console.log({ dateString });
  var splittedDateString = dateString.split(" ");
  var day = splittedDateString[0];
  var day2 = splittedDateString[1];
  var month = splittedDateString[2];
  var year = splittedDateString[3];
  var time = splittedDateString[4];
  var formatttedDate = `${day} ${day2} ${month} ${year}, ${time}`;
  return formatttedDate;
};

export const shuffleArray = (array) => {
  if (array) {
    const newArr = array.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  } else {
    return [];
  }
};

export const copyFunc = (txt, title) => {
  // const txt = `app.prodox-ex.com/register?ref=${referralCode}`;
  const input = document.createElement("input");
  input.value = txt;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
  // successNotification(title);
  let sNotification = (message) => toast.success(message);
  sNotification(title);
};

export const toDecimal = (num, decimal) => {
  let result = parseFloat(num.toFixed(decimal));
  return result;
};

export const useOutsideClick = (ref, onClickOut) => {
  useEffect(() => {
    const onCLick = (target) => !ref?.contains(target) && onClickOut?.();
    document.addEventListener("click", onCLick);
    return () => document.removeEventListener("click", onCLick);
  }, []);
};

export const validateWalletAddress = (value, network) => {
  var stellar_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

  const btcPattern = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/g;
  const btcPattern2 = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/g;
  const ethPattern = /^0x[a-fA-F0-9]{40}$/g;
  const bchPattern = /^((bitcoincash:)?(q|p)[a-z0-9]{41})/;
  const bscPattern = /^(0x)?[0-9a-fA-F]{40}$/;
  const dashPattern = /X[1-9A-HJ-NP-Za-km-z]{33}$/g;
  const trxPattern = /T[A-Za-z1-9]{33}/;
  const dogePattern = /^D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$/;
  const ltcPattern =
    /^([LM3]{1}[a-km-zA-HJ-NP-Z1-9]{26,33}||ltc1[a-z0-9]{39,59})$/g;
  const xrpPattern = /^r[1-9A-HJ-NP-Za-km-z]{25,34}$/;
  const solPattern = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  const tonPattern = /^(EQ|UQ)[A-Za-z0-9_-]{46}$/;
  const stellarPattern = new RegExp("^[" + stellar_alphabet + "]{56}$");
  const moneroPattern = /4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$/g;
  let check;

  if (network == "btc") {
    check = btcPattern.test(value);
    if (!check) {
      check = btcPattern2.test(value);
    }
  } else if (network == "eth" || network == "celo") {
    check = ethPattern.test(value);
  } else if (network == "bch") {
    check = bchPattern.test(value);
  } else if (network == "bsc") {
    check = bscPattern.test(value);
  } else if (network == "dash") {
    check = dashPattern.test(value);
  } else if (network == "trx") {
    check = trxPattern.test(value);
  } else if (network == "doge") {
    check = dogePattern.test(value);
  } else if (network == "ltc") {
    check = ltcPattern.test(value);
  } else if (network == "xrp") {
    check = xrpPattern.test(value);
  } else if (network == "sol") {
    check = solPattern.test(value);
  } else if (network == "ton") {
    check = tonPattern.test(value);
  } else if (network == "xlm" || network == "stellar") {
    check = stellarPattern.test(value);
  } else if (network == "xmr" || network == "monero") {
    check = moneroPattern.test(value);
    // } else if (network == "ton") {
    //   check = tonPattern.test(value);
    // } else if (network == "ton") {
    //   check = tonPattern.test(value);
  }
  console.log("check", check);
  return check;
};

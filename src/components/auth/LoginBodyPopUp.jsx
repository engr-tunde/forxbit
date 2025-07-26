import { useEffect, useState } from "react";
import LoginBodyDialog from "./LoginBodyDialog";
import VerifyLoginDialog from "./VerifyLoginDialog";

const LoginBodyPopUp = ({
  showLoginPopUp,
  setshowLoginPopUp,
  onSuccessfulLogin,
  onCancel,
}) => {
  const [showOTPDialog, setshowOTPDialog] = useState(false);
  const [showLoginDialog, setshowLoginDialog] = useState(true);
  const [userId, setuserId] = useState();

  useEffect(() => {
    if (showLoginPopUp) {
      setshowLoginDialog(true);
    }
  }, [showLoginPopUp]);

  return (
    <div
      className={
        showLoginPopUp
          ? "fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center bg-black/50"
          : "hidden"
      }
      style={{
        backdropFilter: showLoginPopUp ? "blur(5px)" : "",
      }}
    >
      {showLoginDialog ? (
        <LoginBodyDialog
          setshowLoginDialog={setshowLoginDialog}
          setshowOTPDialog={setshowOTPDialog}
          setuserId={setuserId}
          setshowLoginPopUp={setshowLoginPopUp}
          onCancel={onCancel}
        />
      ) : null}

      {showOTPDialog ? (
        <VerifyLoginDialog
          userId={userId}
          setshowOTPDialog={setshowOTPDialog}
          setshowLoginPopUp={setshowLoginPopUp}
          onSuccessfulLogin={onSuccessfulLogin}
          onCancel={onCancel}
        />
      ) : null}
    </div>
  );
};

export default LoginBodyPopUp;

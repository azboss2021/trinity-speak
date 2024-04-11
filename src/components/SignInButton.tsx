"use client";

import { FaLock } from "react-icons/fa6";

const SignInButton = () => {
  const handleSignIn = async () => {
    console.log("SIGN IN");
  };

  return (
    <button className="btn btn-primary btn-lg" onClick={handleSignIn}>
      Sign-in to leave a comment <FaLock />
    </button>
  );
};
export default SignInButton;

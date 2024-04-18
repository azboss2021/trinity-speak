"use client";

import { useEffect } from "react";
import { FaLock } from "react-icons/fa6";

const SignInButton = () => {
  const handleSignIn = async () => {
    console.log("SIGN IN");
  };

  useEffect(() => {
    const modal = document.getElementById("signInModal");
    if (modal) {
      (modal as HTMLDialogElement).close();
    }
  }, []);

  return (
    <>
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          const modal = document.getElementById("signInModal");
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Sign In for Comment Access <FaLock />
      </button>
      <dialog id="signInModal" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Sign In</h3>
          <button className="py-4">
            Press ESC key or click outside to close
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              const modal = document.getElementById("signInModal");
              if (modal) {
                (modal as HTMLDialogElement).close();
              }
            }}
          >
            Close
          </button>
        </form>
      </dialog>
    </>
  );
};
export default SignInButton;

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <button type="submit" className="btn btn-primary">
        Signin with Google
      </button>
    </form>
  );
};
export default SignIn;

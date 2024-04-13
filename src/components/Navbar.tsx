import Link from "next/link";
import { FaCross } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 rounded-xl rounded-t-none border-b bg-base-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/">
          <h1 className="flex items-center gap-1 text-lg font-bold md:text-2xl">
            <FaCross className="text-xl text-primary md:text-3xl" />{" "}
            TrinitySpeak
          </h1>
        </Link>
        <button className="btn btn-primary btn-sm md:btn-md">
          Sign In <FaLock size={14} />
        </button>
      </nav>
    </div>
  );
};
export default Navbar;

import Link from "next/link";
import { FaCross } from "react-icons/fa";
import { FaArrowRight, FaLock } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 rounded-xl rounded-t-none border-b bg-base-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/">
          <h1 className="flex items-center gap-0.5 text-lg font-bold md:text-2xl">
            <FaCross className="text-xl text-primary md:text-3xl" />{" "}
            TrinitySpeak
          </h1>
        </Link>
        {/* <div className="flex items-center gap-1">
          <Link href="" className="btn border-none bg-base-100 shadow-none">
            About
          </Link>
          <Link href="" className="btn border-none bg-base-100 shadow-none">
            About
          </Link>
          <Link href="" className="btn border-none bg-base-100 shadow-none">
            About
          </Link>
        </div> */}
        <div className="flex items-center gap-2">
          <Link href="" className="btn border-none bg-base-100 shadow-none">
            About
          </Link>
          <button className="btn btn-primary btn-sm md:btn-md">
            Sign In <FaLock size={14} />
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

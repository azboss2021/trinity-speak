import { getDaySuffix } from "@/lib/utils";
import Link from "next/link";
import { FaCross } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="rounded-xl rounded-t-none bg-primary text-base-100">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/">
          <h1 className="flex items-center gap-1 text-base font-bold md:text-2xl">
            <FaCross className="text-xl md:text-3xl" /> TrinitySpeak
          </h1>
        </Link>
        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-sm">
            <h2 className="text-sm font-bold md:text-base">
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              }) +
                getDaySuffix(new Date().getDate()) +
                ", " +
                new Date().getFullYear()}
            </h2>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

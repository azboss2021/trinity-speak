import { getDaySuffix } from "@/lib/utils";
import Link from "next/link";
import { FaCalendar, FaCross } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 rounded-md rounded-t-none bg-secondary text-base-100">
      <nav className="mx-auto flex max-w-prose items-center justify-between px-4 py-4">
        <Link href="/">
          <h1 className="flex items-center gap-1 text-base font-bold md:text-xl">
            <FaCross /> TrinitySpeak
          </h1>
        </Link>
        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-sm">
            <h2 className="text-sm font-extrabold md:text-lg">
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

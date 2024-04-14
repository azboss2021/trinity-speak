import { getDaySuffix } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex items-center justify-between pl-2">
      <span className="text-lg font-bold tracking-tight md:text-2xl">
        Verse of the Day
      </span>
      <button className="btn btn-ghost btn-sm font-bold md:btn-md">
        <FaChevronDown size={12} />
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        }) +
          getDaySuffix(new Date().getDate()) +
          ", " +
          new Date().getFullYear()}
      </button>
    </div>
  );
};
export default Header;

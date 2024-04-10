import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between bg-base-100 py-4">
      <Link href="/">
        <h1 className="text-xl font-extrabold">✝️TrinitySpeak</h1>
      </Link>
    </nav>
  );
};
export default Navbar;

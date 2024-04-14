import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-center border-t p-2">
      <span className="text-xs font-semibold text-base-content/50">
        <Link href="https://www.cwilson.dev" className="link">
          Built by CW
        </Link>
      </span>
    </div>
  );
};
export default Footer;

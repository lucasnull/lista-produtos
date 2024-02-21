import Link from "next/link";
import { FunctionComponent as FC } from "react";

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
    <div className="bg-primary py-4 fixed top-0 w-screen z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <ul className="flex flex-row">
          {links.map((link, index) => (
            <li key={index} className="mx-2">
              <Link href={link.href}>
                <p className="text-secondary hover:bg-darker px-3 py-2 rounded-md text-sm font-medium">{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

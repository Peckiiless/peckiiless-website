import React from "react";
import Link from "next/link";

const NavLink = ({ href, link }: { href: string; link: string }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link href={href} className="font-medium transition-all duration-300">
        {link}
      </Link>
    </li>
  );
};

export default NavLink;

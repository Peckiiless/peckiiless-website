import React from "react";
import Link from "next/link";

interface LinksProps {
  setToggle:React.Dispatch<React.SetStateAction<boolean>>; href:string; link:string 
}

const MobileNavLinks = ({ setToggle, href, link }: LinksProps) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        href={href}      
        className="font-bold transition-all duration-300"
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLinks;

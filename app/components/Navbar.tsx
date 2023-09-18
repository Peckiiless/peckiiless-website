import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="graidient p-6 sticky top-0 drop-shadow-xl z-10">
      <div className=" font-400 mx-auto flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-2xl  text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white no-underline hover:text-white/90"
          >
            peckiiless
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-1xl lg:text-2xl">
          <Link
            className="text-white font-bold  hover:text-white/90 no-underline"
            href="/home"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-white/90 no-underline"
            href="/healthcare"
          >
            Healthcare
          </Link>
          <Link
            className="text-white hover:text-white/90 no-underline"
            href="/industry"
          >
            Industry
          </Link>
          <Link
            className="text-white hover:text-white/90 no-underline"
            href="sustainability"
          >
            Sustainability
          </Link>
          <Link
            className="text-white hover:text-white/90 no-underline"
            href="/about-us"
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

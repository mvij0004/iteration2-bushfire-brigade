import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky bg-[#FFFBF2] border-gray-200 top-0 z-50 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="https://cdn.jsdelivr.net/gh/PoomSira/bushfire@main/public/logo.png"
            alt="Logo"
            width={120}
            height={70}
            layout="intrinsic"
            quality={100}
          />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`flex text-2xl items-center justify-center w-28 h-12 transform transition-transform duration-300 hover:scale-110 ${
                  pathname === "/"
                    ? "text-orange-400"
                    : "text-gray-900 hover:text-orange-400"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/learn"
                className={`flex text-2xl items-center justify-center w-28 h-12 transform transition-transform duration-300 hover:scale-110 ${
                  pathname === "/learn"
                    ? "text-orange-400"
                    : "text-gray-900 hover:text-orange-400"
                }`}
              >
                Learn
              </Link>
            </li>
            <li>
              <Link
                href="/prepare"
                className={`flex text-2xl items-center justify-center w-28 h-12 transform transition-transform duration-300 hover:scale-110 ${
                  pathname === "/prepare"
                    ? "text-orange-400"
                    : "text-gray-900 hover:text-orange-400"
                }`}
              >
                Prepare
              </Link>
            </li>
            <li>
              <Link
                href="/recover"
                className={`flex text-2xl items-center justify-center w-28 h-12 transform transition-transform duration-300 hover:scale-110 ${
                  pathname === "/recover"
                    ? "text-orange-400"
                    : "text-gray-900 hover:text-orange-400"
                }`}
              >
                Recover
              </Link>
            </li>
            <li>
              <Link
                href="/quiz"
                className={`flex text-2xl items-center justify-center w-28 h-12 transform transition-transform duration-300 hover:scale-110 ${
                  pathname === "/quiz"
                    ? "text-orange-400"
                    : "text-gray-900 hover:text-orange-400"
                }`}
              >
                Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className={`flex text-2xl items-center justify-center w-28 h-12 transform transition-transform duration-300 hover:scale-110 ${
                  pathname === "/help"
                    ? "text-orange-400"
                    : "text-gray-900 hover:text-orange-400"
                }`}
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

"use client";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full relative">
      {/* Mobile Header */}
      <div className="bg-gray-100 flex justify-between items-center p-4 shadow-md">
        <img src="/entop.jpg" alt="logo" className="h-10" />
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown-Menü */}
      <div
        className={`bg-gray-100 shadow-md transition-all duration-300 ease-in-out absolute w-full left-0 top-full z-10 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col p-4 gap-6 justify-center items-center">
          <li>
            <Link
              className="flex items-center gap-2 text-[20px] text-gray-800 group"
              href="/"
              onClick={toggleMenu}
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Willkommen
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[20px] text-gray-800 group"
              href="/about"
              onClick={toggleMenu}
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Unser Unternehmen
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[20px] text-gray-800 group"
              href="/services"
              onClick={toggleMenu}
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Unsere Leistungen
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[20px] text-gray-800 group"
              href="/team"
              onClick={toggleMenu}
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Stellenangebote
              </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 text-[20px] text-gray-800 group"
              href="/contact"
              onClick={toggleMenu}
            >
              <p className="font-medium group-hover:underline group-hover:underline-offset-8 group-hover:decoration-yellow-500 transition-all">
                Ansprechpartner
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
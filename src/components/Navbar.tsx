"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/Logo.webp";
import { Button } from "./ui/Button";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#hero" className="flex items-center space-x-3 ">
          <Image
            src={Logo}
            height={50}
            width={50}
            alt="Logo Brujula Financiera"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button />
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
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
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "flex" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="w-full flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#problems"
                className="block py-2 px-3 hover:bg-blue-700 rounded-lg"
              >
                Desafios
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="block py-2 px-3 hover:bg-blue-700 rounded-lg"
              >
                Soluciones
              </a>
            </li>
            <li>
              <a
                href="#calltoaction"
                className="block py-2 px-3 hover:bg-blue-700 rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

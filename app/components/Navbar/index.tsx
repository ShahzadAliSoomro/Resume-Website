"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownItemClick = () => {
    // Close the dropdown and hide the text when a dropdown item is clicked
    setDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto">
        {/* /// Navbar lg screen content /// */}
        <div className="flex justify-between items-center p-5">
          <div className="md:hidden">
            <IoMenuOutline className="w-8 h-8" onClick={() => setOpen(!open)} />
          </div>
          <div className="hidden md:flex gap-5 ">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div className="relative" data-te-dropdown-ref>
              <Link
                className="flex items-center whitespace-nowrap rounded  transition duration-150 ease-in-out"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <ul
                className={`absolute z-[1000] float-left mt-5 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
              >
                <li>
                  <Link
                    className="block w-full scroll-smooth duration-200 whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#system-modernization"
                    onClick={handleDropdownItemClick}
                    // as="/#govtcontract"
                    data-te-dropdown-item-ref
                  >
                    System Modernization
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#cybersecurity-solutions"
                    data-te-dropdown-item-ref
                    onClick={handleDropdownItemClick}
                  >
                    CyberSecurity Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#cloud-computing-services"
                    data-te-dropdown-item-ref
                    onClick={handleDropdownItemClick}
                  >
                    Cloud Computing Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Link href="#contact-us">Contact Us</Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>
          <div className="bg-black text-white p-2 lg:w-[100px] w-[85px] h-[29px] lg:h-[35px] flex justify-center items-center">
            <p>Sign Up</p>
          </div>
        </div>
        {/* /// Navbar mobile screen content /// */}
        {open && (
          <div className="md:hidden gap-5 flex flex-col text-white bg-black p-5 w-full absolute top-[66px] left-0 z-50">
            <div>
              <Link href="/" onClick={handleLinkClick}>
                Home
              </Link>
            </div>
            <div className="relative" data-te-dropdown-ref>
              <Link
                className="flex items-center whitespace-nowrap rounded  transition duration-150 ease-in-out"
                href="#"
                type="button"
                id="dropdownMenuButton2"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
                <span className="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <ul
                className={`absolute z-[1000] float-left mt-5 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
                aria-labelledby="dropdownMenuButton2"
                data-te-dropdown-menu-ref
              >
                <li>
                  <Link
                    className="block w-full scroll-smooth duration-200 whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#system-modernization"
                    onClick={handleDropdownItemClick}
                    // as="/#govtcontract"
                    data-te-dropdown-item-ref
                  >
                    System Modernization
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#cybersecurity-solutions"
                    data-te-dropdown-item-ref
                    onClick={handleDropdownItemClick}
                  >
                    CyberSecurity Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#cloud-computing-services"
                    data-te-dropdown-item-ref
                    onClick={handleDropdownItemClick}
                  >
                    Cloud Computing Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <Link href="#contact-us">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

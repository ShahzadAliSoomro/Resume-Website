"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
      }

  return (
    <div className='w-full bg-white'>
        <div className='container mx-auto'>
            {/* /// Navbar lg screen content /// */}
              <div className='flex justify-between items-center p-5'>
                <div className='md:hidden'>
                <IoMenuOutline className='w-8 h-8' onClick={() => setOpen(!open)}/>
                </div>
                <div className='hidden md:flex gap-5 '>
                    <div>
                        <Link href='/'>About Us</Link>
                    </div>
                    <div>
                        <Link href='/services'>Services</Link>
                    </div>
                    <div className='flex gap-1 justify-center items-center'>
                        <Link href='/'>Solutions</Link>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Logo</h1>
                </div>
                <div className='bg-black text-white p-2 lg:w-[100px] w-[85px] h-[29px] lg:h-[35px] flex justify-center items-center'>
                    <p>Sign Up</p>
                </div>
              </div>
              {/* /// Navbar mobile screen content /// */}
              {open && (
                    <div className='md:hidden gap-5 flex flex-col text-white bg-black p-5 w-full absolute top-[66px] left-0 z-50'>
                    <div>
                        <Link href='/' onClick={handleLinkClick}>About Us</Link>
                    </div>
                    <div>
                        <Link href='/services' onClick={handleLinkClick}>Services</Link>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Link href='/' onClick={handleLinkClick}>Solutions</Link>
                        <IoIosArrowDown />
                    </div>
                </div>
              )}
        </div>
    </div>
  )
}

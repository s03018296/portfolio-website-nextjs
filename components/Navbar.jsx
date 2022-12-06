import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiMenu, BiWindowClose } from 'react-icons/bi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleBg = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener('scroll', handleBg);
  }, []);

  return (
    <div
      style={{ backgroundColor: 'white' }}
      className={
        navBg
          ? 'fixed w-full h-30 shadow-xl z-[100]'
          : 'fixed w-full h-40 shadow-xl'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/michael_logo.png"
              alt="/"
              width="125"
              height="50"
            />
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about" scroll={false}>
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects" scroll={false}>
                Portfolio
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact" scroll={false}>
                Contact
              </Link>
            </li>

            <li className="ml-10 text-sm uppercase font-bold hover:border-b">
              <Link href="/">Resume</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <BiMenu size={40} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          onClick={handleNav}
          className={
            nav
              ? 'fixed right-0 top-0 w-[25%] sm:w-[40%] md:w-[55%] h-screen p-10'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        ></div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[white] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/michael_logo.png"
                width="140"
                height="50"
                alt="/"
              />
              <div onClick={handleNav} className="cursor-pointer">
                <BiWindowClose size={28} />
              </div>
            </div>
            <div className="border-b border-gray-200 my-1">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-3 flex flex-col">
            <ul className="md:box">
              <li className="py-5 text-sm uppercase hover:border-b">
                <Link href="/">Home</Link>
              </li>
              <li className="py-5 text-sm uppercase hover:border-b">
                <Link href="/#about" scroll={false}>
                  About
                </Link>
              </li>
              <li className="py-5 text-sm uppercase hover:border-b">
                <Link href="/#projects" scroll={false}>
                  Portfolio
                </Link>
              </li>
              <li className="py-5 text-sm uppercase hover:border-b">
                <Link href="/#contact" scroll={false}>
                  Contact
                </Link>
              </li>
              <div className="border-2">
                <li className="py-5 text-sm uppercase hover:border-b">
                  <Link href="/">Resume</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

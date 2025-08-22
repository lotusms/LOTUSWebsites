import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import Logo from "./Logo";
import EmailObfuscatedLink from '../global/EmailObfuscatedLink';
import navigation from '@/data/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-20 transition-colors duration-300 bg-black/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" aria-current="page" className="flex items-center gap-3">
          <Logo 
            fillLotus="fill-slate-200" 
            fillFlower="fill-green-600"
          />
          <span className="sr-only">LOTUS Websites</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white text-sm uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <EmailObfuscatedLink
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10 transition">
            <span className="text-sm font-medium uppercase tracking-wide">contact us</span>
            <MdArrowOutward className="text-white/90 h-4 w-4" />
          </EmailObfuscatedLink>
        </nav>

        <button
          aria-label="Toggle menu"          
          onClick={handleMobileToggle}
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 md:hidden">
          <span className="sr-only">Toggle main menu</span>
          <IoMenuSharp className={`h-6 w-6 transition ${mobileOpen ? "opacity-0 absolute" : "opacity-100"}`} aria-hidden="true" />
          <IoCloseSharp className={`h-6 w-6 transition ${mobileOpen ? "opacity-100" : "opacity-0 absolute"}`} aria-hidden="true" />
        </button>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 w-[calc(100%-1rem)] max-w-7xl rounded-lg border border-white/15 bg-black/70 px-4 py-3 backdrop-blur md:hidden">
          <nav className="grid gap-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white text-sm uppercase tracking-wide"
              >
                {item.name}
              </a>
            ))}

            <EmailObfuscatedLink className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-white/90 hover:bg-white/10 transition">
              <span className="text-sm font-medium uppercase tracking-wide">contact us</span>
              <MdArrowOutward className="text-white/90 h-4 w-4" />
            </EmailObfuscatedLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

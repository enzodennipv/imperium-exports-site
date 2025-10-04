"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Globe } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                IMPERIUM EXPORTS
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/products" className="px-3 py-2 text-sm font-medium">
              Products
            </Link>
            <Link href="/#services" className="px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="/#contact" className="px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 text-base font-medium">
            About
          </Link>
          <Link href="/products" className="block px-3 py-2 text-base font-medium">
            Products
          </Link>
          <Link href="/#services" className="block px-3 py-2 text-base font-medium">
            Services
          </Link>
          <Link href="/#contact" className="block px-3 py-2 text-base font-medium">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

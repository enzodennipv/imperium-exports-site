// app/layout.jsx
import "./globals.css";
import Link from "next/link";
import { Menu, Globe, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";

export const metadata = {
  title: "Imperium Exports",
  description: "Gateway to Corsican Wonders",
  icons: { icon: "/favicon.ico" }
};

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">IMPERIUM EXPORTS</span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="/" className="nav-link px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="/about" className="nav-link px-3 py-2 text-sm font-medium">About</Link>
            <Link href="/products" className="nav-link px-3 py-2 text-sm font-medium">Products</Link>
            {/* Placeholders */}
            <Link href="/#services" className="nav-link px-3 py-2 text-sm font-medium">Services</Link>
            <Link href="/#contact" className="nav-link px-3 py-2 text-sm font-medium">Contact</Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`md:hidden ${open ? "" : "hidden"}`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium">Home</Link>
          <Link href="/about" className="block pl-3 pr-4 py-2 text-base font-medium">About</Link>
          <Link href="/products" className="block pl-3 pr-4 py-2 text-base font-medium">Products</Link>
          <Link href="/#services" className="block pl-3 pr-4 py-2 text-base font-medium">Services</Link>
          <Link href="/#contact" className="block pl-3 pr-4 py-2 text-base font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-white">About Us</Link></li>
              <li><span className="text-base text-gray-300">Our Team</span></li>
              <li><span className="text-base text-gray-300">Careers</span></li>
              <li><span className="text-base text-gray-300">News</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/products#wines" className="text-base text-gray-300 hover:text-white">Corsican Wines</Link></li>
              <li><Link href="/products#charcuterie" className="text-base text-gray-300 hover:text-white">Charcuterie</Link></li>
              <li><Link href="/products#industrial" className="text-base text-gray-300 hover:text-white">Industrial</Link></li>
              <li><Link href="/products" className="text-base text-gray-300 hover:text-white">View All</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><span className="text-base text-gray-300">Export Solutions</span></li>
              <li><span className="text-base text-gray-300">Logistics</span></li>
              <li><span className="text-base text-gray-300">Consulting</span></li>
              <li><span className="text-base text-gray-300">Customs</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="mailto:contact@imperiumexport.com" className="text-base text-gray-300 hover:text-white">contact@imperiumexport.com</a></li>
              <li className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-base text-gray-400">© {new Date().getFullYear()} Imperium Exports. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="mailto:contact@imperiumexport.com" className="text-gray-400 hover:text-white inline-flex items-center">
              <Mail className="h-5 w-5 mr-2" /> Contact
            </a>
            <a href="tel:+1234567890" className="text-gray-400 hover:text-white inline-flex items-center">
              <Phone className="h-5 w-5 mr-2" /> +1 234 567 890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-800">
        <Nav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

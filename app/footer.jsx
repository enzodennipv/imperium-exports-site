"use client";

import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/about" className="text-base text-gray-300 hover:text-white">About Us</Link></li>
              <li><span className="text-base text-gray-300">Our Team</span></li>
              <li><span className="text-base text-gray-300">Careers</span></li>
              <li><span className="text-base text-gray-300">News</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase">Products</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/products#wines" className="text-base text-gray-300 hover:text-white">Corsican Wines</Link></li>
              <li><Link href="/products#charcuterie" className="text-base text-gray-300 hover:text-white">Charcuterie</Link></li>
              <li><Link href="/products#Immortelle Products & Fabrics" className="text-base text-gray-300 hover:text-white">Immortelle Products & Fabrics</Link></li>
              <li><Link href="/products" className="text-base text-gray-300 hover:text-white">View All</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li><span className="text-base text-gray-300">Export Solutions</span></li>
              <li><span className="text-base text-gray-300">Logistics</span></li>
              <li><span className="text-base text-gray-300">Consulting</span></li>
              <li><span className="text-base text-gray-300">Customs</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase">Connect</h3>
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
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Imperium Exports. All rights reserved.
          </p>
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

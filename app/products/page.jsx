// app/products/page.jsx
"use client";
import { useState } from "react";

export default function Products() {
  const [tab, setTab] = useState("all");
  const T = (id, label) => (
    <button
      onClick={() => setTab(id)}
      className={`tab-button whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${tab===id ? "tab-active" : "text-gray-600"}`}
    >
      {label}
    </button>
  );

  const show = (id) => tab === "all" || tab === id;

  return (
    <div>
      {/* Hero */}
      <div className="hero-gradient pt-24 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl lg:text-6xl">Our Products</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl">Exclusive Corsican products of exceptional quality</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 border-b border-gray-200 space-x-8">
            {T("all","All Products")}
            {T("wines","Corsican Wines")}
            {T("charcuterie","Charcuterie & Hams")}
            {T("olive","Olive Oil")}
            {T("immortelle","Immortelle Products & Fabrics")}
        
         </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Wines */}
          {show("wines") && (
            <div className="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
              <div className="bg-gray-200">
                <img src="/viticole.png" alt="Corsican wine" className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Patrimonio AOC</h3>
                <p className="text-sm text-blue-600">Corsican Wines</p>
                <p className="mt-4 text-gray-600">
                  Exceptional wines from Corsica&apos;s most prestigious appellation, aged in French oak barrels.
                </p>
              </div>
            </div>
          )}

          {/* Immortelle */}
          {show("immortelle") && (
            <div className="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
              <div className="bg-gray-200">
                <img src="/immortelle.png" alt="Immortelle" className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Immortelle-based Creations</h3>
                <p className="text-sm text-blue-600">Immortelle Products & Fabrics</p>
                <p className="mt-4 text-gray-600">
                Products crafted from the rare and precious immortelle, a premium Mediterranean plant renowned for its unique fragrance and high-end qualities.
                </p>
              </div>
            </div>
          )}

          
          

         {/* Olive Oil */}
          {show("olive") && (
            <div className="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
              <div className="bg-gray-200">
                <img src="/oliveoil.png" alt="Olive oil" className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Premium Olive Oil</h3>
                <p className="text-sm text-blue-600">Olive Oil</p>
                <p className="mt-4 text-gray-600">
                  Cold-pressed olive oils, crafted with precision. Rich, balanced and rare — oils destined for haute cuisine and luxury gastronomy.
                </p>
              </div>
            </div>
          )}

          {/* Charcuterie */}
          {show("charcuterie") && (
            <div className="product-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 ease-in-out">
              <div className="bg-gray-200">
                <img src="/jambon.png" alt="Charcuterie" className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">Corsican Charcuterie</h3>
                <p className="text-sm text-blue-600">Charcuterie & Hams</p>
                <p className="mt-4 text-gray-600">
                  Heritage charcuterie crafted in Corsica’s mountains, offered in limited quantities for gourmet tables.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// app/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-gradient pt-24 pb-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-4 sm:px-0 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <span className="block">Gateway to Corsican</span>
                  <span className="block text-blue-200">Wonders</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Imperium Exports brings the rare and authentic treasures of Corsica to discerning partners worldwide.
                  We curate exclusive premium products, crafted in limited quantities, reflecting the island’s unique terroir and timeless heritage.
                </p>
                <div className="mt-10 sm:mt-12">
                  <Link href="/#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 transition duration-150 ease-in-out">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                  <div className="flex justify-center">
                    <Image
                      src="http://static.photos/industry/1024x576/1"
                      alt="Global trade"
                      width={1024}
                      height={576}
                      className="rounded-lg shadow-xl h-auto w-full"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">25+</p>
                      <p className="text-sm text-gray-500">Countries</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">500+</p>
                      <p className="text-sm text-gray-500">Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">15+</p>
                      <p className="text-sm text-gray-500">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Imperium Exports
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We provide comprehensive export solutions with unmatched reliability and efficiency.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full card-hover transition duration-300 ease-in-out">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      {/* icon placeholder */}
                      <span className="h-6 w-6 text-white">🌍</span>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Global Network</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Established connections with suppliers and distributors across 25+ countries ensuring seamless trade operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full card-hover transition duration-300 ease-in-out">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <span className="h-6 w-6 text-white">🛡️</span>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Quality Assurance</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Rigorous quality control processes to ensure all products meet international standards and customer expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full card-hover transition duration-300 ease-in-out">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <span className="h-6 w-6 text-white">⏱️</span>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Timely Delivery</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Efficient logistics and supply chain management to guarantee on-time delivery of your shipments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Premium Export Selection
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Carefully curated products that meet international market demands.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="bg-gray-200">
                <Image src="http://static.photos/agriculture/640x360/1" alt="Agricultural products" width={640} height={360} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link href="/products#wines">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Agricultural Products
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Premium quality grains, fruits, and vegetables sourced from the best farms.
                </p>
              </div>
              <div className="px-6 pb-4">
                <Link href="/products#wines" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  View details →
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="bg-gray-200">
                <Image src="http://static.photos/textures/640x360/1" alt="Textile products" width={640} height={360} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link href="/products#textiles">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Textiles & Fabrics
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  High-quality fabrics and finished textile products for global fashion industries.
                </p>
              </div>
              <div className="px-6 pb-4">
                <Link href="/products#textiles" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  View details →
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group relative bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="bg-gray-200">
                <Image src="http://static.photos/industry/640x360/2" alt="Industrial equipment" width={640} height={360} className="w-full h-auto object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  <Link href="/products#industrial">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Industrial Equipment
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Heavy machinery and industrial components for manufacturing and construction.
                </p>
              </div>
              <div className="px-6 pb-4">
                <Link href="/products#industrial" className="text-blue-600 text-sm font-medium inline-flex items-center">
                  View details →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition">
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700" id="services">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to expand your business globally?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              Let Imperium Exports handle your international trade needs with expertise and care.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

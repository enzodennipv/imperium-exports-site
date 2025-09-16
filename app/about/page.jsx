// app/about/page.jsx
export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="hero-gradient pt-24 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl lg:text-6xl">Our Story</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl">Bringing Corsica&apos;s finest products to the world</p>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <img src="http://static.photos/office/1024x576/1" alt="Our office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-600 opacity-25"></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img src="http://static.photos/workspace/640x360/1" alt="Team working" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img src="http://static.photos/workspace/640x360/2" alt="Warehouse" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900">Who We Are</h2>
              <div className="mt-6 text-lg text-gray-600 space-y-4">
                <p>
                  Imperium Exports specializes in exporting exclusive Corsican gourmet and artisanal products worldwide. We have established a reputation for sourcing the finest Corsican wines, charcuterie, olive oils, and other luxury food products that showcase the island&apos;s unique terroir.
                </p>
                <p>
                  Beyond gastronomy, we also highlight Corsica&apos;s rare natural treasures through products crafted from the precious Immortelle flower, renowned worldwide for its exceptional qualities and association with refinement and exclusivity.
                </p>
                <p>
                  Our name "Imperium" pays homage to Corsica&apos;s most famous son, Emperor Napoleon Bonaparte, whose legacy of excellence and global vision inspires our mission. Just as Napoleon left an indelible mark on history from this Mediterranean island, we aim to bring Corsica&apos;s exceptional products to the world stage.
                </p>
                <p>
                  Our dedicated team of trade experts, logistics professionals, and quality control specialists ensures seamless transactions and lasting satisfaction for discerning clients across the globe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to partner with us?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join hundreds of satisfied clients benefiting from our global trade expertise.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a href="/#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition">
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

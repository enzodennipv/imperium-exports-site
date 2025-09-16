// app/layout.jsx
import "./globals.css";
import Navbar from "./navbar.jsx"; // Composant séparé
import Footer from "./footer"; // Composant séparé

export const metadata = {
  title: "Imperium Exports",
  description: "Gateway to Corsican Wonders",
  icons: { icon: "/favicon.ico" },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-gray-800">
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}


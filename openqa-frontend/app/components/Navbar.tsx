import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      {/* Top announcement bar with marquee and Contact Us CTA */}
      <div className="w-full bg-[#0b63d6] text-white">
        <div className="w-[85%] mx-auto flex items-center justify-between py-2 text-sm">
          <div className="marquee">
            <div className="marquee__inner">
              We deliver cloud, AI and enterprise solutions — partner with Codmigo
              Solutions for secure, scalable digital transformation.
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#0b63d6] px-3 py-1 rounded text-sm font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden
            >
              <path d="M21 16.5a3.5 3.5 0 0 1-3.5 3.5c-7.2 0-13-5.8-13-13A3.5 3.5 0 0 1 8.5 3H9c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H8.7c.8 2.4 2.7 4.3 5.1 5.1V13c0 .6.4 1 1 1h2c.6 0 1 .4 1 1v.5z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b bg-white">
        <div className="w-[85%] mx-auto flex items-center justify-between py-4">

          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Codmigo Solutions"
              width={56}
              height={56}
              priority
            />
            <div className="leading-tight">
              <h1 className="text-lg font-bold text-gray-900">
                Codmigo Solutions
              </h1>
              <p className="text-xs text-gray-500">
                IT Services & Technology Consulting
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden gap-6 md:flex">
            <Link href="/services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-blue-600">
              Careers
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600">
              Resources
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

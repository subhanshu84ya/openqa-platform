import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="OpenQA IT Services"
            width={48}
            height={48}
            priority
          />
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-gray-900">
              OpenQA IT Services
            </h1>
            <p className="text-xs text-gray-500">
              Scaling Quality Through Automation
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-6 md:flex">
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

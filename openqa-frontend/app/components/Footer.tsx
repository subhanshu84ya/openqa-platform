import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} OpenQA IT Services. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/company/106725278/"
            target="_blank"
            aria-label="OpenQA IT Services LinkedIn"
            className="flex items-center gap-2 rounded-full border border-blue-600 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            {/* LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.43c-1.13 0-2.05-.93-2.05-2.07 0-1.14.92-2.07 2.05-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67h-3.53V9h3.39v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.22 2.35 4.22 5.41v6.33z"/>
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

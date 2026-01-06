import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="w-[85%] mx-auto py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">

        {/* Left: Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Codmigo Solutions. All rights reserved.</p>
        </div>

        {/* Right: Follow Us */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-700">Follow Us</span>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/company/106725278/" target="_blank" rel="noopener noreferrer" aria-label="Codmigo Solutions LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.43c-1.13 0-2.05-.93-2.05-2.07 0-1.14.92-2.07 2.05-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67h-3.53V9h3.39v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.22 2.35 4.22 5.41v6.33z"/>
              </svg>
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Codmigo Solutions Facebook" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.32 1.38-3.6 3.5-3.6 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.76h2.59l-.41 2.9h-2.18v7.03C18.34 21.2 22 17.06 22 12.07z"/>
              </svg>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Codmigo Solutions Instagram" className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403.59.214 1.01.47 1.453.913.443.443.7.863.913 1.453.163.457.349 1.257.403 2.428.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428-.214.59-.47 1.01-.913 1.453-.443.443-.863.7-1.453.913-.457.163-1.257.349-2.428.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403-.59-.214-1.01-.47-1.453-.913-.443-.443-.7-.863-.913-1.453-.163-.457-.349-1.257-.403-2.428C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428.214-.59.47-1.01.913-1.453.443-.443.863-.7 1.453-.913.457-.163 1.257-.349 2.428-.403C8.416 2.172 8.8 2.16 12 2.16zm0 1.8c-3.14 0-3.504.012-4.743.068-1.014.047-1.563.216-1.928.362-.49.195-.84.427-1.208.795-.368.368-.6.718-.795 1.208-.146.365-.315.914-.362 1.928-.056 1.239-.068 1.603-.068 4.743s.012 3.504.068 4.743c.047 1.014.216 1.563.362 1.928.195.49.427.84.795 1.208.368.368.718.6 1.208.795.365.146.914.315 1.928.362 1.239.056 1.603.068 4.743.068s3.504-.012 4.743-.068c1.014-.047 1.563-.216 1.928-.362.49-.195.84-.427 1.208-.795.368-.368.6-.718.795-1.208.146-.365.315-.914.362-1.928.056-1.239.068-1.603.068-4.743s-.012-3.504-.068-4.743c-.047-1.014-.216-1.563-.362-1.928-.195-.49-.427-.84-.795-1.208-.368-.368-.718-.6-1.208-.795-.365-.146-.914-.315-1.928-.362C15.504 3.972 15.14 3.96 12 3.96zm0 3.9a4.14 4.14 0 1 1 0 8.28 4.14 4.14 0 0 1 0-8.28zm0 1.8a2.34 2.34 0 1 0 0 4.68 2.34 2.34 0 0 0 0-4.68zm4.95-3.9a1.02 1.02 0 1 1 0 2.04 1.02 1.02 0 0 1 0-2.04z"/>
              </svg>
            </a>

            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Codmigo Solutions Twitter" className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:opacity-90 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.85-2.32 8.3 8.3 0 0 1-2.64 1.01 4.14 4.14 0 0 0-7.07 3.77A11.73 11.73 0 0 1 3.15 4.6a4.12 4.12 0 0 0 1.28 5.52 4.06 4.06 0 0 1-1.87-.52v.05a4.14 4.14 0 0 0 3.32 4.06c-.5.14-1.02.17-1.55.06a4.16 4.16 0 0 0 3.87 2.88A8.3 8.3 0 0 1 2 19.54 11.71 11.71 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53A8.36 8.36 0 0 0 22.46 6z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

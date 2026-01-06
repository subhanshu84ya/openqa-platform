import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="w-[85%] mx-auto py-12">
      <h2 className="text-3xl font-bold mb-4">Careers at Codmigo</h2>
      <p className="text-gray-700 mb-8">
        We're building a team of passionate technologists. Join us to work on
        impactful projects across cloud, AI and enterprise software.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <article className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
          <p className="text-sm text-gray-600 mt-1">Location: Remote / India</p>
          <p className="mt-4 text-gray-700">
            Looking for an experienced backend engineer skilled in Java and
            cloud-native architectures to lead feature development and
            mentor junior engineers.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Apply
            </Link>
            <a
              href="mailto:careers@codmigo.com?subject=Application%20-%20Senior%20Software%20Engineer"
              className="inline-block text-gray-700 px-4 py-2 rounded border"
            >
              Email
            </a>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <p className="text-sm text-gray-600 mt-1">Location: Hybrid / Remote</p>
          <p className="mt-4 text-gray-700">
            Passionate about building delightful user experiences with React,
            Next.js and Tailwind CSS. Experience with design systems is a plus.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Apply
            </Link>
            <a
              href="mailto:careers@codmigo.com?subject=Application%20-%20Frontend%20Developer"
              className="inline-block text-gray-700 px-4 py-2 rounded border"
            >
              Email
            </a>
          </div>
        </article>
      </div>

      <section className="mt-12 text-sm text-gray-600">
        <p>
          Don't see a match? Send your resume to{' '}
          <a
            href="mailto:careers@codmigo.com"
            className="text-blue-600 underline"
          >
            careers@codmigo.com
          </a>{' '}
          — we'll keep it on file and reach out about future roles.
        </p>
      </section>
    </main>
  );
}

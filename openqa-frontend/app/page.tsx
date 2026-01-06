import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="w-[85%] mx-auto py-24 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Reliable Software Testing & QA Services
          </h1>
          <p className="mt-6 text-lg text-blue-100">
            Helping businesses deliver high-quality, bug-free software with
            Manual, Automation & API Testing.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white px-6 py-3 font-semibold"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="w-[85%] mx-auto py-20">
        <h2 className="text-center text-3xl font-bold">
          Our Testing Expertise
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {["Manual Testing", "Automation Testing", "API Testing"].map(
            (service) => (
              <div
                key={service}
                className="rounded-xl border p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="mt-3 text-gray-600">
                  Enterprise-grade QA solutions designed for reliability and
                  scalability.
                </p>
              </div>
            )
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="font-semibold text-blue-600 hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-20">
        <h2 className="text-3xl font-bold">
          Ready to Improve Your Software Quality?
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-700"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Scaling Quality Through Automation & Reliable Testing Solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Service 1 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Automation Testing
            </h3>
            <p className="mt-3 text-gray-600">
              End-to-end automation testing using Selenium, Playwright, and Cypress
              to reduce manual effort and increase release speed.
            </p>
          </div>

          {/* Service 2 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Manual Testing
            </h3>
            <p className="mt-3 text-gray-600">
              Detailed functional, regression, and exploratory testing to ensure
              defect-free and stable applications.
            </p>
          </div>

          {/* Service 3 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              API Testing
            </h3>
            <p className="mt-3 text-gray-600">
              REST API testing using Postman, REST Assured, and automated API
              validations for backend reliability.
            </p>
          </div>

          {/* Service 4 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              CI/CD Integration
            </h3>
            <p className="mt-3 text-gray-600">
              Integrating automated tests into CI/CD pipelines using GitHub Actions
              and Jenkins for faster releases.
            </p>
          </div>

          {/* Service 5 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Test Strategy & Consulting
            </h3>
            <p className="mt-3 text-gray-600">
              Designing scalable test strategies, improving test coverage, and
              optimizing QA processes.
            </p>
          </div>

          {/* Service 6 */}
          <div className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">
              QA for Startups
            </h3>
            <p className="mt-3 text-gray-600">
              Affordable and flexible QA solutions tailored for startups and
              growing businesses.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

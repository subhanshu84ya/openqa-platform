export default function ServicesPage() {
  return (
    <section className="bg-slate-50">
      <div className="w-[85%] mx-auto">
        
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

          {/* unified tile builder: group + background image + overlay + hover effect */}
          <Tile
            title="Automation Testing"
            desc="End-to-end automation testing using Selenium, Playwright, and Cypress to reduce manual effort and increase release speed."
            img="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1400&q=80"
          />

          <Tile
            title="Manual Testing"
            desc="Detailed functional, regression, and exploratory testing to ensure defect-free and stable applications."
            img="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80"
          />

          <Tile
            title="API Testing"
            desc="REST API testing using Postman, REST Assured, and automated API validations for backend reliability."
            img="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80"
          />

          <Tile
            title="CI/CD Integration"
            desc="Integrating automated tests into CI/CD pipelines using GitHub Actions and Jenkins for faster releases."
            img="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80"
          />

          <Tile
            title="Test Strategy & Consulting"
            desc="Designing scalable test strategies, improving test coverage, and optimizing QA processes."
            img="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
          />

          <Tile
            title="QA for Startups"
            desc="Affordable and flexible QA solutions tailored for startups and growing businesses."
            img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
          />

        </div>

        {/* Tile component defined below for consistent styling */}
        
        
      </div>
    </section>
  );
}

function Tile({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <div className="group relative rounded-xl overflow-hidden h-56 shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
      <div
        className="absolute inset-0 bg-cover bg-center transform-gpu transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${img}')` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/45" />

      <div className="absolute left-6 top-6 right-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/90 max-w-prose">{desc}</p>
      </div>
    </div>
  );
}

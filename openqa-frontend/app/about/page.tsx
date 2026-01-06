export default function AboutPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About Codmigo Solutions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Scaling quality through automation, precision, and reliable testing practices.
          </p>
        </div>

        {/* WHO WE ARE */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Who We Are
          </h2>
          <p className="max-w-4xl text-gray-700 leading-7">
            Codmigo Solutions is a quality-focused software testing and automation
            company dedicated to helping businesses deliver reliable, scalable,
            and high-performing software products. We specialize in manual testing,
            automation testing, API testing, and QA process optimization.
          </p>
        </section>

        {/* FOUNDER STORY */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Founder’s Story
          </h2>
          <p className="mb-4 max-w-4xl text-gray-700 leading-7">
            Codmigo Solutions was founded by a passionate QA engineer
            <span className="font-medium"> Ashish Jaishwal</span>, with over
            <span className="font-medium"> 8+ years of hands-on experience</span>
            in real-world software projects, automation frameworks, and modern
            testing tools.
          </p>
          <p className="max-w-4xl text-gray-700 leading-7">
            After working closely with development teams and witnessing how poor
            testing impacts product quality and business trust, Codmigo Solutions was created
            with a clear mission: to make quality a strength — not a bottleneck.
          </p>
        </section>

        {/* WHY CODMIGO */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 text-center">
            Why Choose Codmigo Solutions?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WhyCard text="Automation-first QA strategy focused on scalability" />
            <WhyCard text="Clean, maintainable & reusable test frameworks" />
            <WhyCard text="Experience with real-world products & agile teams" />
            <WhyCard text="Transparent communication & detailed reporting" />
            <WhyCard text="Cost-effective solutions for startups & businesses" />
            <WhyCard text="Strong focus on reliability, performance & quality" />
          </div>
        </section>

        {/* MISSION */}
        <section className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Our Mission
          </h2>
          <p className="max-w-4xl text-gray-700 leading-7">
            Our mission is to help businesses release software with confidence by
            ensuring quality at every stage of development through smart testing
            strategies and automation excellence.
          </p>
        </section>

      </div>
    </main>
  );
}

/* Reusable Card */
function WhyCard({ text }: { text: string }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow hover:shadow-md transition">
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

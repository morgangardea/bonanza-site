export default function BonanzaEarthRelocatorsPage() {
  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Mining Support', href: '#mining-support' },
    { label: 'Why Bonanza', href: '#why-bonanza' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'Site Preparation',
      description:
        'Clearing and preparing land so your project starts on solid ground.',
    },
    {
      title: 'Excavation',
      description:
        'Accurate, efficient digging for foundations and structural work.',
    },
    {
      title: 'Grading and Leveling',
      description:
        'Creating stable surfaces with proper drainage and long-term durability.',
    },
    {
      title: 'Trenching for Utilities',
      description:
        'Clean, precise trenching for water, sewer, and electrical systems.',
    },
    {
      title: 'Land Clearing',
      description:
        'Removing brush, trees, and debris to open and prepare your site.',
    },
    {
      title: 'Material Hauling',
      description:
        'Reliable transport of dirt, rock, and debris to keep your project moving.',
    },
    {
      title: 'Mining Support Services',
      description:
        'Earthmoving and hauling support for mining and industrial operations in the Douglas area.',
    },
  ];

  const trustPoints = [
    'Locally Based in Douglas, WY',
    'Background-Checked Operators',
    'Commercial and Mining Ready',
    'Reliable Scheduling',
  ];

  const miningPoints = [
    'Material movement and hauling',
    'Site preparation for mining operations',
    'Access road grading and maintenance',
    'Staging area grading',
    'General excavation support',
  ];

  const whyBonanza = [
    {
      title: 'Local Knowledge',
      description:
        'We understand Wyoming terrain, weather patterns, and job site realities.',
    },
    {
      title: 'Vetted Operators',
      description:
        'Every driver is background-checked and qualified to work on professional job sites.',
    },
    {
      title: 'Dependable Work Ethic',
      description:
        'We show up on time, communicate clearly, and follow through on the work.',
    },
    {
      title: 'Built for Commercial and Mining Jobs',
      description:
        'We are equipped and prepared to support demanding projects with consistency.',
    },
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-stone-200 uppercase">
            Bonanza Earth Relocators
          </a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-stone-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-2xl border border-amber-500 bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            Request a Quote
          </a>
        </div>
      </header>

      <section id="top" className="border-b border-stone-800">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-stone-700 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-300">
              Douglas, Wyoming
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Reliable Earthmoving for Commercial and Mining Projects
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-300">
                Local crews. Vetted operators. Built to handle the demands of Wyoming job sites.
              </p>
              <p className="max-w-2xl text-base leading-7 text-stone-400">
                Bonanza Earth Relocators provides dependable excavation, hauling, and site work for commercial builds and mining operations across Douglas and surrounding areas.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
              >
                Request a Quote
              </a>
              <a
                href="tel:+13070000000"
                className="rounded-2xl border border-stone-700 px-6 py-3 text-center text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-950 p-8 shadow-2xl shadow-black/30">
            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
                  <p className="text-sm font-medium leading-6 text-stone-200">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone-800 bg-stone-900/70">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trustPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-stone-800 px-4 py-5 text-sm font-medium text-stone-300">
              {point}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Services</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Earthmoving Services Built for Real Job Sites
            </h2>
            <p className="text-base leading-7 text-stone-300">
              We provide straightforward, dependable support for commercial construction and mining-related work. Whether you need full site preparation or targeted support, our team shows up ready to get the job done right.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.5rem] border border-stone-800 bg-stone-900/60 p-6 shadow-lg shadow-black/10"
              >
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex rounded-2xl border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      <section id="mining-support" className="border-b border-stone-800 bg-stone-900/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Mining and Industrial Support</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Supporting Douglas Area Mining Operations
            </h2>
            <p className="text-base leading-7 text-stone-300">
              Douglas is built around mining, and we understand what that means for your job site. The pace is faster, expectations are higher, and reliability matters.
            </p>
            <p className="text-base leading-7 text-stone-300">
              Bonanza Earth Relocators provides consistent, dependable support for mining and industrial work, with operators who are prepared for the scale and conditions of these environments.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Discuss Your Project
            </a>
          </div>

          <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-8">
            <h3 className="text-lg font-semibold text-white">Mining Support Services</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
              {miningPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-stone-800 bg-stone-900/70 px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="why-bonanza" className="border-b border-stone-800">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Why Bonanza</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A Local Crew You Can Count On
            </h2>
            <p className="text-base leading-7 text-stone-300">
              We are focused on dependable service, clear communication, and operators you can trust on demanding commercial and mining job sites.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyBonanza.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-stone-800 bg-stone-900/60 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-area" className="border-b border-stone-800 bg-stone-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Service Area</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Proudly Serving Douglas, Wyoming and Surrounding Areas
            </h2>
            <p className="text-base leading-7 text-stone-300">
              We are based in Douglas and work throughout the region, supporting commercial contractors and mining operations with reliable earthmoving services.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">Contact</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Let’s Talk About Your Project
            </h2>
            <p className="text-base leading-7 text-stone-300">
              If you need dependable earthmoving support, we are ready to step in and help move your project forward.
            </p>
            <p className="text-base leading-7 text-stone-300">
              Call us directly or send a request and we will get back to you quickly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+13070000000"
                className="rounded-2xl bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
              >
                Call Now
              </a>
              <a
                href="mailto:info@bonanzaearthrelocators.com"
                className="rounded-2xl border border-stone-700 px-6 py-3 text-center text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-800 bg-stone-900/60 p-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-stone-400">Company</p>
                <p className="mt-1 text-lg font-semibold text-white">Bonanza Earth Relocators</p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Location</p>
                <p className="mt-1 text-base text-stone-200">Douglas, Wyoming</p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Main Services</p>
                <p className="mt-1 text-base leading-7 text-stone-200">
                  Commercial excavation, grading, utility trenching, land clearing, hauling, and mining support.
                </p>
              </div>
              <div>
                <p className="text-sm text-stone-400">Why Clients Call</p>
                <p className="mt-1 text-base leading-7 text-stone-200">
                  Local operators, background-checked crews, and dependable support for demanding job sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

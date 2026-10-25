const services = [
  {
    icon: "❄️",
    title: "AC Service",
    description: "Cooling system repair, gas refill, and performance checks for homes and offices.",
  },
  {
    icon: "🧊",
    title: "Refrigerator",
    description: "Cooling issues, compressor faults, and part replacements handled with care.",
  },
  {
    icon: "⚡",
    title: "Electrical Service",
    description: "Switches, wiring, fittings, and minor electrical repairs done safely and efficiently.",
  },
  {
    icon: "🛠️",
    title: "Home Support",
    description: "Quick assistance for everyday repair needs with dependable workmanship and follow-up.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-100 py-20 px-6 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
            Our solutions
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Practical support for the essentials at home.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const steps = [
  {
    number: "01",
    icon: "📞",
    title: "Book Your Service",
    description:
      "Call, WhatsApp, or fill out the form with your appliance issue and preferred time.",
  },
  {
    number: "02",
    icon: "🧰",
    title: "Technician Visit",
    description:
      "Our trained expert visits your home at the scheduled time to inspect the problem.",
  },
  {
    number: "03",
    icon: "💬",
    title: "Get a Clear Quote",
    description:
      "We explain the issue, the repair scope, and the cost before starting any work.",
  },
  {
    number: "04",
    icon: "🔧",
    title: "Repair & Test",
    description:
      "Once approved, we complete the repair and test the appliance for proper performance.",
  },
  {
    number: "05",
    icon: "🛡️",
    title: "Pay & Enjoy Warranty",
    description:
      "Make the payment, receive service confirmation, and get support under our warranty.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            We make appliance repair stress-free with transparent steps, expert service,
            and reliable follow-up.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute -top-3 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg text-white shadow-md">
                {step.icon}
              </div>

              <div className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6">
          <p className="text-lg font-medium text-slate-700">
            Need help fast? We’re ready when you are.
          </p>
          <a
            href="https://wa.me/919000444320?text=Hi%20UBYSU%2C%20I%20want%20to%20book%20a%20repair%20service."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Book a Repair
          </a>
        </div>
      </div>
    </section>
  );
}
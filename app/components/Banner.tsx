import Image from "next/image";
import ubysuLogo from "../ubysuLogo.png";

const highlights = [
  "Same Day Service",
  "Verified Technicians",
  "Workmanship Warranty",
];

export default function Banner() {
  return (
    <>
      <header className="bg-white shadow-sm shadow-slate-200/50">
        <div className="container mx-auto flex items-center justify-between px-4 py-1 md:px-6 md:py-2">
          <div className="flex items-center justify-start bg-white p-0">
            <Image
              src={ubysuLogo}
              alt="UBYSU logo"
              width={260}
              height={90}
              className="h-auto w-auto max-h-16 object-contain bg-white md:max-h-20"
              style={{ backgroundColor: "white" }}
              priority
            />
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a
              href="#services"
              className="relative transition duration-200 hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all after:duration-200 hover:after:w-full"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="relative transition duration-200 hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all after:duration-200 hover:after:w-full"
            >
              How it works
            </a>
            <a
              href="#contact"
              className="relative transition duration-200 hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-slate-900 after:transition-all after:duration-200 hover:after:w-full"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_28%),radial-gradient(circle_at_right,_rgba(14,165,233,0.18),_transparent_22%)]" />

        <div className="relative container mx-auto px-6 pb-20 pt-10 md:pt-14 lg:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.12fr_0.88fr]">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Trusted service experts
              </div>

              <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
                Reliable repairs for home and everyday living.
                <span className="mt-2 block text-slate-300">Fast service. Honest work. Expert care.</span>
              </h1>

              <p className="mt-6 text-lg text-slate-300">
                UBYSU handles AC repair, refrigerator service, electrical work, and everyday home
                support with dependable care, clear pricing, and trusted workmanship.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+919000444320"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://wa.me/919000444320"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/20"
                >
                  💬 WhatsApp Now
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-200"
                  >
                    ✔ {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-lg rounded-[2rem] border border-slate-700/80 bg-slate-900/75 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.7)] backdrop-blur-sm">
                <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
                  <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Coverage
                      </p>
                      <h2 className="mt-2 text-2xl font-bold">Repair & Maintenance</h2>
                    </div>
                    <div className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Ready
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      { name: "AC", icon: "❄️" },
                      { name: "Fridge", icon: "🧊" },
                      { name: "Electrical", icon: "⚡" },
                      { name: "Home Support", icon: "🛠️" },
                    ].map((service) => (
                      <div
                        key={service.name}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xl">
                          {service.icon}
                        </div>
                        <h3 className="text-sm font-semibold text-slate-800">{service.name}</h3>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-900 px-4 py-3 text-white">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Service window</span>
                      <span className="font-semibold text-cyan-300">Same day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
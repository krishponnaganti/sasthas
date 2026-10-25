export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 px-6 text-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Get in touch
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to fix it without the wait?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Reach out for quick support, service booking, and expert advice on appliance repair and maintenance.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+919000444320"
                className="block rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Phone</p>
                <p className="mt-3 text-lg font-semibold text-white">+91 9000444320</p>
              </a>

              <a
                href="mailto:company18eighteen@gmail.com"
                className="block rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">company18eighteen@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
            <div className="flex items-center justify-between gap-3 border-b border-slate-700 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Contact details
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">UBYSU</h3>
              </div>
              <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                Available
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-400">Service support</p>
                <p className="mt-2 text-lg font-semibold text-white">Quick service for ACs, appliances, and everyday repair needs.</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Typical response</p>
                <p className="mt-2 text-lg font-semibold text-white">Same day assistance for urgent needs.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

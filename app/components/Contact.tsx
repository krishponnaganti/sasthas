export default function Contact() {
  return (
    <section className="py-20 px-6 sm:px-10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Get in touch
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to book or ask a question?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Our friendly support team is here to help with scheduling, pricing, and service recommendations.
            </p>
            <div className="mt-10 space-y-4">
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Phone</p>
                <p className="mt-3 text-lg font-semibold">+91 98765 43210</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Email</p>
                <p className="mt-3 text-lg font-semibold">support@kakinadahomeservices.com</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
            <h3 className="text-xl font-semibold text-white">Send us a message</h3>
            <form className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-300">
                Name
                <input
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block text-sm font-medium text-slate-300">
                Message
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell us how we can help"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Submit request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Warranty() {
  return (
    <section className="py-20 px-6 sm:px-10 bg-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/60">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
              Service guarantee
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Trustworthy workmanship backed by a warranty.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-slate-600">
              Every job comes with our satisfaction guarantee and a warranty on labor, so you can feel confident in the quality of every repair.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-slate-900">30-day warranty</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                We stand behind our work with a full 30-day service warranty on all labor.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-slate-900">Clear pricing</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                No hidden fees or surprise charges—just transparent service quotes you can trust.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-semibold text-slate-900">Friendly support</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Our team is available to answer questions and ensure your project is completed right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

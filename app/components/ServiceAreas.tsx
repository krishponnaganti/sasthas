const areas = [
  "Kakinada city",
  "MVP Colony",
  "Ramachandra Rao Pet",
  "Gandhi Nagar",
  "Ravindra Nagar",
];

export default function ServiceAreas() {
  return (
    <section className="py-20 px-6 sm:px-10 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
            Service areas
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional home service across the region.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-slate-600">
            We serve homes and businesses across Kakinada and nearby neighborhoods with responsive, quality support.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
              <p className="text-lg font-semibold text-slate-900">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

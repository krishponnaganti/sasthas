const areas = ["Jaganaikpur", "Indrapalem"];

export default function ServiceAreas() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">
            Service areas
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional home service in our key areas.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We proudly support residents in Jaganaikpur and Indrapalem with reliable, local service.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {areas.map((area) => (
            <div
              key={area}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50"
            >
              <p className="text-lg font-semibold text-slate-900">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

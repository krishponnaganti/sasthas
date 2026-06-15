export default function Hero() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">

        <h1 className="text-5xl font-bold mb-4">
          Kakinada Home Services
        </h1>

        <p className="text-xl mb-6">
          Fast & Trusted Home Appliance Repair
        </p>

        <p className="mb-8">
          AC • Washing Machine • Refrigerator
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="tel:+91XXXXXXXXXX"
            className="bg-blue-600 px-6 py-3 rounded-lg"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="bg-green-600 px-6 py-3 rounded-lg"
          >
            💬 WhatsApp Now
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <span>✔ Same Day Service</span>
          <span>✔ Verified Technicians</span>
          <span>✔ Workmanship Warranty</span>
        </div>

      </div>
    </section>
  );
}
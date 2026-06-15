const services: string[] = [
  "AC Repair & Service",
  "Washing Machine Repair",
  "Refrigerator Repair",
  "Electrical Services",
];

export default function Services() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-bold mb-4">Our Services</h2>

      <div className="grid grid-cols-2 gap-3">
        {services.map((service: string, index: number) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow text-center"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
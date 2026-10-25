"use client";

import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  service: string;
  issue: string;
};


export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    service: "AC Repair",
    issue: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const message =
      `New Service Request:%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Service: ${form.service}%0A` +
      `Issue: ${form.issue}`;

    window.open(
      `https://wa.me/919000000000?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <section className="p-6 bg-red-500">
      <h2 className="text-xl font-bold mb-4 text-white">Book a Service</h2>

      <input
        name="name"
        placeholder="Your Name"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
      />

      <select
        name="service"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
      >
        <option>AC Repair</option>
        <option>Washing Machine</option>
        <option>Refrigerator</option>
        <option>Electrical</option>
      </select>

      <textarea
        name="issue"
        placeholder="Describe your problem"
        className="w-full p-2 border mb-2"
        onChange={handleChange}
      />

      <button
        onClick={submit}
        className="bg-black text-white w-full p-2"
      >
        Request via WhatsApp
      </button>
    </section>
  );
}
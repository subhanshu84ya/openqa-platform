"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

    try {
      const res = await fetch("https://openqa-backend.onrender.com/api/contact"
, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess("Message sent successfully. We’ll contact you soon ✅");
      setForm({ name: "", email: "", service: "", message: "" });

    } catch {
      setError("Please fill all fields correctly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">

          {/* Info */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
            <p className="mb-6 text-gray-700">
              OpenQA IT Services helps you deliver quality software.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>📧 openqaitservices@gmail.com</li>
              <li>📞 +91-9795598160</li>
              <li>🌍 India (Remote)</li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-lg border px-4 py-2"
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-lg border px-4 py-2"
              />

              {/* ✅ FIXED HERE */}
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border px-4 py-2"
              >
                <option value="">Select service</option>
                <option>Manual Testing</option>
                <option>Automation Testing</option>
                <option>API Testing</option>
                <option>QA Consulting</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message"
                className="w-full rounded-lg border px-4 py-2"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 text-white"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

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
const [emailError, setEmailError] = useState("");
const [nameError, setNameError] = useState("");
const [messageError, setMessageError] = useState("");
const [serviceError, setServiceError] = useState("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleEmailBlur = () => {
  if (form.email && !validateEmail(form.email)) {
    setEmailError("Please enter a valid email address");
  } else {
    setEmailError("");
  }
};

const handleNameBlur = () => {
  if (!form.name.trim()) setNameError("Full name is required");
  else setNameError("");
};

const handleMessageBlur = () => {
  if (!form.message.trim()) setMessageError("Please enter your message");
  else setMessageError("");
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // clear previous errors
  setError("");
  setSuccess("");
  setEmailError("");
  setNameError("");
  setMessageError("");
  setServiceError("");

  // client-side validation
  let hasError = false;
  if (!form.name.trim()) {
    setNameError("Full name is required");
    hasError = true;
  }
  if (!form.email || !validateEmail(form.email)) {
    setEmailError("Please enter a valid email address");
    hasError = true;
  }
  if (!form.service) {
    setServiceError("Please select a service");
    hasError = true;
  }
  if (!form.message.trim()) {
    setMessageError("Please enter your message");
    hasError = true;
  }

  if (hasError) return;

  setLoading(true);

  try {
    const API_URL = (process.env.NEXT_PUBLIC_API_URL as string) ?? "https://openqa-platform-dg4x.onrender.com";

    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP ${res.status}`);
    }

    setSuccess("Message sent successfully. We'll contact you soon ✅");
    setForm({ name: "", email: "", service: "", message: "" });

  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Failed to send message";
    console.error("Contact form error:", errorMsg);
    setError(errorMsg);
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="bg-slate-50">
      <div className="w-[85%] mx-auto py-20">
        <div className="grid gap-10 md:grid-cols-2">

          {/* Info */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
            <p className="mb-6 text-gray-700">
              Codmigo Solutions helps you deliver quality software.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>📧 info@Codmigo.com</li>
              <li>🌍 India</li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>

              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleNameBlur}
                  placeholder="Full Name"
                  className="w-full rounded-lg border px-4 py-2"
                />
                {nameError && <p className="mt-1 text-sm text-red-600">{nameError}</p>}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleEmailBlur}
                  placeholder="Email Address"
                  className="w-full rounded-lg border px-4 py-2"
                />
                {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
              </div>

              <div>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border px-4 py-2"
                >
                  <option value="">Select service</option>
                  <option value="Manual Testing">Manual Testing</option>
                  <option value="Automation Testing">Automation Testing</option>
                  <option value="API Testing">API Testing</option>
                  <option value="QA Consulting">QA Consulting</option>
                  <option value="Other">Other</option>
                </select>
                {serviceError && <p className="mt-1 text-sm text-red-600">{serviceError}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  onBlur={handleMessageBlur}
                  placeholder="Your message"
                  className="w-full rounded-lg border px-4 py-2"
                />
                {messageError && <p className="mt-1 text-sm text-red-600">{messageError}</p>}
              </div>

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

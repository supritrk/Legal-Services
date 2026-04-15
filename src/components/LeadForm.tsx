"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface FormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  caseType?: string;
}

const caseTypes = [
  "Family Law",
  "Corporate Law",
  "Criminal Defence",
  "Property Law",
  "Employment Law",
  "Immigration Law",
  "Other",
];

export default function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    caseType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Full name is required";
    if (!form.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.caseType) errs.caseType = "Please select a case type";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 sm:py-28 bg-navy-50/30">
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-12 border border-navy-100 shadow-xl"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-[family-name:var(--font-playfair)] mb-3">
              Thank You!
            </h3>
            <p className="text-navy-500 leading-relaxed">
              Your consultation request has been received. One of our solicitors
              will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy-50/30 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <AnimatedSection>
            <div>
              <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-[family-name:var(--font-playfair)] mb-6 leading-tight">
                Request Your{" "}
                <span className="text-gold-gradient">Free Consultation</span>
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed mb-8">
                Fill in the form and one of our expert solicitors will get back
                to you within 24 hours. All enquiries are completely
                confidential.
              </p>

              {/* Urgency banner */}
              <div className="bg-gold-50 border border-gold-200 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-800 font-semibold text-sm mb-1">
                      Limited Availability This Week
                    </p>
                    <p className="text-navy-600 text-sm">
                      Due to high demand, free consultation slots are filling
                      fast. Submit your enquiry today to secure your spot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-navy-600">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 uppercase tracking-wider">Phone</div>
                    <a href="tel:+441234567890" className="font-semibold text-navy-800 hover:text-gold-600 transition-colors">
                      0123 456 7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-navy-600">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 uppercase tracking-wider">Email</div>
                    <a href="mailto:info@sterlinglaw.co.uk" className="font-semibold text-navy-800 hover:text-gold-600 transition-colors">
                      info@sterlinglaw.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-navy-600">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-navy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-navy-400 uppercase tracking-wider">Office</div>
                    <span className="font-semibold text-navy-800">
                      123 Legal Street, London, EC1A 1BB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl p-8 sm:p-10 border border-navy-100 shadow-xl shadow-navy-900/5"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="form-name"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.name
                        ? "border-red-400 bg-red-50/50"
                        : "border-navy-200 bg-navy-50/30 focus:border-gold-400"
                    } text-navy-900 placeholder:text-navy-300 outline-none transition-colors duration-200 focus:ring-2 focus:ring-gold-400/20`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="form-email"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.email
                        ? "border-red-400 bg-red-50/50"
                        : "border-navy-200 bg-navy-50/30 focus:border-gold-400"
                    } text-navy-900 placeholder:text-navy-300 outline-none transition-colors duration-200 focus:ring-2 focus:ring-gold-400/20`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="form-phone"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Phone Number{" "}
                    <span className="text-navy-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07123 456 789"
                    className="w-full px-4 py-3.5 rounded-xl border border-navy-200 bg-navy-50/30 text-navy-900 placeholder:text-navy-300 outline-none transition-colors duration-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>

                {/* Case Type */}
                <div>
                  <label
                    htmlFor="form-case"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Case Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="form-case"
                    name="caseType"
                    value={form.caseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-xl border ${
                      errors.caseType
                        ? "border-red-400 bg-red-50/50"
                        : "border-navy-200 bg-navy-50/30 focus:border-gold-400"
                    } text-navy-900 outline-none transition-colors duration-200 focus:ring-2 focus:ring-gold-400/20 appearance-none cursor-pointer`}
                  >
                    <option value="">Select your case type</option>
                    {caseTypes.map((ct) => (
                      <option key={ct} value={ct}>
                        {ct}
                      </option>
                    ))}
                  </select>
                  {errors.caseType && (
                    <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                      {errors.caseType}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5 mt-2"
                >
                  Get Free Advice →
                </button>

                <p className="text-center text-navy-400 text-xs mt-3">
                  🔒 Your information is 100% secure and will never be shared.
                </p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

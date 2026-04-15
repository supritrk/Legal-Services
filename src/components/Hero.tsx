"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-navy-700/20 rounded-full blur-3xl" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">
                SRA Regulated Firm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-playfair)] text-white leading-[1.1] mb-6"
            >
              Get Free{" "}
              <span className="text-gold-gradient">Legal Advice</span>{" "}
              Today
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-navy-300 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              Speak with experienced solicitors and protect your rights.
              Our expert team is ready to guide you through every step of
              your legal journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-xl shadow-gold-600/25 hover:shadow-gold-500/40 hover:-translate-y-1"
              >
                Book Free Consultation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="tel:+441234567890"
                className="inline-flex items-center justify-center gap-2 border-2 border-navy-600 hover:border-gold-500/50 text-white hover:text-gold-400 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              {[
                { value: "500+", label: "Clients Served" },
                { value: "10+", label: "Years Experience" },
                { value: "98%", label: "Success Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gold-400 font-[family-name:var(--font-playfair)]">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-navy-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main illustration card */}
              <div className="relative w-[420px] h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-navy-950/50">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  {/* Scales of Justice SVG */}
                  <svg className="w-40 h-40 text-gold-500/80 mb-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="50" y1="15" x2="50" y2="85" strokeLinecap="round" />
                    <line x1="20" y1="30" x2="80" y2="30" strokeLinecap="round" />
                    <circle cx="50" cy="15" r="4" fill="currentColor" />
                    <path d="M15 50 L20 30 L25 50" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 50 Q20 58 25 50" strokeLinecap="round" />
                    <path d="M75 45 L80 30 L85 45" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M75 45 Q80 53 85 45" strokeLinecap="round" />
                    <rect x="44" y="82" width="12" height="4" rx="2" fill="currentColor" />
                    <rect x="40" y="86" width="20" height="3" rx="1.5" fill="currentColor" />
                  </svg>

                  <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-playfair)] text-center mb-3">
                    Justice & Integrity
                  </h3>
                  <p className="text-navy-300 text-center text-sm leading-relaxed">
                    Committed to delivering exceptional legal outcomes with unwavering dedication to our clients.
                  </p>

                  {/* Floating badges */}
                  <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    {["Family", "Corporate", "Criminal", "Property"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-medium"
                      >
                        {tag} Law
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-navy-800 border border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Free Consultation</div>
                  <div className="text-navy-400 text-xs">No obligation required</div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute -top-4 -right-4 bg-navy-800 border border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-white text-sm font-semibold">4.9/5 Rating</div>
                <div className="text-navy-400 text-xs">Google Reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

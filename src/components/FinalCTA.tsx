"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-navy-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 text-sm font-medium">
              Don&apos;t Wait — Time-Sensitive Legal Matters Need Immediate Action
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6 leading-tight">
            Need Legal Help?{" "}
            <span className="text-gold-gradient">Act Now.</span>
          </h2>

          <p className="text-navy-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Every moment counts in legal matters. Get expert advice from our
            experienced solicitors today — your first consultation is completely
            free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 px-10 py-4.5 rounded-xl text-lg font-bold transition-all duration-300 shadow-xl shadow-gold-600/25 hover:shadow-gold-500/40 hover:-translate-y-1"
            >
              Book Your Consultation
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="tel:+441234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-gold-500/50 text-white hover:text-gold-400 px-10 py-4.5 rounded-xl text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0123 456 7890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

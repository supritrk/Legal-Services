"use client";

import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Free Initial Consultation",
    description: "Get expert legal advice at no cost. We assess your case before you commit.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Confidential & Secure",
    description: "Your information is protected under strict solicitor-client privilege.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Expert Legal Advisors",
    description: "Work with qualified solicitors who specialise in your area of law.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Response Time",
    description: "We respond to all enquiries within 24 hours, often much sooner.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-64 h-64 bg-gold-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-64 h-64 bg-navy-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <AnimatedSection>
            <div>
              <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
                The Sterling Advantage
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-[family-name:var(--font-playfair)] mb-6 leading-tight">
                Why Clients Choose{" "}
                <span className="text-gold-gradient">Us</span>
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed mb-8">
                We combine decades of legal experience with a client-first
                approach. Every case receives our full attention and
                dedication.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-navy-900/25"
              >
                Get Started Today
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </AnimatedSection>

          {/* Right column — Benefits list */}
          <div className="space-y-5">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.12}>
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:border-navy-100 hover:bg-navy-50/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 flex items-center justify-center shadow-md shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-navy-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import AnimatedSection from "./AnimatedSection";

const badges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "SRA Regulated",
    description: "Fully regulated by the Solicitors Regulation Authority",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "10+ Years Experience",
    description: "A decade of trusted legal expertise and results",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "500+ Clients Served",
    description: "Hundreds of satisfied clients across the UK",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "5★ Google Rating",
    description: "Consistently rated 5 stars by our clients",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 font-[family-name:var(--font-playfair)]">
              Trusted by Hundreds of Clients
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, i) => (
            <AnimatedSection key={badge.title} delay={i * 0.1}>
              <div className="group relative bg-navy-50/50 hover:bg-navy-900 border border-navy-100 hover:border-navy-800 rounded-2xl p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-50 text-gold-600 group-hover:bg-gold-500/20 group-hover:text-gold-400 mb-4 transition-colors duration-500 mx-auto">
                  {badge.icon}
                </div>
                <h3 className="font-bold text-navy-900 group-hover:text-white text-base sm:text-lg mb-2 transition-colors duration-500">
                  {badge.title}
                </h3>
                <p className="text-navy-500 group-hover:text-navy-300 text-sm leading-relaxed transition-colors duration-500">
                  {badge.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

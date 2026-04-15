"use client";

import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0 2.278-3.694 4.125-8.25 4.125S4.5 10.528 4.5 8.25" />
      </svg>
    ),
    title: "Family Law",
    description:
      "Expert guidance through divorce, child custody, and family disputes. We protect your family's interests with compassion and care.",
    features: ["Divorce & Separation", "Child Custody", "Prenuptial Agreements"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Corporate Law",
    description:
      "Comprehensive business legal solutions from formation to compliance. We help your business thrive legally and ethically.",
    features: ["Company Formation", "Contract Law", "Regulatory Compliance"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
    title: "Criminal Defence",
    description:
      "Vigorous defence of your rights in all criminal matters. We stand by you when you need it most, ensuring fair representation.",
    features: ["Magistrates Court", "Crown Court", "Appeals & Reviews"],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Property Law",
    description:
      "Navigate property transactions with confidence. From conveyancing to disputes, our team ensures smooth property dealings.",
    features: ["Conveyancing", "Property Disputes", "Lease Agreements"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-navy-50/30 relative">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 font-[family-name:var(--font-playfair)] mb-5">
              Legal Services Tailored to{" "}
              <span className="text-gold-gradient">Your Needs</span>
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed">
              Our experienced team provides expert legal advice across a wide
              range of practice areas.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 sm:p-10 border border-navy-100 hover:border-gold-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-navy-900/5 hover:-translate-y-1 h-full">
                {/* Gold accent bar */}
                <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gold-500 group-hover:to-gold-600 group-hover:text-navy-950 transition-all duration-500 shadow-lg shadow-navy-900/20 group-hover:shadow-gold-500/30">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-[family-name:var(--font-playfair)]">
                      {service.title}
                    </h3>
                    <p className="text-navy-500 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-navy-600"
                        >
                          <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

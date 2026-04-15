"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Family Law Client",
    content:
      "Sterling & Associates handled my divorce with incredible professionalism and sensitivity. They made an incredibly difficult time far more manageable. I couldn't have asked for better representation.",
    rating: 5,
  },
  {
    name: "James Richardson",
    role: "Corporate Client",
    content:
      "Their corporate law team helped us navigate a complex merger seamlessly. Their attention to detail and strategic thinking saved us both time and money. Truly exceptional service.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Property Law Client",
    content:
      "From start to finish, the conveyancing process was handled expertly. They kept me informed at every stage and dealt with all the paperwork efficiently. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-navy-950 relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-20 left-[10%] w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-navy-700/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Client Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-5">
              What Our Clients{" "}
              <span className="text-gold-gradient">Say</span>
            </h2>
            <p className="text-navy-300 text-lg">
              Real feedback from real clients. Their success is our greatest
              achievement.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <div className="group relative bg-navy-900/50 border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                {/* Quote mark */}
                <svg
                  className="w-10 h-10 text-gold-500/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>

                <p className="text-navy-200 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-gold-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-navy-400 text-xs">{t.role}</div>
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

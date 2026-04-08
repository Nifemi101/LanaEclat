import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const treatments = [
  {
    icon: "💧",
    badge: "STARTER FACIAL",
    title: "Hydrating Facial",
    description:
      "Designed for first-time clients and sensitive skin. Restores moisture and strengthens the skin barrier.",
    duration: "45 mins",
  },
  {
    icon: "🌸",
    badge: null,
    title: "Sensitive / Calming Facial",
    description:
      "Soothes redness, irritation, and stressed skin while restoring balance and comfort.",
    duration: "45 mins",
  },
  {
    icon: "✦",
    badge: null,
    title: "Exfoliating Facial",
    description:
      "Deep yet gentle exfoliation to remove dead skin cells, refine texture, and promote skin renewal.",
    duration: "45 mins",
  },
];

const TreatmentsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ease = "power4.out";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.fromTo(
        ".anim-label",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease },
      )
        .fromTo(
          ".anim-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.3",
        )
        .fromTo(
          ".anim-divider",
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.8,
            ease,
            transformOrigin: "center",
          },
          "-=0.4",
        )
        .fromTo(
          ".anim-card",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.9, ease, stagger: 0.15 },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 py-20"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <p className="anim-label text-xs font-semibold tracking-[0.22em] uppercase text-[#b5345a] mb-3">
          What We Offer
        </p>
        <h2 className="anim-title font-serif text-4xl md:text-5xl text-[#1e0e14] font-normal">
          Our Facial Treatments
        </h2>

        {/* Divider */}
        <div className="anim-divider flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-40 bg-[#e0b8c4]" />
          <span className="text-[#b5345a] text-base">◆</span>
          <div className="h-px w-40 bg-[#e0b8c4]" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {treatments.map((t, i) => (
          <div
            key={i}
            className="anim-card relative bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4"
          >
            {/* Badge */}
            {t.badge && (
              <span className="absolute -top-3 left-5 bg-[#b5345a] text-white text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full">
                {t.badge}
              </span>
            )}

            {/* Icon */}
            <div className="text-3xl mt-2">{t.icon}</div>

            {/* Title & Description */}
            <div>
              <h3 className="font-semibold text-[#1e0e14] text-base mb-2">
                {t.title}
              </h3>
              <p className="text-[#7a5a62] text-sm leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#f0dde2] mt-auto" />

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-[#9a7a84] text-xs flex items-center gap-1">
                🕐 {t.duration}
              </span>
              <button className="text-[#b5345a] text-sm font-semibold hover:gap-2 transition-all">
                Book →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-7 py-3 bg-[#b5345a] text-white text-sm font-semibold rounded-full hover:bg-[#8f2244] transition-colors duration-300 shadow-md tracking-wide">
          View All Services →
        </button>
      </div>
    </section>
  );
};

export default TreatmentsSection;

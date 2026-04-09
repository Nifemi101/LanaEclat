import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShampooIcon,
  TestTubeDiagonalIcon,
  HealtcareIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
  {
    icon: ShampooIcon,
    title: "Quality Products",
    description:
      "Only premium, skin-safe formulations used in every treatment.",
  },
  {
    icon: TestTubeDiagonalIcon,
    title: "Sterilized Tools",
    description: "Every tool is cleaned and sterilized before each session.",
  },
  {
    icon: HealtcareIcon,
    title: "Personalized Care",
    description: "Tailored approach for your unique skin type and concerns.",
  },
  {
    icon: SparklesIcon,
    title: "Visible Results",
    description: "See the difference from your very first session.",
  },
];

const WhySection = () => {
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
          ".anim-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.3",
        )
        .fromTo(
          ".anim-italic",
          { opacity: 0, y: 40, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease },
          "-=0.6",
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
          ".anim-feature",
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.7, ease, stagger: 0.15 },
          "-=0.3",
        )
        .fromTo(
          ".anim-card",
          { opacity: 0, x: 60, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, ease },
          "-=1.0",
        )
        .fromTo(
          ".anim-card-inner",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.5",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-center gap-16"
    >
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        {/* Label */}
        <p className="anim-label text-xs font-semibold tracking-[0.22em] uppercase text-[#b5345a] mb-4">
          Why Lana Éclat
        </p>

        {/* Heading */}
        <h2 className="anim-heading font-serif text-4xl md:text-5xl font-bold text-[#1e0e14] leading-tight">
          We treat skin with care,
        </h2>
        <h2 className="anim-italic font-serif text-4xl md:text-5xl italic text-[#b5345a] leading-tight mb-6">
          not shortcuts
        </h2>

        {/* Divider */}
        <div className="anim-divider flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#e0b8c4]" />
          <span className="text-[#b5345a] text-base">◆</span>
          <div className="h-px flex-1 bg-[#e0b8c4]" />
        </div>

        {/* Feature List */}
        <ul className="flex flex-col gap-5">
          {features.map((f, i) => (
            <li key={i} className="anim-feature flex items-start gap-4">
              <HugeiconsIcon
                icon={f.icon}
                size={22}
                color="#b5345a"
                className="mt-0.5 shrink-0"
              />

              <div>
                <p className="font-semibold text-[#1e0e14] text-sm mb-0.5">
                  {f.title}
                </p>
                <p className="text-[#7a5a62] text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Card */}
      <div className="anim-card flex-1 max-w-sm w-full">
        <div className="border border-[#d4a0b0] rounded-3xl p-10 bg-white/60 backdrop-blur-sm shadow-sm flex flex-col items-center text-center gap-5">
          <div className="anim-card-inner flex flex-col items-center gap-5 w-full">
            {/* Special Offer Label */}
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#b5345a]">
              Special Offer
            </p>

            {/* Title */}
            <h3 className="font-serif text-4xl text-[#1e0e14] font-normal leading-tight">
              First-Time <br /> Clients
            </h3>

            <span className="text-[#c9a84c] text-xl">◆</span>

            {/* Description */}
            <p className="text-[#4a3038] text-sm leading-relaxed">
              Get a special discount on your first facial treatment at Lana
              Éclat.
            </p>

            <p className="text-[#b5345a] text-xs font-medium">
              Limited slots available — book early!
            </p>
            <Link to="/booking" className="w-60">
              <button className="w-60 mt-2 py-3 bg-pink-800 hover:bg-pink-900 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-colors duration-300 shadow-md">
                Claim Your Offer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

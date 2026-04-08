import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skinIMG from "../assets/IMG 1.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease },
      )
        .fromTo(
          ".anim-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.4",
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
          ".anim-para",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease, stagger: 0.2 },
          "-=0.4",
        )
        .fromTo(
          ".anim-card",
          { opacity: 0, x: 60, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, ease },
          "-=1.2",
        )
        .fromTo(
          ".anim-card-text",
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
      className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <p className="anim-label text-xs font-semibold tracking-[0.2em] uppercase text-[#7a3e48] mb-4">
          About the Studio
        </p>

        <h2 className="anim-heading font-serif text-4xl md:text-5xl font-bold text-[#2a1a1f] leading-tight">
          Where skin finds
        </h2>
        <h2 className="anim-italic font-serif text-4xl md:text-5xl italic text-[#b5345a] leading-tight mb-6">
          its radiance
        </h2>

        <div className="anim-divider flex items-center gap-3 mb-7">
          <div className="h-px flex-1 bg-[#c9a0a8]" />
          <span className="text-[#b5345a] text-lg">◆</span>
          <div className="h-px flex-1 bg-[#c9a0a8]" />
        </div>

        <p className="anim-para text-[#4a3038] text-base leading-relaxed mb-5 font-light">
          At Lana Éclat, we believe every skin tells a story — and we're here to
          help yours shine. Based in the heart of Kabba, Kogi State, our studio
          brings professional-grade skincare with a personal touch that feels
          like home.
        </p>
        <Link to="/about">
          <button className="mt-6 px-8 py-3 bg-pink-800 text-white rounded-full font-medium hover:bg-pink-900 transition-colors duration-300 shadow-lg">
            Learn More
          </button>
        </Link>
      </div>

      {/* Right Card */}
      <div className="anim-card flex-1 max-w-md w-full">
        <div className="relative rounded-3xl overflow-hidden min-h-95 shadow-2xl flex flex-col items-center justify-end p-10">
          {/* Background Image */}
          <img
            src={skinIMG}
            alt="Skincare treatment"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark gradient overlay for text*/}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Card Text */}
          <div className="anim-card-text relative z-10 text-center">
            <p className="text-white font-serif text-3xl font-semibold leading-snug drop-shadow-md">
              Real skin. Real results.{" "}
              <span className="italic font-bold">Real glow.</span>
            </p>

            <p className="text-white/70 text-sm mt-4 tracking-wide">
              Your glow journey starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

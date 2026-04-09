import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BannerSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ease = "power4.out";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.fromTo(
        ".anim-banner-label",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease }
      )
        .fromTo(
          ".anim-banner-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.3"
        )
        .fromTo(
          ".anim-banner-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease, stagger: 0.15 },
          "-=0.5"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="bg-linear-to-r from-[#7a1a40] via-[#b5345a] to-[#c9607a] px-8 md:px-16 lg:px-24 py-14 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Decorative blob top right */}
        <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-[#d4507a] opacity-25 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 right-30 w-36 h-36 rounded-full bg-[#e07090] opacity-20 blur-2xl pointer-events-none" />

        {/* Left Text */}
        <div className="relative z-10">
          <p className="anim-banner-label text-white/70 text-xs font-medium tracking-[0.25em] uppercase mb-3">
            Start Today
          </p>
          <h2 className="anim-banner-heading font-serif text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Your glow journey{" "}
            <span className="italic font-semibold">starts here</span>
          </h2>
        </div>

        {/* Right Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
          <Link to="/booking">
            <button className="anim-banner-btn px-7 py-3 bg-white text-[#7a1a40] text-xs font-bold tracking-[0.18em] uppercase rounded-full hover:bg-pink-50 transition-colors duration-300 shadow-md whitespace-nowrap">
              Book Appointment
            </button>
          </Link>
          <Link to="https://wa.me/2348104461674">
            <button className="anim-banner-btn px-7 py-3 bg-transparent border border-white text-white text-xs font-bold tracking-[0.18em] uppercase rounded-full hover:bg-white/10 transition-colors duration-300 whitespace-nowrap">
              WhatsApp Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BannerSection;
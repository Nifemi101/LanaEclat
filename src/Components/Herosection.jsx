import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Herosection = () => {
  const heroContainerRef = useRef(null);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      /* location Animation */
      timeline
        .from(".hero-tag", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        })

        /* headline animation */
        .from(
          ".hero-title-line",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.4",
        )

        /*  subtitle animation */
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6",
        )

        /*  button animation */
        .from(
          ".hero-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.5",
        );
    },
    { scope: heroContainerRef },
  );

  return (
    <div
      ref={heroContainerRef}
      className="min-h-screen bg-pink-50 flex flex-col font-sans items-center justify-center text-center px-4"
    >
      <span className="hero-tag text-sm font-semibold tracking-widest text-gray-500 mb-1">
        KABBA, KOGI STATE
      </span>

      <h1 className="text-6xl md:text-8xl font-serif text-pink-900 mb-6 leading-tight">
        <div className="hero-title-line">Your Skin,</div>
        <div className="hero-title-line text-pink-700">Our Passion.</div>
      </h1>

      <p className="hero-subtitle text-lg md:text-xl text-gray-600 italic mb-10">
        "Because glowing skin is not a luxury—it's a lifestyle."
      </p>

      <div className="flex space-x-5">
  <button className="hero-btn bg-pink-800 text-white p-4 md:px-6 md:py-3 text-xs md:text-base rounded-full font-medium hover:bg-pink-900 transition-colors whitespace-nowrap">
    BOOK APPOINTMENT
  </button>
  <button className="hero-btn border-2 border-pink-200 text-pink-800 px-3 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-full font-medium hover:bg-pink-800 hover:text-white transition-colors whitespace-nowrap">
    OUR SERVICES
  </button>
</div>
    </div>
  )
};

export default Herosection;

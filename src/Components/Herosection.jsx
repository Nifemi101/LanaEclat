import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Herosection = () => {
  const heroContainerRef = useRef(null);
  const ribbonRef = useRef(null);

  const ribbonItems = [
    "VISIBLE RESULTS",
    "GENTLE TOUCH",
    "REAL GLOW",
    "KABBA, KOGI",
    "PROFESSIONAL SKINCARE",
  ];

  const movingItems = [
    ...ribbonItems,
    ...ribbonItems,
    ...ribbonItems,
    ...ribbonItems,
  ];

  useGSAP(
    () => {
      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      timeline
        .from(".hero-tag", { y: 20, opacity: 0, duration: 0.8 })
        .from(
          ".hero-title-line",
          { y: 40, opacity: 0, duration: 1, stagger: 0.2 },
          "-=0.4",
        )
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(
          ".hero-btn",
          { 
            y: 30, 
            opacity: 0, 
            duration: 1, 
            stagger: 0.15, 
            clearProps: "all" 
          },
          "-=0.5",
        )
        .from(
          ".stat-item",
          { y: 20, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.4",
        );
    },
    { scope: heroContainerRef },
  );

  useGSAP(() => {
    gsap.to(ribbonRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    });
  });

  return (
    <div className="flex flex-col min-h-screen bg-linear-to-b from-[#FFF5F7] to-white font-sans overflow-hidden">
      {/*MAIN CONTENT*/}
      <div
        ref={heroContainerRef}
        className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 md:pt-40"
      >
        <span className="hero-tag text-xs md:text-sm font-semibold tracking-widest text-gray-500 mb-4 md:mb-5 uppercase">
          KABBA, KOGI STATE
        </span>

        <h1 className="text-6xl md:text-8xl font-serif text-pink-900 mb-6 leading-tight">
          <div className="hero-title-line">Your Skin,</div>
          <div className="hero-title-line text-pink-700">Our Passion.</div>
        </h1>

        <p className="hero-subtitle text-lg md:text-xl text-gray-600 italic mb-10 max-w-2xl">
          "Because glowing skin is not a luxury—it's a lifestyle."
        </p>

        <div className="flex space-x-5 mb-12">
        <Link
        to= "/booking">
          <button className="hero-btn bg-pink-800 text-white p-4 md:px-8 md:py-3 text-xs md:text-base rounded-full font-medium hover:bg-pink-900 transition-colors shadow-lg hover:shadow-pink-200/50 whitespace-nowrap">
            BOOK APPOINTMENT
          </button>
          </Link>
          <Link
          to= "/services">
          <button className="hero-btn border-2 border-pink-200 text-pink-800 px-3 py-2 md:px-8 md:py-3 text-xs md:text-base rounded-full font-medium hover:bg-pink-800 hover:text-white transition-colors whitespace-nowrap">
            OUR SERVICES
          </button>
          </Link>
        </div>

        {/* STATS SECTION */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-12 w-full max-w-4xl mx-auto pb-16">
          <div className="stat-item flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-serif text-[#B04A6B] mb-2">
              7+
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Facial Treatments
            </span>
          </div>
          <div className="stat-item w-px h-12 md:h-16 bg-pink-200/50" />
          <div className="stat-item flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl font-serif text-[#B04A6B] mb-2">
              100%
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Quality Products
            </span>
          </div>
          <div className="stat-item w-px h-12 md:h-16 bg-pink-200/50" />
          <div className="stat-item flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-10 md:h-12 mb-2">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-[#B04A6B]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C12 0 13.5 9 24 12C13.5 15 12 24 12 24C12 24 10.5 15 0 12C10.5 9 12 0 12 0Z" />
              </svg>
            </div>
            <span className="text-[10px] md:text-xs font-semibold text-gray-400 tracking-widest uppercase">
              Real Results
            </span>
          </div>
        </div>
      </div>

      {/* text ribbon*/}
      <div className="w-full bg-[#B04A6B] py-3 md:py-5 overflow-hidden flex whitespace-nowrap relative z-10">
        <div ref={ribbonRef} className="flex w-max items-center">
          {movingItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                {item}
              </span>
              <svg
                className="w-3 h-3 md:w-4 md:h-4 text-white mx-8 md:mx-12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C12 0 13.5 9 24 12C13.5 15 12 24 12 24C12 24 10.5 15 0 12C10.5 9 12 0 12 0Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Herosection;
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { lazy, Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoader";

const FormSection = lazy(() => import("../Components/FormSection"));

const BookingPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scoping GSAP to look only inside containerRef
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".anim-top",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 },
      )
        .fromTo(
          ".anim-heading",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          "-=0.6",
        )
        .fromTo(
          ".anim-line",
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1 },
          "-=0.8",
        )
        .fromTo(
          ".anim-sub",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6",
        );
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex min-h-[60vh] flex-col items-center justify-center bg-[#FCF1F4] px-4 text-center overflow-hidden"
    >
      {/* Label */}
      <span className="anim-top mb-4 mt-33 block text-[13px] font-semibold uppercase tracking-[0.3em] text-[#CD6A81]">
        Get in touch
      </span>

      {/* Heading - Note: Added 'font-serif' assuming you have Playfair or similar set in tailwind.config */}
      <h1 className="anim-heading mb-6 font-serif text-6xl md:text-8xl font-light leading-tight text-[#2A2022]">
        Book Your <span className="italic text-[#A53A5A]">Glow</span>
      </h1>

      {/* Decorative Divider */}
      <div className="anim-line mb-6 flex w-full max-w-125 items-center gap-4 opacity-0">
        <div className="h-px flex-1 bg-[#EBBBCD]" />
        <div className="h-2 w-2 rotate-45 bg-[#BB5872]" />
        <div className="h-px flex-1 bg-[#EBBBCD]" />
      </div>

      {/* Subtext */}
      <p className="anim-sub font-serif text-xl italic text-[#5C5456]">
        Secure your spot. Your skin has been waiting.
      </p>

      <Suspense fallback={<SkeletonLoader />}><FormSection /></Suspense>
    </section>
  );
};

export default BookingPage;

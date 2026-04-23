import { lazy, Suspense } from "react";
import SkeletonLoader from "../Components/SkeletonLoader";

const FormSection = lazy(() => import("../Components/FormSection"));

const BookingPage = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-[#FCF1F4] px-4 text-center overflow-hidden">
      {/* Label */}
      <span className="mb-4 mt-33 block text-[13px] font-semibold uppercase tracking-[0.3em] text-[#CD6A81]">
        Get in touch
      </span>

      {/* Heading */}
      <h1 className="mb-6 font-serif text-6xl md:text-8xl font-light leading-tight text-[#2A2022]">
        Book Your <span className="italic text-[#A53A5A]">Glow</span>
      </h1>

      {/* Decorative Divider */}
      <div className="mb-6 flex w-full max-w-125 items-center gap-4">
        <div className="h-px flex-1 bg-[#EBBBCD]" />
        <div className="h-2 w-2 rotate-45 bg-[#BB5872]" />
        <div className="h-px flex-1 bg-[#EBBBCD]" />
      </div>

      {/* Subtext */}
      <p className="font-serif text-xl italic text-[#5C5456]">
        Secure your spot. Your skin has been waiting.
      </p>

      <Suspense fallback={<SkeletonLoader />}><FormSection /></Suspense>
    </section>
  );
};

export default BookingPage;
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  StarIcon,
  PlusSignIcon,
  MinusSignIcon,
  Clock01Icon,
  FlowerIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const facials = [
  {
    id: "facial-1",
    number: "01",
    name: "Essential facials",
    badge: "BEGINNER",
    badgeColor: "#9D174D",
    duration: "40 minutes",
    price: "₦12,000",
    session: "40 minutes",
    description:
      "A gentle, refreshing facial perfect for first-timers or maintenance care. This treatment includes deep cleansing to remove dirt and oil buildup, light steaming to open up the pores, and a basic mask to hydrate and soothe the skin. Best for: normal, dry, or slightly sensitive skin needing a simple glow boost.",
  },
  {
    id: "facial-2",
    number: "02",
    name: "Glow facials",
    badge: "MOST POPULAR",
    badgeColor: "#9D174D",
    duration: "60 minutes",
    price: "₦18,000",
    session: "60 minutes",
    description:
      "A radiance-boosting treatment designed to give you an instant, lasting glow. Combines exfoliation, brightening serums, and a vitamin-rich mask to even skin tone and restore luminosity. Best for: dull, tired, or uneven skin that needs a visible refresh.",
  },
  {
    id: "facial-3",
    number: "03",
    name: "Advanced treatment facials",
    badge: "FOR PROBLEMATIC SKINS",
    badgeColor: "#9D174D",
    duration: "1hr",
    price: "₦22,000",
    session: "1hr",
    description:
      "A targeted, results-driven facial formulated for acne-prone, congested, or sensitive skin. Includes deep extractions, calming actives, and a healing mask to reduce breakouts and inflammation. Best for: oily, acne-prone, or reactive skin types requiring clinical-level care.",
  },
  {
    id: "facial-4",
    number: "04",
    name: "Éclat Luxury facial",
    badge: "LUXURY",
    badgeColor: "#9D174D",
    duration: "1hr 30min",
    price: "₦35,000",
    session: "1hr 30min",
    description:
      "Our most indulgent and results-driven facial. This treatment combines advanced techniques with premium products, including a gold mask for deep nourishment, V-face lifting for contouring, and a deeply relaxing experience. Result: lifted, radiant, hydrated, and visibly rejuvenated skin.",
  },
];

const waxing = [
  {
    id: "wax-1",
    number: "01",
    name: "Underarm hard wax",
    badge: "BEST",
    badgeColor: "#9D174D",
    duration: "20 mins",
    price: "₦8,000",
    session: "20 mins",
    description:
      "Our most recommended underarm waxing method. Hard wax grips the hair directly without adhering to the skin, making it gentler and more effective for coarse or short underarm hair. Leaves skin smooth and irritation-free. Best for: sensitive underarm skin or first-time waxing clients.",
  },
  {
    id: "wax-2",
    number: "02",
    name: "Underarms strip/soft wax",
    badge: null,
    badgeColor: null,
    duration: "20 mins",
    price: "₦6,500",
    session: "20 mins",
    description:
      "A quick and effective underarm wax using soft strip wax. Applied in a thin layer and removed with a strip, this method is ideal for fine underarm hair and fast turnaround. Best for: clients with fine hair or those returning for regular maintenance.",
  },
  {
    id: "wax-3",
    number: "03",
    name: "Half arm wax",
    badge: null,
    badgeColor: null,
    duration: "30 mins",
    price: "₦7,500",
    session: "30 mins",
    description:
      "Smooth, hair-free arms from the wrist to the elbow. Uses soft strip wax for an efficient, even result on the forearm area. Best for: clients wanting arm hair removal without a full-arm commitment.",
  },
  {
    id: "wax-4",
    number: "04",
    name: "Full arm wax",
    badge: null,
    badgeColor: null,
    duration: "35 mins",
    price: "₦10,500",
    session: "35 mins",
    description:
      "Complete arm waxing from wrist to shoulder for a fully smooth finish. Both the forearm and upper arm are treated for a uniform, clean result. Best for: clients who want completely hair-free arms for an extended period.",
  },
  {
    id: "wax-5",
    number: "05",
    name: "Half leg wax",
    badge: null,
    badgeColor: null,
    duration: "35 mins",
    price: "₦12,500",
    session: "35 mins",
    description:
      "Silky-smooth legs from the ankle to the knee. Strip wax is applied carefully for thorough hair removal on the lower leg. Best for: clients who want quick, efficient lower-leg hair removal between full sessions.",
  },
  {
    id: "wax-6",
    number: "06",
    name: "Full leg wax",
    badge: null,
    badgeColor: null,
    duration: "40 mins",
    price: "₦22,500",
    session: "40 mins",
    description:
      "Full leg waxing from ankle to thigh for completely smooth, hair-free legs. Both the lower and upper leg are treated for a flawless, long-lasting result. Best for: clients wanting total leg smoothness ahead of events, travel, or the warmer months.",
  },
];

const AccordionItem = ({ item, index, isOpen, onToggle, contentRef }) => (
  <div
    className={`transition-colors duration-300 ${
      isOpen ? "bg-[#fdf5f7]" : "bg-white"
    } ${index !== 0 ? "border-t border-[#e8cdd5]" : ""}`}
  >
    <button
      onClick={() => onToggle(item.id)}
      className="w-full flex items-center gap-4 px-8 py-6 text-left group"
    >
      <span className="text-[#d4a0b0] font-serif text-2xl w-8 shrink-0 select-none">
        {item.number}
      </span>

      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <span className="font-semibold text-[#1e0e14] text-base md:text-lg">
          {item.name}
        </span>
        {item.badge && (
          <span
            className="inline-flex self-start text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: item.badgeColor }}
          >
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-1.5 text-[#9a7480]">
          <HugeiconsIcon icon={Clock01Icon} size={14} color="#9a7480" />
          <span className="text-sm">{item.duration}</span>
        </div>
        <div
          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "bg-[#b5345a] border-[#b5345a]"
              : "bg-white border-[#d4a0b0] group-hover:border-[#b5345a]"
          }`}
        >
          <HugeiconsIcon
            icon={isOpen ? MinusSignIcon : PlusSignIcon}
            size={14}
            color={isOpen ? "#fff" : "#b5345a"}
          />
        </div>
      </div>
    </button>

    <div ref={contentRef} style={{ overflow: "hidden" }}>
      <div className="px-8 pb-8">
        <div className="pl-14">
          <p className="text-[#5c3d47] text-sm md:text-base leading-relaxed mb-6">
            {item.description}
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <button className="bg-pink-800 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-pink-900 transition-colors duration-200">
                Book This Treatment
              </button>
              <span className="text-[#9a7480] text-sm">
                Session: {item.session}
              </span>
            </div>
            <span className="font-mono text-2xl text-[#b5345a]">
              {item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicePage = () => {
  const heroRef = useRef(null);
  const facialsRef = useRef(null);
  const waxingRef = useRef(null);

  const [openId, setOpenId] = useState(null);

  const facialContentRefs = useRef([]);
  const waxingContentRefs = useRef([]);

  useGSAP(
    () => {
      const ease = "power4.out";
      gsap
        .timeline()
        .fromTo(
          ".anim-label",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease },
        )
        .fromTo(
          ".anim-heading",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease },
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
          "-=0.5",
        )
        .fromTo(
          ".anim-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease },
          "-=0.4",
        )
        .fromTo(
          ".anim-bar",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease },
          "-=0.3",
        )
        .fromTo(
          ".anim-step",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6, ease, stagger: 0.12 },
          "-=0.4",
        );
    },
    { scope: heroRef },
  );

  useGSAP(
    () => {
      const ease = "power3.out";
      gsap.fromTo(
        ".anim-facials-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease,
          scrollTrigger: {
            trigger: ".anim-facials-header",
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".anim-facials-row",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".anim-facials-wrapper",
            start: "top 80%",
          },
        },
      );
    },
    { scope: facialsRef },
  );

  useGSAP(
    () => {
      const ease = "power3.out";
      gsap.fromTo(
        ".anim-waxing-header",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease,
          scrollTrigger: {
            trigger: ".anim-waxing-header",
            start: "top 85%",
          },
        },
      );
      gsap.fromTo(
        ".anim-waxing-row",
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease,
          stagger: 0.09,
          scrollTrigger: {
            trigger: ".anim-waxing-wrapper",
            start: "top 82%",
          },
        },
      );
    },
    { scope: waxingRef },
  );

  const animatePanel = (panel, shouldOpen) => {
    if (!panel) return;
    if (shouldOpen) {
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: panel.scrollHeight,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => gsap.set(panel, { height: "auto" }),
        },
      );
    } else {
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => gsap.set(panel, { display: "none" }),
      });
    }
  };

  useEffect(() => {
    const allRefs = [
      ...facialContentRefs.current,
      ...waxingContentRefs.current,
    ];
    const allIds = [...facials.map((f) => f.id), ...waxing.map((w) => w.id)];
    allRefs.forEach((panel, i) => {
      animatePanel(panel, allIds[i] === openId);
    });
  }, [openId]);

  useEffect(() => {
    [...facialContentRefs.current, ...waxingContentRefs.current].forEach(
      (panel) => {
        if (panel) gsap.set(panel, { height: 0, opacity: 0, display: "none" });
      },
    );
  }, []);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section ref={heroRef} className="bg-[#fdf0f3] pt-36 pb-0 flex flex-col">
      <div className="flex flex-col items-center text-center px-8 md:px-16 lg:px-24 pb-16">
        <p className="anim-label text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b5345a] mb-5">
          What We Offer
        </p>
        <h1 className="anim-heading font-serif text-6xl md:text-7xl lg:text-8xl text-[#1e0e14] font-normal leading-tight">
          Our <span className="italic text-[#b5345a]">Treatments</span>
        </h1>
        <div className="anim-divider flex items-center gap-3 mt-7 mb-7 w-full max-w-xl">
          <div className="h-px flex-1 bg-[#e0b8c4]" />
          <span className="text-[#b5345a] text-sm">◆</span>
          <div className="h-px flex-1 bg-[#e0b8c4]" />
        </div>
        <p className="anim-sub font-serif italic text-[#7a5a62] text-lg md:text-xl">
          10 professional treatments across massages, facials and waxing.
        </p>
      </div>

      <div className="anim-bar bg-[#1e0a14] w-full px-8 md:px-16 lg:px-24 py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0">
          <div className="anim-step flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Consultation
            </span>
          </div>
          <span className="anim-step md:flex items-center justify-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="#b5345a" />
          </span>
          <div className="anim-step flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Custom Treatment
            </span>
          </div>
          <span className="anim-step md:flex items-center justify-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="#b5345a" />
          </span>
          <div className="anim-step flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Aftercare Advice
            </span>
          </div>
          <span className="anim-step md:flex items-center justify-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="#b5345a" />
          </span>
          <div className="anim-step flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Glowing Results
            </span>
            <span className="flex items-center justify-center">
              <HugeiconsIcon icon={StarIcon} size={13} color="#b5345a" />
            </span>
          </div>
        </div>
      </div>

      <div
        ref={facialsRef}
        className="w-full px-8 md:px-16 lg:px-24 pt-20 pb-12"
      >
        <div className="anim-facials-header flex items-center gap-4 mb-10">
          <HugeiconsIcon icon={FlowerIcon} size={22} color="#b5345a" />
          <div>
            <h2 className="font-serif text-3xl text-[#1e0e14] font-normal">
              Facials
            </h2>
            <p className="text-[#9a7480] text-sm mt-0.5">
              Targeted facial treatments for every skin type, concern and goal.
            </p>
          </div>
        </div>

        <div className="anim-facials-wrapper border border-[#e8cdd5] rounded-2xl overflow-hidden">
          {facials.map((item, index) => (
            <div key={item.id} className="anim-facials-row">
              <AccordionItem
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={handleToggle}
                contentRef={(el) => (facialContentRefs.current[index] = el)}
              />
            </div>
          ))}
        </div>
      </div>

      <div ref={waxingRef} className="w-full px-8 md:px-16 lg:px-24 pb-20">
        <div className="anim-waxing-header flex items-center gap-4 mb-10">
          <HugeiconsIcon icon={SparklesIcon} size={22} color="#e09a3a" />

          <div>
            <h2 className="font-serif text-3xl text-[#1e0e14] font-normal">
              Waxing
            </h2>
            <p className="text-[#9a7480] text-sm mt-0.5">
              Smooth, precise waxing for lasting results and silky-soft skin.
            </p>
          </div>
        </div>

        <div className="anim-waxing-wrapper border border-[#e8cdd5] rounded-2xl overflow-hidden">
          {waxing.map((item, index) => (
            <div key={item.id} className="anim-waxing-row">
              <AccordionItem
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={handleToggle}
                contentRef={(el) => (waxingContentRefs.current[index] = el)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

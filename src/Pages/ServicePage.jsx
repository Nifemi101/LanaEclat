import { useState } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  PlusSignIcon,
  MinusSignIcon,
  ShampooIcon,
  TestTubeDiagonalIcon,
  Mortarboard02Icon,
  MailLove01Icon,
} from "@hugeicons/core-free-icons";

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
    badge: "POPULAR",
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

const AccordionItem = ({ item, index, isOpen, onToggle }) => (
  <div
    className={`transition-colors duration-300 ${
      isOpen ? "bg-[#fdf5f7]" : "bg-white"
    } ${index !== 0 ? "border-t border-[#e8cdd5]" : ""}`}
  >
    {/* Header — always visible */}
    <button
      onClick={() => onToggle(item.id)}
      className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left group"
    >
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        <span className="font-semibold text-[#1e0e14] text-base">
          {item.name}
        </span>
        {item.badge && (
          <span
            className="inline-flex self-start text-[7px] font-bold tracking-[0.18em] uppercase px-3 py-2 rounded-full text-white"
            style={{ backgroundColor: item.badgeColor }}
          >
            {item.badge}
          </span>
        )}
      </div>

      <div
        className={`mt-0.5 w-8 h-8 shrink-0 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
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
    </button>

    {/* Expandable content */}
    <div
      style={{
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 0.4s ease",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div className="px-6 pb-6 flex flex-col gap-5">
          {/* Description */}
          <p className="text-[#5c3d47] text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Full-width Book button */}
          <Link to="/booking" className="w-full">
            <button className="w-full md:w-50 bg-[#9D174D] hover:bg-[#831440] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-3.5 rounded-full transition-colors duration-200">
              BOOK THIS TREATMENT
            </button>
          </Link>

          {/* Session + Price row */}
          <div className="flex items-center justify-between">
            <span className="text-[#9a7480] text-sm">
              Session: {item.session}
            </span>
            <span className="font-mono text-xl font-semibold text-[#b5345a]">
              {item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServicePage = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#fdf0f3] pt-36 pb-0 flex flex-col">
      {/* ── HERO ── */}
      <div className="flex flex-col items-center text-center px-8 md:px-16 lg:px-24 pb-16">
        <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b5345a] mb-5">
          What We Offer
        </p>
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#1e0e14] font-normal leading-tight">
          Our <span className="italic text-[#b5345a]">Treatments</span>
        </h1>
        <div className="flex items-center gap-3 mt-7 mb-7 w-full max-w-xl">
          <div className="h-px flex-1 bg-[#e0b8c4]" />
          <span className="text-[#b5345a] text-sm">◆</span>
          <div className="h-px flex-1 bg-[#e0b8c4]" />
        </div>
        <p className="font-serif italic text-[#7a5a62] text-lg md:text-xl">
          10 professional treatments across massages, facials and waxing.
        </p>
      </div>

      {/* ── PROCESS BAR ── */}
      <div className="bg-[#1e0a14] w-full px-8 md:px-16 lg:px-24 py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Consultation
            </span>
          </div>
          <span className="md:flex items-center justify-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="#b5345a" />
          </span>
          <div className="flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Custom Treatment
            </span>
          </div>
          <span className="md:flex items-center justify-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="#b5345a" />
          </span>
          <div className="flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Aftercare Advice
            </span>
          </div>
          <span className="md:flex items-center justify-center">
            <HugeiconsIcon icon={ArrowRight01Icon} size={13} color="#b5345a" />
          </span>
          <div className="flex items-center gap-3">
            <span className="text-white text-[10px] font-bold tracking-[0.22em] uppercase">
              Glowing Results
            </span>
          </div>
        </div>
      </div>

      {/* ── FACIALS ── */}
      <div className="w-full px-8 md:px-16 lg:px-24 pt-20 pb-12">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl text-[#1e0e14] font-normal">
              Facials
            </h2>
            <p className="text-[#9a7480] text-sm mt-0.5">
              Targeted facial treatments for every skin type, concern and goal.
            </p>
          </div>
        </div>

        <div className="border border-[#e8cdd5] rounded-2xl overflow-hidden">
          {facials.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>

      {/* ── WAXING ── */}
      <div className="w-full px-8 md:px-16 lg:px-24 pb-20">
        <div className="flex items-center gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl text-[#1e0e14] font-normal">
              Waxing
            </h2>
            <p className="text-[#9a7480] text-sm mt-0.5">
              Smooth, precise waxing for lasting results and silky-soft skin.
            </p>
          </div>
        </div>

        <div className="border border-[#e8cdd5] rounded-2xl overflow-hidden">
          {waxing.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>

      {/* ── TRUST BANNER ── */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-12 md:gap-4 bg-[#2a1520] py-12 px-8 mb-6 w-full">
        <div className="text-center max-w-62.5 md:max-w-50">
          <div className="flex justify-center mb-4">
            <HugeiconsIcon icon={ShampooIcon} size={45} color="white" />
          </div>
          <p className="text-white font-bold mb-2">Premium Products</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every product we use is carefully selected for safety, efficacy, and skin compatibility.
          </p>
        </div>

        <div className="text-center max-w-62.5 md:max-w-50">
          <div className="flex justify-center mb-4">
            <HugeiconsIcon icon={TestTubeDiagonalIcon} size={45} color="white" />
          </div>
          <p className="text-white font-bold mb-2">Sterilized Tools</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            All tools are thoroughly cleaned and sterilized before each session. Always.
          </p>
        </div>

        <div className="text-center max-w-62.5 md:max-w-50">
          <div className="flex justify-center mb-4">
            <HugeiconsIcon icon={Mortarboard02Icon} size={45} color="white" />
          </div>
          <p className="text-white font-bold mb-2">Trained Hands</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our treatments are performed by trained, passionate therapists who care.
          </p>
        </div>

        <div className="text-center max-w-62.5 md:max-w-50">
          <div className="flex justify-center mb-4">
            <HugeiconsIcon icon={MailLove01Icon} size={45} color="white" />
          </div>
          <p className="text-white font-bold mb-2">Aftercare Support</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            We guide you through your at-home routine to prolong every session's results.
          </p>
        </div>
      </div>

      {/* ── SPECIAL OFFER BANNER ── */}
      <div className="flex flex-col items-center justify-center text-center bg-[#fdf4f5] py-20 px-6 w-full">
        <p className="text-[#b05a72] text-xs tracking-[0.25em] uppercase font-medium mb-4">
          Ready?
        </p>

        <h2 className="font-serif text-4xl md:text-5xl text-[#2e1a22] font-light leading-tight mb-4 max-w-3xl">
          First-time clients get a{" "}
          <span className="italic text-[#b05a72] font-normal">special offer</span>
        </h2>

        <p className="text-[#9e8a8e] text-sm md:text-base mb-10">
          Limited slots available. Book early to secure your spot and your glow.
        </p>

        <Link to="/booking">
          <button className="bg-[#a04060] hover:bg-[#8a3352] text-white text-xs md:text-sm tracking-[0.2em] uppercase font-medium px-10 py-4 rounded-full transition-colors duration-300">
            Book Appointment Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicePage;
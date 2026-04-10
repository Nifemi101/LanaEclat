import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Leaf01Icon,
  MicroscopeIcon,
  HeartCheckIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const values = [
  {
    icon: Leaf01Icon,
    title: "Natural Approach",
    description:
      "We work with your skin's natural processes, not against them.",
    highlight: false,
  },
  {
    icon: MicroscopeIcon,
    title: "Scientific Care",
    description:
      "Evidence-based skincare techniques rooted in dermatological science.",
    highlight: false,
  },
  {
    icon: HeartCheckIcon,
    title: "Personal Touch",
    description:
      "You're not a client — you're a guest, treated with warmth every time.",
    highlight: true,
  },
  {
    icon: SparklesIcon,
    title: "Real Results",
    description: "We measure success by the glow on your face when you leave.",
    highlight: false,
  },
];

const AbooutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const missionRef = useRef(null);

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
        );
    },
    { scope: heroRef },
  );

  useGSAP(
    () => {
      const ease = "power4.out";
      gsap
        .timeline({
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          ".anim-card",
          { opacity: 0, x: -60, scale: 0.96 },
          { opacity: 1, x: 0, scale: 1, duration: 1.1, ease },
        )
        .fromTo(
          ".anim-story-head",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.8",
        )
        .fromTo(
          ".anim-story-div",
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.7,
            ease,
            transformOrigin: "left",
          },
          "-=0.5",
        )
        .fromTo(
          ".anim-story-para",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease, stagger: 0.15 },
          "-=0.4",
        );
    },
    { scope: storyRef },
  );

  useGSAP(
    () => {
      const ease = "power4.out";
      gsap
        .timeline({
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          ".anim-val-label",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease },
        )
        .fromTo(
          ".anim-val-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.3",
        )
        .fromTo(
          ".anim-val-divider",
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.7,
            ease,
            transformOrigin: "left",
          },
          "-=0.4",
        )
        .fromTo(
          ".anim-val-card",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease, stagger: 0.14 },
          "-=0.3",
        );
    },
    { scope: valuesRef },
  );

  useGSAP(
    () => {
      const ease = "power4.out";
      gsap
        .timeline({
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          ".anim-team-label",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease },
        )
        .fromTo(
          ".anim-team-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease },
          "-=0.3",
        )
        .fromTo(
          ".anim-team-divider",
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.7,
            ease,
            transformOrigin: "center",
          },
          "-=0.4",
        )
        .fromTo(
          ".anim-team-card",
          { opacity: 0, y: 50, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease },
          "-=0.3",
        );
    },
    { scope: teamRef },
  );

  useGSAP(
    () => {
      const ease = "power4.out";
      gsap
        .timeline({
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          ".anim-mission-label",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease },
        )
        .fromTo(
          ".anim-mission-quote",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.1, ease },
          "-=0.3",
        )
        .fromTo(
          ".anim-mission-attr",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease },
          "-=0.3",
        );
    },
    { scope: missionRef },
  );

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 pt-36 pb-16 flex flex-col items-center text-center"
      >
        <p className="anim-label text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b5345a] mb-5">
          Our Story
        </p>
        <h1 className="anim-heading font-serif text-5xl md:text-6xl lg:text-7xl text-[#1e0e14] font-normal leading-tight">
          About <span className="italic text-[#b5345a]">Lana Éclat</span>
        </h1>
        <div className="anim-divider flex items-center gap-3 mt-7 mb-7 w-full max-w-xl">
          <div className="h-px flex-1 bg-[#e0b8c4]" />
          <span className="text-[#b5345a] text-sm">◆</span>
          <div className="h-px flex-1 bg-[#e0b8c4]" />
        </div>
        <p className="anim-sub font-serif italic text-[#7a5a62] text-lg md:text-xl">
          Born in Kabba, built for every skin type, rooted in care.
        </p>
      </section>

      {/* ── STORY ── */}
      <section
        ref={storyRef}
        className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-center gap-14"
      >
        <div
          className="anim-card shrink-0 w-full md:w-85 min-h-120 rounded-3xl relative overflow-hidden shadow-xl"
          style={{
            background:
              "linear-gradient(160deg, #c0396a 0%, #b5345a 30%, #d4507a 55%, #e8a060 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 12px)",
            }}
          />
          <div className="absolute bottom-8 left-8 right-8 z-10">
            <p className="text-white/60 text-[10px] font-bold tracking-[0.22em] uppercase mb-2">
              Est. Kabba
            </p>
            <h3 className="font-serif text-white text-2xl font-semibold leading-snug mb-2">
              Where it all began
            </h3>
            <p className="text-white/70 text-sm">
              A passion for skin. A dream for Kabba.
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <h2 className="anim-story-head font-serif text-4xl md:text-5xl text-[#1e0e14] font-normal leading-tight mb-2">
            A studio built on
          </h2>
          <h2 className="anim-story-head font-serif text-4xl md:text-5xl italic text-[#b5345a] leading-tight mb-6">
            real skin, real love
          </h2>
          <div className="anim-story-div flex items-center gap-3 mb-7">
            <span className="text-[#b5345a] text-sm">◆</span>
            <div className="h-px flex-1 bg-[#e0b8c4]" />
          </div>
          <p className="anim-story-para text-[#4a3038] text-base leading-relaxed mb-5">
            Lana Éclat Beauty Studio was born from a simple but powerful belief:
            every person deserves professional skincare — no matter where they
            live. In the heart of Kabba, Kogi State, we opened our doors to
            bring visible, lasting results to every skin type.
          </p>
          <p className="anim-story-para text-[#4a3038] text-base leading-relaxed mb-5">
            We didn't want to offer just another beauty service. We wanted a
            sanctuary — a place where you could exhale, be seen, and walk out
            glowing with renewed confidence. A place where your skin is treated
            as the unique canvas it truly is.
          </p>
          <p className="anim-story-para text-[#4a3038] text-base leading-relaxed">
            Today, Lana Eclat Beauty Studio stands as Kabba's dedicated facial
            studio — a space where science meets warmth, and every treatment is
            a step toward your most luminous self.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        ref={valuesRef}
        className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="mb-12">
          <p className="anim-val-label text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b5345a] mb-4">
            Our Foundation
          </p>
          <h2 className="anim-val-heading font-serif text-4xl md:text-5xl text-[#1e0e14] font-normal mb-5">
            What drives us every day
          </h2>
          <div className="anim-val-divider flex items-center gap-3 max-w-2xl">
            <div className="h-px flex-1 bg-[#e0b8c4]" />
            <span className="text-[#b5345a] text-sm">◆</span>
            <div className="h-px flex-1 bg-[#e0b8c4]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(function (v, i) {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`anim-val-card rounded-2xl p-7 flex flex-col gap-4 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  v.highlight ? "border border-[#e0b8c4]" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <HugeiconsIcon icon={Icon} size={24} color="#b5345a" />
                </div>
                <h3 className="font-semibold text-[#1e0e14] text-sm">
                  {v.title}
                </h3>
                <p className="text-[#7a5a62] text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        ref={teamRef}
        className="bg-[#fdf0f3] px-8 md:px-16 lg:px-24 py-20"
      >
        <div className="mb-12">
          <p className="anim-team-label text-[10px] font-semibold tracking-[0.28em] uppercase text-[#b5345a] mb-4">
            Meet the Team
          </p>
          <h2 className="anim-team-heading font-serif text-4xl md:text-5xl text-[#1e0e14] font-normal mb-5">
            The hands behind your glow
          </h2>
          <div className="anim-team-divider flex items-center gap-3 max-w-2xl">
            <div className="h-px flex-1 bg-[#e0b8c4]" />
            <span className="text-[#b5345a] text-sm">◆</span>
            <div className="h-px flex-1 bg-[#e0b8c4]" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="anim-team-card bg-white rounded-3xl shadow-sm border border-[#f0dde6] p-10 flex flex-col items-center text-center max-w-sm w-full">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full border-2 border-[#e0b8c4] p-1">
                <img
                  src="img"
                  alt="Lana"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white bg-[#fdf0f3] flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b5345a]" />
              </span>
            </div>
            <h3 className="font-serif text-[#1e0e14] text-xl font-semibold mb-1">
              Lana
            </h3>
            <p className="text-[#b5345a] text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              Founder &amp; Lead Esthetician
            </p>
            <div className="w-12 h-px bg-[#e0b8c4] mb-4" />
            <p className="text-[#7a5a62] text-sm leading-relaxed">
              With years of professional skincare training and a passion for
              helping women radiate confidence, Lana founded the studio to bring
              world-class facials to Kabba, Kogi State.
            </p>
          </div>
        </div>
      </section>

      {/* ── MISSION BANNER ── */}
      <section
        ref={missionRef}
        className="relative overflow-hidden px-8 md:px-16 lg:px-32 py-20 flex flex-col items-center justify-center text-center"
        style={{
          background:
            "linear-gradient(135deg, #5a0e2a 0%, #8f1a40 40%, #7a1535 70%, #3d0818 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <p className="anim-mission-label text-white/50 text-[10px] font-semibold tracking-[0.3em] uppercase mb-7">
            Our Mission
          </p>
          <p className="anim-mission-quote font-serif italic text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            "To make every person who walks through our doors feel seen, cared
            for, and beautiful — because glowing skin is not a luxury, it's a
            lifestyle."
          </p>
          <p className="anim-mission-attr text-white/40 text-[10px] font-semibold tracking-[0.25em] uppercase mt-8">
            — Lana Eclat Beauty Studio
          </p>
        </div>
      </section>
    </>
  );
};

export default AbooutPage;

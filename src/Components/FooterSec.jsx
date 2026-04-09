import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const ease = "power4.out";

      gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      })
        .fromTo(
          ".anim-footer-col",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease, stagger: 0.15 }
        )
        .fromTo(
          ".anim-footer-bottom",
          { opacity: 0 },
          { opacity: 1, duration: 0.7, ease },
          "-=0.3"
        );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="bg-[#150810] px-8 md:px-16 lg:px-24 pt-24 pb-10">

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 pb-16 border-b border-white/10">

        {/*Brand name */}
        <div className="anim-footer-col flex flex-col gap-5">
          <div>
            <h3 className="font-serif italic text-white text-3xl font-semibold">
              Lana Éclat
            </h3>
            <p className="text-[#b5345a] text-[10px] font-bold tracking-[0.22em] uppercase mt-1">
              Beauty Studio
            </p>
          </div>

          <p className="text-white/50 text-sm leading-relaxed italic max-w-65">
            "Because glowing skin is not a luxury —it's a lifestyle."
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-2">
            {/* Instagram */}
            <Link 
              to="https://www.instagram.com/me_kemi?igsh=bmhzcmE4NHNvZGdp" // 2. Changed href to to
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-[#b5345a] hover:text-[#b5345a] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.756 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.756 0 12c0 3.244.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.756 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.244 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.244 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </Link>

            {/* WhatsApp */}
            <Link 
              to="https://wa.me/2348104461674" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-[#b5345a] hover:text-[#b5345a] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/*Navigate */}
        <div className="anim-footer-col flex flex-col gap-6">
          <h4 className="text-[#b5345a] text-[10px] font-bold tracking-[0.25em] uppercase">
            Navigate
          </h4>
          <ul className="flex flex-col gap-4">
            {["Home", "About", "Services"].map(function(item) {
              return (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`} 
                    className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/*Find Us */}
        <div className="anim-footer-col flex flex-col gap-6">
          <h4 className="text-[#b5345a] text-[10px] font-bold tracking-[0.25em] uppercase">
            Find Us
          </h4>
          <div className="flex flex-col gap-3 text-white/60 text-sm leading-relaxed">
            <p>Kabba, Kogi State, Nigeria</p>
            <p>+234 906 635 5098</p>
            <p>evelynolugbamiye@gmail.com</p>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-[#b5345a] text-[10px] font-bold tracking-[0.25em] uppercase">
              Hours
            </h5>
            <p className="text-white/60 text-sm">Mon – Sat: 9am – 7pm</p>
            <p className="text-white/60 text-sm">Sunday: By appointment</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="anim-footer-bottom flex flex-col md:flex-row items-center justify-between gap-2 pt-8">
        <p className="text-white/30 text-xs">
          © 2026 Lana Éclat Beauty Studio. All rights reserved.
        </p>
        <p className="text-white/20 text-xs italic">
          ..glowing skin is a lifestyle.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
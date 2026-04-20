import { useState, useRef, useEffect, forwardRef } from "react"; // Added forwardRef
import gsap from "gsap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// 1. Create the forwardRef component for the input
const CustomDateInput = forwardRef(({ value, onClick, id, name, required, className }, ref) => (
  <input
    id={id}
    name={name}
    value={value}
    onClick={onClick}
    ref={ref}
    required={required}
    placeholder="dd/mm/yyyy"
    readOnly // Prevents mobile keyboard from blocking the calendar
    className={className}
  />
));

const FormSection = () => {
  const treatmentData = [
    {
      id: "facial-01",
      type: "facial",
      name: "Essential facials",
      tag: "BEGINNER",
    },
    { id: "facial-02", type: "facial", name: "Glow facials", tag: "POPULAR" },
    {
      id: "facial-03",
      type: "facial",
      name: "Advanced facials treatment",
      tag: "",
    },
    {
      id: "facial-04",
      type: "facial",
      name: "Éclat Luxury facial",
      tag: "LUXURY",
    },
    { id: "wax-01", type: "wax", name: "Underarm hard wax", tag: "BEST" },
    { id: "wax-02", type: "wax", name: "Underarms strip/soft wax" },
    { id: "wax-03", type: "wax", name: "Half arm wax" },
    { id: "wax-04", type: "wax", name: "Full arm wax" },
    { id: "wax-05", type: "wax", name: "Half leg wax" },
    { id: "wax-06", type: "wax", name: "Full leg wax" },
  ];

  const timeData = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    treatment: "",
    date: new Date(),
    time: "",
    notes: "",
  });

  const formRef = useRef(null);
  const cardsRef = useRef(null);
  const containerRef = useRef(null);
  const submittedRef = useRef(false);

  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });
      tl.fromTo(
        ".anim-form-section",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2 },
      );
      tl.fromTo(
        ".anim-cards-section",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.8",
      );
      tl.fromTo(
        ".anim-field",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.8 },
        "-=1",
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleFocus = () => {
      if (!submittedRef.current) return;
      submittedRef.current = false;

      toast.success("Reservation sent! We'll confirm within 24hrs.", {
        duration: 3000,
        style: {
          background: "#fff",
          color: "#4A2E2A",
          border: "1px solid #F9E9E8",
          borderRadius: "12px",
          fontWeight: "600",
          padding: "14px 18px",
          boxShadow: "0 4px 20px rgba(166,111,113,0.15)",
        },
        iconTheme: {
          primary: "#A66F71",
          secondary: "#fff",
        },
      });

      setTimeout(() => navigate("/"), 3200);
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const recipient = "adekogbe08@gmail.com";
    const fullNameUpper = formData.fullName.toUpperCase();
    const subject = `Appointment Request - Lana Eclat Beauty Studio — ${fullNameUpper}`;
    const formattedDate = formData.date.toISOString().slice(0, 10);
    const body = `Hello Lana Éclat Beauty Studio,

I would like to book an appointment:

  Name: ${fullNameUpper}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Service: ${formData.treatment}
  Preferred Date: ${formattedDate}
  Preferred Time: ${formData.time}

  Additional Notes:
  ${formData.notes || "None"}

Looking forward to hearing from you!`.trim();

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    submittedRef.current = true;
    window.location.href = mailtoLink;
  };

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.003 2.667C8.639 2.667 2.667 8.64 2.667 16.003c0 2.354.633 4.624 1.833 6.611L2.667 29.333l6.917-1.812a13.3 13.3 0 0 0 6.42 1.645h.003C23.368 29.166 29.333 23.19 29.333 16.003S23.368 2.667 16.003 2.667zm0 24.334a11.07 11.07 0 0 1-5.65-1.548l-.405-.24-4.104 1.075 1.094-3.995-.264-.41A11.073 11.073 0 0 1 4.93 16.003C4.93 9.892 9.892 4.93 16.003 4.93s11.073 4.963 11.073 11.073-4.962 11.073-11.073 11.073v-.076zm6.072-8.292c-.333-.166-1.97-.972-2.276-1.083-.306-.11-.528-.166-.75.167-.222.333-.862 1.083-1.057 1.305-.194.222-.388.25-.72.083-.333-.167-1.405-.518-2.676-1.652-.988-.882-1.655-1.971-1.85-2.304-.193-.333-.02-.513.147-.679.15-.15.333-.389.5-.583.166-.194.222-.333.333-.556.11-.222.056-.416-.028-.583-.083-.166-.75-1.805-1.028-2.472-.27-.65-.544-.561-.75-.571-.194-.01-.416-.012-.638-.012s-.583.083-.888.416c-.306.333-1.166 1.139-1.166 2.778s1.194 3.222 1.36 3.444c.167.222 2.35 3.588 5.695 5.031.796.344 1.417.549 1.9.703.799.254 1.527.218 2.102.132.64-.096 1.97-.806 2.248-1.584.278-.778.278-1.444.195-1.584-.083-.139-.305-.222-.638-.388z" />
    </svg>
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen p-4 sm:p-6 md:p-12 text-[#4A2E2A] font-sans"
    >
      <Toaster position="top-center" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <section
          ref={formRef}
          className="anim-form-section col-span-1 md:col-span-2 bg-white rounded-3xl p-10 sm:p-9 md:p-15 border-2 border-[#F9E9E8] shadow-sm"
        >
          {/* Header */}
          <div className="mb-6 sm:mb-8 anim-field text-center">
            <span className="text-[#A66F71] font-semibold text-xs tracking-widest uppercase">
              RESERVATION
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A2E2A] mt-2 mb-2">
              Book an Appointment
            </h1>
            <p className="text-[#8D7B7A] max-w-xl mx-auto text-sm sm:text-base">
              Fill in your details below. We'll open your email client
              pre-filled so you can confirm instantly.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
          >
            {/* Full Name */}
            <div className="anim-field col-span-1">
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
                className="w-full p-3 rounded-xl border border-[#F9E9E8] placeholder-[#8D7B7A]/60 focus:outline-none focus:ring-1 focus:ring-[#A66F71]"
              />
            </div>

            {/* Email */}
            <div className="anim-field col-span-1">
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="w-full p-3 rounded-xl border border-[#F9E9E8] placeholder-[#8D7B7A]/60 focus:outline-none focus:ring-1 focus:ring-[#A66F71]"
              />
            </div>

            {/* Phone */}
            <div className="anim-field col-span-1">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+234 ..."
                className="w-full p-3 rounded-xl border border-[#F9E9E8] placeholder-[#8D7B7A]/60 focus:outline-none focus:ring-1 focus:ring-[#A66F71]"
              />
            </div>

            {/* Treatment */}
            <div className="anim-field col-span-1">
              <label
                htmlFor="treatment"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Treatment *
              </label>
              <select
                id="treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-xl border border-[#F9E9E8] appearance-none bg-white text-[#4A2E2A] focus:outline-none focus:ring-1 focus:ring-[#A66F71]"
              >
                <option value="" disabled>
                  Select a treatment
                </option>
                {treatmentData.map((item) => (
                  <option
                    key={item.id}
                    value={`${item.name}${item.tag ? ` (${item.tag})` : ""}`}
                  >
                    {`${item.name}${item.tag ? ` (${item.tag})` : ""}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="anim-field col-span-1">
              <label
                htmlFor="date"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Preferred Date *
              </label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData((prev) => ({ ...prev, date }))}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                required
                wrapperClassName="w-full"
                portalId="root-portal" // 2. Forces calendar to sit on top of everything
                popperPlacement="top-start"
                popperProps={{ strategy: "fixed" }}
                customInput={
                  <CustomDateInput
                    id="date"
                    name="date"
                    className="w-full p-3 rounded-xl border border-[#F9E9E8] placeholder-[#8D7B7A]/60 focus:outline-none focus:ring-1 focus:ring-[#A66F71]"
                  />
                }
              />
            </div>

            {/* Time */}
            <div className="anim-field col-span-1">
              <label
                htmlFor="time"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-xl border border-[#F9E9E8] appearance-none bg-white text-[#4A2E2A] focus:outline-none focus:ring-1 focus:ring-[#A66F71]"
              >
                <option value="" disabled>
                  Select a time
                </option>
                {timeData.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div className="anim-field col-span-1 md:col-span-2">
              <label
                htmlFor="notes"
                className="block text-xs font-semibold uppercase tracking-wider text-[#766462] mb-1"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any concerns or requests..."
                rows="3"
                className="w-full p-3 rounded-xl border border-[#F9E9E8] placeholder-[#8D7B7A]/60 focus:outline-none focus:ring-1 focus:ring-[#A66F71] resize-none"
              />
            </div>

            <div className="anim-field col-span-1 md:col-span-2 flex flex-col items-center gap-3 mt-4">
              <button
                type="submit"
                className="w-fit flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-pink-800 text-white text-sm sm:text-base font-bold uppercase tracking-widest hover:bg-pink-900 transition duration-200"
              >
                SEND RESERVATION
              </button>
              <p className="text-xs text-[#8D7B7A] text-center max-w-sm">
                This will open your email app with the details filled in. We'll
                confirm your booking within 24hrs.
              </p>
            </div>
          </form>
        </section>

        {/* Right sidebar */}
        <aside
          ref={cardsRef}
          className="anim-cards-section flex flex-col gap-6 col-span-1"
        >
          {/* Why book with us */}
          <div className="bg-white rounded-3xl p-6 border border-[#F9E9E8] shadow-sm">
            <h2 className="text-2xl font-serif text-[#4A2E2A] mb-4">
              Why book with us?
            </h2>
            <ul className="space-y-3 text-[#8D7B7A] text-sm">
              {[
                "First-time client special offer",
                "Sterilized tools, every session",
                "Premium skincare products",
                "Tailored to your skin type",
                "No shortcuts, ever",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="text-[#6D2E1F] font-bold">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp card */}
          <div className="bg-white rounded-3xl p-6 border border-[#F9E9E8] shadow-sm text-center flex flex-col items-center gap-4">
            <h2 className="text-2xl font-serif text-[#4A2E2A]">
              Prefer WhatsApp?
            </h2>
            <p className="text-[#8D7B7A] text-sm">
              Message us directly for faster responses.
            </p>
            <Link
              to="https://wa.me/2348104461674"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="flex mx-auto w-fit pl-5 pr-5 items-center justify-center gap-2 pt-3 pb-3 rounded-full bg-[#25D366] text-white font-semibold text-base hover:bg-[#1EBE57] transition duration-200 shadow-md active:scale-95">
                <WhatsAppIcon />
                Chat on WhatsApp
              </button>
            </Link>
          </div>

          {/* Business hours */}
          <div className="bg-white rounded-3xl p-6 border border-[#F9E9E8] shadow-sm text-sm">
            <h2 className="text-2xl font-serif text-[#4A2E2A] mb-4">
              Business Hours
            </h2>
            <dl className="space-y-3 text-[#8D7B7A]">
              {[
                { day: "Mon – Fri", hours: "9:00 AM – 7:00 PM" },
                { day: "Sat", hours: "9:00 AM – 6:00 PM" },
                { day: "Sun", hours: "By appointment only" },
              ].map((entry) => (
                <div
                  key={entry.day}
                  className="flex justify-between items-center gap-2"
                >
                  <dt className="font-semibold">{entry.day}</dt>
                  <dd className="text-right">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FormSection;
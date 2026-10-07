import { useEffect, useState } from "react";
import converterImage from "./assets/converter.png";
import perfumeImage from "./assets/perfume.png";
import layoutImage from "./assets/layout.png";
import commerceImage from "./assets/commerce.png";
import plantImage from "./assets/plant.png";

import emailjs from "@emailjs/browser";

function App() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
   const [darkMode, setDarkMode] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   const [showTopButton, setShowTopButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;

    setShowTopButton(scrollPosition >= pageHeight - 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <div
  className={`min-h-screen ${
    darkMode
      ? "bg-[#111827] text-[#f1f5f9]"
      : "bg-[#f7fafc] text-[#102a52]"
  }`}
>
      {/* Navbar */}
<header
  className={`border-b ${
    darkMode
      ? "border-[#263449] bg-[#182235]"
      : "border-[#e8eef5] bg-white"
  }`}
>
  <div className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between px-6">

    {/* Logo / Name */}
    <a
  href="#home"
  className={`text-[16px] tracking-[-0.02em] ${
    darkMode ? "text-white" : "text-[#102a52]"
  }`}
  style={{ fontWeight: 700 }}
>
  My Portfolio
</a>

    {/* Navigation */}
   <nav className="hidden items-center gap-5 lg:gap-7 md:flex">
  <a
    href="#home"
    className="relative py-6 text-[11px] font-semibold text-[#3978d4]"
  >
    Home
    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#3978d4]" />
  </a>

  <a
    href="#about"
    className={`py-6 text-[11px] font-semibold transition ${
      darkMode ? "text-white" : "text-[#405574]"
    } hover:text-[#3978d4]`}
  >
    About
  </a>

  <a
    href="#skills"
    className={`py-6 text-[11px] font-semibold transition ${
      darkMode ? "text-white" : "text-[#405574]"
    } hover:text-[#3978d4]`}
  >
    Skills
  </a>

  <a
    href="#projects"
    className={`py-6 text-[11px] font-semibold transition ${
      darkMode ? "text-white" : "text-[#405574]"
    } hover:text-[#3978d4]`}
  >
    Projects
  </a>

  <a
    href="#education"
    className={`py-6 text-[11px] font-semibold transition ${
      darkMode ? "text-white" : "text-[#405574]"
    } hover:text-[#3978d4]`}
  >
    Education
  </a>

  <a
    href="#certifications"
    className={`py-6 text-[11px] font-semibold transition ${
      darkMode ? "text-white" : "text-[#405574]"
    } hover:text-[#3978d4]`}
  >
    Certifications
  </a>

  <a
    href="#contact"
    className={`py-6 text-[11px] font-semibold transition ${
      darkMode ? "text-white" : "text-[#405574]"
    } hover:text-[#3978d4]`}
  >
    Contact
  </a>
</nav>

    {/* Navbar Icons */}
    <div className="flex items-center gap-3 lg:gap-4">
  {/* Theme Button - Every Screen */}
  <button
    type="button"
    onClick={() => setDarkMode(!darkMode)}
    aria-label="Toggle theme"
    className={`transition-colors duration-200 ${
  darkMode
    ? "text-white hover:text-[#3978d4]"
    : "text-[#405574] hover:text-[#3978d4]"
}`}
  >
    {darkMode ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" />
      </svg>
    )}
  </button>

  {/* Mobile Menu Button - Small Screens Only */}
  <button
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
    className={`md:hidden transition-colors duration-200 ${
  darkMode
    ? "text-white hover:text-[#3978d4]"
    : "text-[#405574] hover:text-[#3978d4]"
}`}
  >
    {menuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )}
  </button>
</div>
  </div>
  {menuOpen && (
  <div
  className={`border-t md:hidden ${
    darkMode
      ? "border-[#263449] bg-[#182235]"
      : "border-[#e8eef5] bg-white"
  }`}
>
    <nav className="mx-auto max-w-[1240px] px-6 py-4">
      <div className="flex flex-col gap-4 text-sm">
        <a href="#home" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>Projects</a>
        <a href="#education" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>Education</a>
        <a href="#certifications" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>Certifications</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className={darkMode ? "text-white" : "text-[#405574]"}>Contact</a>
      </div>
    </nav>
  </div>
)}
</header>


{/* Hero Section */}
<section
  id="home"
  className={`relative overflow-hidden ${
  darkMode ? "bg-[#111827]" : "bg-[#f7fafc]"
}`}
>
  {/* Soft Background Shapes */}
  <div
  className={`pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full ${
    darkMode ? "bg-[#172554]" : "bg-[#eef6ff]"
  }`}
/>

  <div className={`pointer-events-none absolute right-[-80px] top-10 h-72 w-72 rounded-full ${
  darkMode ? "bg-[#172554]" : "bg-[#f0f7ff]"
}`} />

  <div className="mx-auto max-w-[1240px] px-6">
    <div className="grid min-h-[500px] items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">

      {/* LEFT SIDE */}
      <div className="relative z-10 max-w-[650px]">

        <p className="text-[15px] font-medium text-[#3978d4]">
          Hello, I'm
        </p>

        <h1 className={`mt-1 text-[44px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[52px] lg:text-[58px] ${
  darkMode ? "text-white" : "text-[#102a52]"
}`}>
          Bisma Ziaullah
        </h1>

        <h2 className="mt-3 text-[22px] font-bold text-[#3978d4] sm:text-[24px]">
          Frontend Developer
        </h2>

        <p className={`mt-4 max-w-[570px] text-[14px] leading-[1.65] sm:text-[15px] ${
  darkMode ? "text-[#cbd5e1]" : "text-[#58708e]"
}`}>
          Detail-oriented aspiring Frontend Developer with a solid
          foundation in HTML, CSS, JavaScript, and React. Skilled in
          Tailwind CSS, Bootstrap, Git, and GitHub, with a focus on creating
          responsive and user-friendly interfaces.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#2f72dc] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(47,114,220,0.20)] transition hover:bg-[#245fbe]"
          >
            View Projects

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <a
            href="#contact"
            className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-[13px] font-semibold transition hover:border-[#3978d4] hover:text-[#3978d4] ${
  darkMode
    ? "border-[#475569] bg-[#1e293b] text-white"
    : "border-[#bdd2ea] bg-white text-[#17385f]"
}`}
          >
            Contact Me
          </a>

        </div>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-5">

          {/* GitHub */}
          <a
  href="https://github.com/bm-coder"  target="_blank"
  className={`flex items-center gap-2 text-[13px] font-medium transition hover:text-[#3978d4] ${
  darkMode ? "text-white" : "text-[#405574]"
}`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px]"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.18c-3.2.7-3.87-1.55-3.87-1.55-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.77 1.08.77 2.18v3.22c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>

  GitHub
</a>

          <div
  className={`h-5 w-px ${
    darkMode ? "bg-[#475569]" : "bg-[#cdd9e7]"
  }`}
/>

          {/* LinkedIn */}
          <a
  href="https://www.linkedin.com/in/bisma-mehar"  target="_blank"
  className={`group flex items-center gap-2 text-[12px] font-medium transition-colors duration-200 hover:text-[#3978d4] ${
  darkMode ? "text-white" : "text-[#405574]"
}`}
>
  {/* LinkedIn Icon */}
  <span className="flex h-[17px] w-[17px] items-center justify-center rounded-[2px] bg-[#17385f] transition-all duration-200 group-hover:bg-[#3978d4]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-[11px] w-[11px]"
      fill="white"
      aria-hidden="true"
    >
      <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3C3.8 3 3 3.8 3 4.85S3.8 6.7 4.85 6.7 6.7 5.9 6.7 4.85 5.9 3 4.85 3ZM21 13.8c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.18-3.65 2.02V8.5H9.4V21h3.3v-6.2c0-1.63.3-3.2 2.32-3.2 1.98 0 2 1.86 2 3.3V21H21v-7.2Z" />
    </svg>
  </span>

  <span>LinkedIn</span>
</a>
        </div>
      </div>


      {/* RIGHT SIDE - DEVELOPER VISUAL
          Hidden on small screens */}
      <div className="relative hidden items-center justify-center lg:flex">

        <div className="relative h-[350px] w-[350px]">

          {/* Decorative soft circle */}
          <div className={`absolute left-0 top-12 h-36 w-36 rounded-full ${
  darkMode ? "bg-[#172554]" : "bg-[#e5f1ff]"
}`} />

          {/* Decorative soft circle */}
          <div className={`absolute bottom-0 right-0 h-44 w-44 rounded-full ${
  darkMode ? "bg-[#172554]" : "bg-[#edf6ff]"
}`} />

          {/* Main Card */}
          <div className={`absolute right-3 top-3 flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-[24px] border shadow-[0_20px_55px_rgba(31,75,124,0.10)] ${
  darkMode
    ? "border-[#334155] bg-[#1e293b]"
    : "border-[#e3edf8] bg-white"
}`}>

            {/* Inner gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${
  darkMode
    ? "from-[#1e3a5f] via-[#1e293b] to-[#172554]"
    : "from-[#edf6ff] via-white to-[#e4f0ff]"
}`} />

            {/* Decorative circles */}
            <div className={`absolute -left-12 -top-12 h-36 w-36 rounded-full ${
  darkMode ? "bg-[#1e3a5f]" : "bg-[#dcecff]"
}`} />

            <div className={`absolute -bottom-16 -right-10 h-44 w-44 rounded-full ${
  darkMode ? "bg-[#172554]" : "bg-[#eaf3ff]"
}`} />

            {/* Developer Monogram */}
            <div className={`relative z-10 flex h-[170px] w-[170px] items-center justify-center rounded-full border-[8px] bg-gradient-to-br from-[#102a52] to-[#3978d4] shadow-[0_18px_40px_rgba(16,42,82,0.18)] ${
  darkMode ? "border-[#334155]" : "border-white"
}`}>

              <div className="text-center">
                <div className="text-[46px] font-extrabold tracking-[-0.06em] text-white">
                  &lt;/&gt;
                </div>

                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#dcecff]">
                  Developer
                </div>
              </div>

            </div>

            {/* Small Code Badge */}
            <div className={`absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border px-4 py-2 shadow-[0_8px_20px_rgba(31,75,124,0.08)] ${
  darkMode
    ? "border-[#334155] bg-[#0f172a]"
    : "border-[#e1ebf6] bg-white"
}`}>

              <span className="font-mono text-[13px] font-bold text-[#3978d4]">
                &lt;/&gt;
              </span>

              <span className={`text-[11px] font-semibold ${
  darkMode ? "text-white" : "text-[#405574]"
}`}>
                Frontend Developer
              </span>

            </div>

          </div>

          {/* Floating Code Icon */}
          <div className={`absolute -right-2 top-14 flex h-11 w-11 rotate-6 items-center justify-center rounded-full border text-[#3978d4] shadow-[0_8px_20px_rgba(31,75,124,0.10)] ${
  darkMode
    ? "border-[#334155] bg-[#1e293b]"
    : "border-[#d7e7f8] bg-white"
}`}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m8 9-3 3 3 3" />
              <path d="m16 9 3 3-3 3" />
              <path d="m14 5-4 14" />
            </svg>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* About Section */}
<section
  id="about"
  className={`py-10 sm:py-12 lg:py-14 ${
  darkMode ? "bg-[#182235]" : "bg-white"
}`}
>
  <div className="mx-auto max-w-[1240px] px-5 sm:px-6">

    {/* Main About Layout */}
    <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

      {/* LEFT SIDE - About Content */}
      <div className="max-w-[500px]">

        {/* Section Label */}
        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#3978d4]">
          About Me
        </p>

        {/* Section Heading */}
        <h2
          className={`mt-2 text-[32px] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[36px] ${
            darkMode ? "text-white" : "text-[#102a52]"
          }`}
        >
          A Little About Me
        </h2>

        {/* Description */}
        <p
          className={`mt-4 max-w-[480px] text-[14px] leading-[1.7] sm:text-[15px] ${
            darkMode ? "text-[#cbd5e1]" : "text-[#58708e]"
          }`}
        >
          I am a BS Information Technology student with a passion for
          web development and creating clean, responsive, and
          user-friendly websites. I enjoy learning modern web
          technologies and continuously improving my frontend skills.
        </p>

      </div>


      {/* RIGHT SIDE - About Cards */}
      <div className="grid gap-4 sm:grid-cols-2">

        {/* Card 1 - Education */}
        <div
         className={`flex min-h-[112px] items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
  darkMode
    ? "border-[#334155] bg-[#182235] hover:border-[#3978d4] hover:bg-[#172554]"
    : "border-[#e4edf7] bg-white hover:border-[#3978d4] hover:bg-[#f3f8ff]"
} shadow-[0_8px_30px_rgba(37,78,121,0.06)] hover:shadow-[0_10px_25px_rgba(57,120,212,0.12)]`}
        >

          {/* Education Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              darkMode
                ? "bg-[#1e3a5f] text-[#60a5fa]"
                : "bg-[#edf5ff] text-[#3978d4]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.5 12 4l9 4.5-9 4.5L3 8.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 9v6"
              />
            </svg>
          </div>

          <div>
            <h3
              className={`text-[15px] font-bold ${
                darkMode ? "text-white" : "text-[#102a52]"
              }`}
            >
              Education
            </h3>

            <p
              className={`mt-2 text-[12px] leading-5 ${
                darkMode ? "text-[#cbd5e1]" : "text-[#58708e]"
              }`}
            >
              BS Information Technology (Hons)
            </p>
          </div>

        </div>
        

        {/* Card 2 - Career Direction */}
        <div
         className={`flex min-h-[112px] items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
  darkMode
    ? "border-[#334155] bg-[#182235] hover:border-[#3978d4] hover:bg-[#172554]"
    : "border-[#e4edf7] bg-white hover:border-[#3978d4] hover:bg-[#f3f8ff]"
} shadow-[0_8px_30px_rgba(37,78,121,0.06)] hover:shadow-[0_10px_25px_rgba(57,120,212,0.12)]`}
        >

          {/* Career Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              darkMode
                ? "bg-[#3b1f26] text-[#f87171]"
                : "bg-[#fff0f0] text-[#e05252]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <rect
                x="3"
                y="7"
                width="18"
                height="13"
                rx="2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12h18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 12v2h4v-2"
              />
            </svg>
          </div>

          <div>
            <h3
              className={`text-[15px] font-bold ${
                darkMode ? "text-white" : "text-[#102a52]"
              }`}
            >
              Career Direction
            </h3>

            <p
              className={`mt-2 text-[12px] leading-5 ${
                darkMode ? "text-[#cbd5e1]" : "text-[#58708e]"
              }`}
            >
              Frontend Developer
            </p>
          </div>

        </div>



        {/* Card 3 - My Interests */}
        <div
         className={`flex min-h-[112px] items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
  darkMode
    ? "border-[#334155] bg-[#182235] hover:border-[#3978d4] hover:bg-[#172554]"
    : "border-[#e4edf7] bg-white hover:border-[#3978d4] hover:bg-[#f3f8ff]"
} shadow-[0_8px_30px_rgba(37,78,121,0.06)] hover:shadow-[0_10px_25px_rgba(57,120,212,0.12)]`}
        >

          {/* Code Icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              darkMode
                ? "bg-[#123b30] text-[#4ade80]"
                : "bg-[#e8f8f0] text-[#16a36a]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8 9-4 3 4 3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16 9 4 3-4 3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14 5-4 14"
              />
            </svg>
          </div>

          <div>
            <h3
              className={`text-[15px] font-bold ${
                darkMode ? "text-white" : "text-[#102a52]"
              }`}
            >
              My Interests
            </h3>

            <p
              className={`mt-2 text-[12px] leading-5 ${
                darkMode ? "text-[#cbd5e1]" : "text-[#58708e]"
              }`}
            >
              Web Development<br/>
              UI/UX Design<br/>
              Learning New Technologies
            </p>
          </div>

        </div>


         {/* Card 4 - Learning Focus */}
<div
  className={`flex min-h-[112px] items-start gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
  darkMode
    ? "border-[#334155] bg-[#182235] hover:border-[#3978d4] hover:bg-[#172554]"
    : "border-[#e4edf7] bg-white hover:border-[#3978d4] hover:bg-[#f3f8ff]"
} shadow-[0_8px_30px_rgba(37,78,121,0.06)] hover:shadow-[0_10px_25px_rgba(57,120,212,0.12)]`}
>
  {/* Learning Focus Icon */}
  <div
    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
      darkMode
        ? "bg-[#30234a] text-[#c084fc]"
        : "bg-[#f3eaff] text-[#8b5cf6]"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 6.5h4a3 3 0 0 1 3 3v11a3 3 0 0 0-3-3H5V6.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 6.5h-4a3 3 0 0 0-3 3v11a3 3 0 0 1 3-3h4V6.5Z"
      />
    </svg>
  </div>

  <div>
    <h3
      className={`text-[15px] font-bold ${
        darkMode ? "text-white" : "text-[#102a52]"
      }`}
    >
      Learning Focus
    </h3>

    <p
      className={`mt-2 text-[12px] leading-5 ${
        darkMode ? "text-[#cbd5e1]" : "text-[#58708e]"
      }`}
    >
      React Development
      <br />
      Responsive Web Design
      <br />
      Modern Web Technologies
    </p>
  </div>
</div>



      </div>

    </div>
  </div>
</section>

{/* Skills Section */}
<section
  id="skills"
  className={`py-12 sm:py-14 lg:py-16 ${
    darkMode ? "bg-[#111827]" : "bg-[#f7fafc]"
  }`}
>
  <div className="mx-auto max-w-[1240px] px-5 sm:px-6">

    {/* Section Heading */}
    <div className="mb-7">
      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#3978d4]">
        My Skills
      </p>

      <h2
        className={`mt-1 text-[28px] font-extrabold leading-tight tracking-[-0.03em] sm:text-[32px] ${
          darkMode ? "text-white" : "text-[#102a52]"
        }`}
      >
        Technical Skills
      </h2>
    </div>


    {/* Skills Grid */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 - Frontend */}
      <div
        className={`min-h-[160px] rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.12)] ${
  darkMode
    ? "border-[#30476b] bg-[#172236]"
    : "border-[#dce9f7] bg-[#f5f9ff]"
}`}
      >
        {/* Icon */}
        <div
          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
            darkMode
              ? "bg-[#172554] text-[#60a5fa]"
              : "bg-[#edf5ff] text-[#2563eb]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="13"
              rx="1.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 21h8M12 17v4"
            />
          </svg>
        </div>

        <h3
          className={`text-[14px] font-bold ${
            darkMode ? "text-white" : "text-[#102a52]"
          }`}
        >
          Frameworks
        </h3>

        <div
          className={`mt-2 space-y-1 text-[12px] leading-5 ${
            darkMode ? "text-[#cbd5e1]" : "text-[#425b78]"
          }`}
        >
          <p>• React.js</p>
          <p>• Bootstrap</p>
          <p>• Tailwind CSS</p>
        </div>
      </div>


      {/* Card 2 - Programming Languages */}
      <div
  className={`min-h-[160px] rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(139,92,246,0.14)] ${
    darkMode
      ? "border-[#493b5c] bg-[#241d2d]"
      : "border-[#e8def5] bg-[#faf7ff]"
  }`}
>
        {/* Icon */}
        <div
          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
            darkMode
  ? "bg-[#30234a] text-[#c084fc]"
  : "bg-[#f3eaff] text-[#8b5cf6]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8 9-4 3 4 3"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16 9 4 3-4 3"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14 5-4 14"
            />
          </svg>
        </div>

        <h3
          className={`text-[14px] font-bold ${
            darkMode ? "text-white" : "text-[#102a52]"
          }`}
        >
          Languages
        </h3>

        <div
          className={`mt-2 space-y-1 text-[12px] leading-5 ${
            darkMode ? "text-[#cbd5e1]" : "text-[#425b78]"
          }`}
        >
          <p>• JavaScript</p>
          <p>• HTML5</p>
          <p>• CSS3</p>
        </div>
      </div>



      {/* Card 3 - Tools & Technologies */}
      <div
        className={`min-h-[160px] rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(22,163,106,0.14)] ${
          darkMode
            ? "border-[#315449] bg-[#152a26]"
            : "border-[#d8eee5] bg-[#f5fcf9]"
        }`}
      >
        {/* Icon */}
        <div
          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
            darkMode
              ? "bg-[#123b30] text-[#4ade80]"
              : "bg-[#e8f8f0] text-[#16a36a]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.7 6.3a4 4 0 0 0-5.1 5.1L4 17v3h3l5.6-5.6a4 4 0 0 0 5.1-5.1l-2.2 2.2-2.1-.5-.5-2.1 2.2-2.2Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.5 15.5 4 4"
            />
          </svg>
        </div>

        <h3
          className={`text-[14px] font-bold ${
            darkMode ? "text-white" : "text-[#102a52]"
          }`}
        >
          Tools & Technologies
        </h3>

        <div
          className={`mt-2 space-y-0.5 text-[11px] leading-[1.45] ${
            darkMode ? "text-[#cbd5e1]" : "text-[#425b78]"
          }`}
        >
          <p>• Git</p>
          <p>• GitHub</p>
          <p>• Visual Studio Code</p>
          <p>• Canva</p>
          <p>• Figma</p>
          <p>• Microsoft Office Suite</p>
        </div>
      </div>


      {/* Card 4 - Other Skills */}
      <div
        className={`min-h-[160px] rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(224,82,82,0.14)] ${
          darkMode
            ? "border-[#54333b] bg-[#2a1b21]"
            : "border-[#f2dddd] bg-[#fff8f8]"
        }`}
      >
        {/* Icon */}
        <div
          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
            darkMode
              ? "bg-[#3b1f26] text-[#f87171]"
              : "bg-[#fff0f0] text-[#e05252]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12 3 8 4-8 4-8-4 8-4Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4 11 8 4 8-4"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4 15 8 4 8-4"
            />
          </svg>
        </div>

        <h3
          className={`text-[14px] font-bold ${
            darkMode ? "text-white" : "text-[#102a52]"
          }`}
        >
          Other Skills
        </h3>

        <div
          className={`mt-2 space-y-1 text-[12px] leading-5 ${
            darkMode ? "text-[#cbd5e1]" : "text-[#425b78]"
          }`}
        >
          <p>• C</p>
          <p>• C++</p>
          <p>• Java</p>
          <p>• Python</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Projects Section */}
<section
  id="projects"
  className={`py-10 sm:py-12 lg:py-14 ${
    darkMode ? "bg-[#182235]" : "bg-white"
  }`}
>
  <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

    {/* Section Heading */}
    <div className="mb-8 text-left">
      <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#3978d4]">
        My Projects
      </p>

      <h2
        className={`mt-2 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl ${
          darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
        }`}
      >
        Featured Projects
      </h2>
    </div>

    {/* Projects Grid */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

      {/* Project 1 - Perfume Website */}
      <article
        className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(224,82,82,0.12)] ${
          darkMode
            ? "border-[#59363d] bg-[#111827] hover:border-pink-600"
            : "border-[#f0dddd] bg-white hover:border-pink-600"
        }`}
      >
        <div className="h-[125px] overflow-hidden bg-gray-100/95">
         <img
  src={perfumeImage}
  alt="Perfume Website"
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>
        </div>

        <div className="p-4">
          <h3
            className={`text-[14px] font-bold ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            Perfume Website
          </h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#3b1f26] text-pink-600/80"
                  : "bg-[#fff0f0] text-pink-600/80"
              }`}
            >
              React
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#3b1f26] text-pink-600/80"
                  : "bg-[#fff0f0] text-pink-600/80"
              }`}
            >
              JavaScript
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#3b1f26] text-pink-600/80"
                  : "bg-[#fff0f0] text-pink-600/80"
              }`}
            >
              Tailwind CSS
            </span>
          </div>

          <ul
            className={`mt-3 space-y-1 text-[11px] leading-5 ${
              darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
            }`}
          >
            <li>• Responsive perfume website</li>
            <li>• Reusable components & responsive layouts</li>
          </ul>

          <a
            href="https://github.com/bm-coder/Perfume-Website-React" target="_blank"
            className={`mt-4 inline-flex items-center text-[12px] font-semibold transition ${
              darkMode
                ? "text-pink-600/80 hover:text-pink-600"
                : "text-pink-600/80 hover:text-pink-600"
            }`}
          >
            View Code →
          </a>
        </div>
      </article>


      {/* Project 2 - Plant Website */}
      <article
        className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(22,163,106,0.12)] ${
          darkMode
            ? "border-[#3b5a4d] bg-[#111827] hover:border-[#16a36a]"
            : "border-[#dcefe5] bg-white hover:border-[#16a36a]"
        }`}
      >
        <div className="h-[125px] overflow-hidden bg-green-950">
          <img
  src={plantImage}
  alt="Plant Website"
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>
        </div>

        <div className="p-4">
          <h3
            className={`text-[14px] font-bold ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            Plant Website
          </h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#123b30] text-[#4ade80]"
                  : "bg-[#e8f8f0] text-[#16a36a]"
              }`}
            >
              HTML
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#123b30] text-[#4ade80]"
                  : "bg-[#e8f8f0] text-[#16a36a]"
              }`}
            >
              JavaScript
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#123b30] text-[#4ade80]"
                  : "bg-[#e8f8f0] text-[#16a36a]"
              }`}
            >
              Tailwind CSS
            </span>
          </div>

          <ul
            className={`mt-3 space-y-1 text-[11px] leading-5 ${
              darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
            }`}
          >
            <li>• Plant-themed website</li>
            <li>• Responsive layouts & smooth animations</li>
          </ul>

          <a
            href="https://github.com/bm-coder/Tailwind-Plant-Website" target="_blank"
            className={`mt-4 inline-flex items-center text-[12px] font-semibold transition ${
              darkMode
                ? "text-[#4ade80] hover:text-[#86efac]"
                : "text-[#16a36a] hover:text-[#0f8555]"
            }`}
          >
            View Code →
          </a>
        </div>
      </article>


      {/* Project 3 - E-Commerce Website */}
      <article
        className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(79,49,32,0.20)] ${
          darkMode
            ? "border-[#8b6a55] bg-[#111827] hover:border-[#f5e6d3]"
            : "border-[#6b4a35]/20 bg-white hover:border-[#4f3120]"
        }`}
      >
        <div className="h-[125px] overflow-hidden bg-[#4f3120]">
          <img
  src={commerceImage}
  alt="E-Commerce Website"
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>
        </div>

        <div className="p-4">
          <h3
            className={`text-[14px] font-bold ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            E-Commerce Website
          </h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#6b422e]/40 text-[#f5e6d3]/80"
                  : "bg-[#e8d8cc] text-[#4f3120]/80"
              }`}
            >
              HTML
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#6b422e]/40 text-[#f5e6d3]/80"
                  : "bg-[#e8d8cc] text-[#4f3120]/80"
              }`}
            >
              JavaScript
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#6b422e]/40 text-[#f5e6d3]/80"
                  : "bg-[#e8d8cc] text-[#4f3120]/80"
              }`}
            >
              Tailwind CSS
            </span>
          </div>

          <ul
            className={`mt-3 space-y-1 text-[11px] leading-5 ${
              darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
            }`}
          >
            <li>• Responsive e-commerce shopping website</li>
            <li>• Product sections & navigation</li>
          </ul>

          <a
            href="https://github.com/bm-coder/E-Commerce" target="_blank"
            className={`mt-4 inline-flex items-center text-[12px] font-semibold transition ${
              darkMode
                ? "text-[#f5e6d3]/80 hover:text-[#f5e6d3]"
                : "text-[#4f3120]/80 hover:text-[#4f3120]"
            }`}
          >
            View Code →
          </a>
        </div>
      </article>


      {/* Project 4 - Responsive Website Layout */}
      <article
        className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(231,76,60,0.20)] ${
          darkMode
            ? "border-[#e74c3c]/40 bg-[#111827] hover:border-[#e74c3c]"
            : "border-[#e74c3c]/20 bg-white hover:border-[#e74c3c]"
        }`}
      >
       <div className="h-[125px] overflow-hidden bg-[#fff]">
          <img
  src={layoutImage}
  alt="Website Layout"
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>
        </div>

        <div className="p-4">
          <h3
            className={`text-[14px] font-bold ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            Responsive Website Layout
          </h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#e74c3c]/20 text-[#e74c3c]/80"
                  : "bg-[#e74c3c]/20 text-[#e74c3c]/80"
              }`}
            >
              HTML
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#e74c3c]/20 text-[#e74c3c]/80"
                  : "bg-[#e74c3c]/20 text-[#e74c3c]/80"
              }`}
            >
              CSS
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#e74c3c]/20 text-[#e74c3c]/80"
                  : "bg-[#e74c3c]/20 text-[#e74c3c]/80"
              }`}
            >
              Bootstrap
            </span>
          </div>

          <ul
            className={`mt-3 space-y-1 text-[11px] leading-5 ${
              darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
            }`}
          >
            <li>• Responsive website using Bootstrap</li>
            <li>• Practiced and implement Bootstrap components</li>
          </ul>

          <a
            href="https://github.com/bm-coder/Bootstrap-Layout-Responsive" target="_blank"
            className={`mt-4 inline-flex items-center text-[12px] font-semibold transition ${
              darkMode
                ? "text-[#e74c3c]/80 hover:text-[#e74c3c]"
                : "text-[#e74c3c]/80 hover:text-[#e74c3c]"
            }`}
          >
            View Code →
          </a>
        </div>
      </article>


      {/* Project 5 - Currency Converter */}
      <article
        className={`group overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(221,161,94,0.20)] ${
          darkMode
            ? "border-[#dda15e]/40 bg-[#111827] hover:border-[#dda15e]"
            : "border-[#dda15e]/40 bg-white hover:border-[#dda15e]"
        }`}
      >
        <div className="h-[125px] overflow-hidden bg-[#dda15e]">
          <img
  src={converterImage}
  alt="Currency Converter"
  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
/>
        </div>

        <div className="p-4">
          <h3
            className={`text-[14px] font-bold ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            Currency Converter
          </h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#dda15e]/20 text-[#dda15e]/80"
                  : "bg-[#dda15e]/20 text-[#dda15e]/80"
              }`}
            >
              HTML
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#dda15e]/20 text-[#dda15e]/80"
                  : "bg-[#dda15e]/20 text-[#dda15e]/80"
              }`}
            >
              CSS
            </span>

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                darkMode
                  ? "bg-[#dda15e]/20 text-[#dda15e]/80"
                  : "bg-[#dda15e]/20 text-[#dda15e]/80"
              }`}
            >
              JavaScript
            </span>
          </div>

          <ul
            className={`mt-3 space-y-1 text-[11px] leading-5 ${
              darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
            }`}
          >
            <li>• Currency converter</li>
            <li>• Interactive functionality & DOM manipulation</li>
          </ul>

          <a
            href="https://github.com/bm-coder/Currency-Converter" target="_blank"
            className={`mt-4 inline-flex items-center text-[12px] font-semibold transition ${
              darkMode
                ? "text-[#dda15e]/80 hover:text-[#dda15e]"
                : "text-[#dda15e]/80 hover:text-[#dda15e]"
            }`}
          >
            View Code →
          </a>
        </div>
      </article>

    </div>
  </div>
</section>

{/* Education + Certifications + GitHub */}
<section
  id="education"
  className={`py-10 sm:py-12 lg:py-14 ${
    darkMode ? "bg-[#111827]" : "bg-[#f7fafc]"
  }`}
>
  <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6">

    {/* ========================================================= */}
    {/* MAIN RESPONSIVE GRID                                     */}
    {/* Mobile  = 1 column                                      */}
    {/* Tablet  = 2 columns + GitHub below                      */}
    {/* Large   = 3 columns                                     */}
    {/* ========================================================= */}

    <div className="grid grid-cols-1 gap-y-0 md:grid-cols-2 lg:grid-cols-3">


      {/* ======================================================= */}
      {/* EDUCATION                                               */}
      {/* ======================================================= */}

      <section
        className="
          pb-8
          md:border-r md:border-[#e5edf5] md:pb-0 md:pr-7
          dark:md:border-[#29394e]
          lg:pr-7
        "
      >

        {/* Heading */}
        <div className="mb-8 text-left">

          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#3978d4]">
            Education
          </p>

          <h2
            className={`mt-2 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            My Education
          </h2>

        </div>


        {/* ===================================================== */}
        {/* EDUCATION TIMELINE                                    */}
        {/* ===================================================== */}

        <div className="relative">

          {/* Timeline Line */}
          <div
            className={`absolute left-[4px] top-[5px] bottom-[5px] w-px ${
              darkMode ? "bg-[#334155]" : "bg-[#cbdceb]"
            }`}
          ></div>


          {/* =================================================== */}
          {/* BS INFORMATION TECHNOLOGY                           */}
          {/* =================================================== */}

          <div className="relative pb-7 pl-[48px] sm:pl-[56px]">

            {/* Dot */}
            <span
              className={`absolute left-0 top-[5px] h-[9px] w-[9px] rounded-full border-2 ${
                darkMode
                  ? "border-[#60a5fa] bg-[#111827]"
                  : "border-[#3978d4] bg-[#f7fafc]"
              }`}
            ></span>


            {/* Icon */}
            <span
              className={`absolute left-[22px] top-[17px] flex h-6 w-6 items-center justify-center sm:left-[27px] ${
                darkMode ? "text-[#60a5fa]" : "text-[#3978d4]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-[20px] w-[20px]"
              >
                <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
                <path d="M6 11.5V16c3 2 9 2 12 0v-4.5" />
                <path d="M21 9.5V15" />
              </svg>
            </span>


            {/* Text */}
            <div className="min-w-0">

              <h3
                className={`text-[14px] font-bold leading-[1.25] sm:text-[15px] sm:leading-5 ${
                  darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
                }`}
              >
                BS Information Technology (Hons)
              </h3>

              <p
                className={`mt-1 text-[12px] font-medium leading-[1.45] sm:text-[13px] sm:leading-5 ${
                  darkMode ? "text-[#60a5fa]" : "text-[#3978d4]"
                }`}
              >
                University of the Punjab, Gujranwala Campus
              </p>

              <p
                className={`mt-1 text-[12px] leading-[1.45] sm:text-[13px] sm:leading-5 ${
                  darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
                }`}
              >
                2023 – till now&nbsp; | &nbsp;CGPA: 3.60
              </p>

            </div>
          </div>


          {/* =================================================== */}
          {/* F.SC PRE-ENGINEERING                                */}
          {/* =================================================== */}

          <div className="relative pb-7 pl-[48px] sm:pl-[56px]">

            {/* Dot */}
            <span
              className={`absolute left-0 top-[5px] h-[9px] w-[9px] rounded-full border-2 ${
                darkMode
                  ? "border-[#60a5fa] bg-[#111827]"
                  : "border-[#3978d4] bg-[#f7fafc]"
              }`}
            ></span>


            {/* Icon */}
            <span
              className={`absolute left-[22px] top-[17px] flex h-6 w-6 items-center justify-center sm:left-[27px] ${
                darkMode ? "text-[#60a5fa]" : "text-[#3978d4]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-[20px] w-[20px]"
              >
                <path d="M4 19h16" />
                <path d="M6 17V7h12v10" />
                <path d="M8 10h8" />
                <path d="M8 13h8" />
              </svg>
            </span>


            {/* Text */}
            <div className="min-w-0">

              <h3
                className={`text-[14px] font-bold leading-[1.25] sm:text-[15px] sm:leading-5 ${
                  darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
                }`}
              >
                F.Sc. Pre-Engineering
              </h3>

              <p
                className={`mt-1 text-[12px] font-medium leading-[1.45] sm:text-[13px] sm:leading-5 ${
                  darkMode ? "text-[#60a5fa]" : "text-[#3978d4]"
                }`}
              >
                Superior Group of Colleges, Gujranwala
              </p>

              <p
                className={`mt-1 text-[12px] leading-[1.45] sm:text-[13px] sm:leading-5 ${
                  darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
                }`}
              >
                2023&nbsp; | &nbsp;1st Division (A)
              </p>

            </div>
          </div>


          {/* =================================================== */}
          {/* MATRICULATION                                       */}
          {/* =================================================== */}

          <div className="relative pl-[48px] sm:pl-[56px]">

            {/* Dot */}
            <span
              className={`absolute left-0 top-[5px] h-[9px] w-[9px] rounded-full border-2 ${
                darkMode
                  ? "border-[#60a5fa] bg-[#111827]"
                  : "border-[#3978d4] bg-[#f7fafc]"
              }`}
            ></span>


            {/* Icon */}
            <span
              className={`absolute left-[22px] top-[17px] flex h-6 w-6 items-center justify-center sm:left-[27px] ${
                darkMode ? "text-[#60a5fa]" : "text-[#3978d4]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-[20px] w-[20px]"
              >
                <path d="M4 19h16" />
                <path d="M6 19V8l6-4 6 4v11" />
                <path d="M9 19v-5h6v5" />
                <path d="M9 10h6" />
              </svg>
            </span>


            {/* Text */}
            <div className="min-w-0">

              <h3
                className={`text-[14px] font-bold leading-[1.25] sm:text-[15px] sm:leading-5 ${
                  darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
                }`}
              >
                Matriculation (Science)
              </h3>

              <p
                className={`mt-1 text-[12px] font-medium leading-[1.45] sm:text-[13px] sm:leading-5 ${
                  darkMode ? "text-[#60a5fa]" : "text-[#3978d4]"
                }`}
              >
                Gujranwala City Grammar School (GCGS)
              </p>

              <p
                className={`mt-1 text-[12px] leading-[1.45] sm:text-[13px] sm:leading-5 ${
                  darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
                }`}
              >
                2021&nbsp; | &nbsp;1st Division (A+)
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
      {/* CERTIFICATIONS                                            */}
      {/* ========================================================= */}

      <section
        id="certifications"
        className="
          pb-8
          pt-8
          md:pb-0
          md:pl-7
          md:pt-0
          lg:border-r
          lg:border-[#e5edf5]
          lg:px-7
          dark:lg:border-[#29394e]
        "
      >

        {/* Heading */}
        <div className="mb-5 text-left">

          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#3978d4]">
            Certifications & Achievements
          </p>

          <h2
            className={`mt-2 text-3xl font-extrabold leading-tight tracking-[-0.03em] sm:text-4xl ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            My Achievements
          </h2>

        </div>


        {/* ===================================================== */}
        {/* CERTIFICATION CARD                                    */}
        {/* ===================================================== */}

        <div
          className={`overflow-hidden rounded-xl border shadow-[0_5px_18px_rgba(37,78,121,0.05)] ${
            darkMode
              ? "border-[#334155] bg-[#182235]"
              : "border-[#e2ebf4] bg-white"
          }`}
        >

          {/* AI CERTIFICATE */}
          <div
            className={`flex min-h-[104px] items-center gap-4 px-4 py-3 ${
              darkMode
                ? "border-b border-[#334155]"
                : "border-b border-[#edf2f7]"
            }`}
          >

            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                darkMode
                  ? "bg-[#1e3a5f] text-[#60a5fa]"
                  : "bg-[#edf5ff] text-[#3978d4]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-[18px] w-[18px]"
              >
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="M9 3v2h6V3" />
                <path d="M9 10h6" />
                <path d="M9 14h6" />
                <path d="M9 18h3" />
              </svg>
            </div>

            <div className="min-w-0">

              <h3
                className={`text-[15px] font-bold leading-5 ${
                  darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
                }`}
              >
                AI Professional Certificate
              </h3>

              <p
                className={`mt-1 text-[13px] leading-5 ${
                  darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
                }`}
              >
                Completed through Coursera in collaboration with Google
              </p>

            </div>
          </div>


          {/* BEST STUDENT */}
          <div
            className={`flex min-h-[104px] items-center gap-4 px-4 py-3 ${
              darkMode
                ? "border-b border-[#334155]"
                : "border-b border-[#edf2f7]"
            }`}
          >

            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                darkMode
                  ? "bg-[#123d32] text-[#4ade80]"
                  : "bg-[#ecfdf5] text-[#16a34a]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-[18px] w-[18px]"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M9.5 11 8 20l4-2 4 2-1.5-9" />
              </svg>
            </div>

            <div className="min-w-0">

              <h3
                className={`text-[15px] font-bold leading-5 ${
                  darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
                }`}
              >
                Best Student Certificate
              </h3>

              <p
                className={`mt-1 text-[13px] leading-5 ${
                  darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
                }`}
              >
                Recognized as Best Student at School for academic
                performance & overall achievement
              </p>

            </div>
          </div>


          {/* EXCELLENT GRADES */}
          <div className="flex min-h-[104px] items-center gap-4 px-4 py-3">

            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                darkMode
                  ? "bg-[#42212b] text-[#fb7185]"
                  : "bg-[#fff1f2] text-[#e11d48]"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-[18px] w-[18px]"
              >
                <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
              </svg>
            </div>

            <div className="min-w-0">

              <h3
                className={`text-[15px] font-bold leading-5 ${
                  darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
                }`}
              >
                Excellent Grades in Board Exams
              </h3>

              <p
                className={`mt-1 text-[13px] leading-5 ${
                  darkMode ? "text-[#94a3b8]" : "text-[#58708e]"
                }`}
              >
                Achieved excellent academic results with A+ and A grades
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================= */}
{/* GITHUB                                                    */}
{/* ========================================================= */}

<section
  className="
    pt-8
    md:col-span-2
    md:pt-8
    lg:col-span-1
    lg:pl-7
    lg:pt-0
  "
>
  <div
    className="
      relative
      min-h-[264px]
      overflow-hidden
      rounded-xl
      bg-[#172f50]
      p-5
      shadow-[0_8px_24px_rgba(15,42,82,0.12)]
    "
  >

    {/* Subtle Background Detail */}
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.06]
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    ></div>


    {/* Soft Blue Glow */}
    <div
      className="
        pointer-events-none
        absolute
        -right-14
        -top-14
        h-40
        w-40
        rounded-full
        bg-[#3978d4]/20
        blur-3xl
      "
    ></div>


    {/* GitHub Icon */}
    <div className="relative z-10 mb-4">

      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          bg-white/10
          ring-1
          ring-white/10
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 text-white"
        >
          <path d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .7Z" />
        </svg>
      </div>

    </div>


    {/* Heading */}
    <h3
      className="
        relative
        z-10
        text-[18px]
        font-bold
        text-white
      "
    >
      My GitHub
    </h3>


    {/* Description */}
    <p
      className="
        relative
        z-10
        mt-3
        max-w-[215px]
        text-[13px]
        leading-5
        text-[#d5dfeb]
      "
    >
      Check out my GitHub profile to see more of my projects and code.
    </p>


    {/* Button */}
    <a
      href="https://github.com/bm-coder"
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative
        z-20
        mt-5
        inline-flex
        items-center
        gap-1.5
        rounded-lg
        bg-white
        px-3.5
        py-2
        text-[12px]
        font-semibold
        text-[#173151]
        shadow-[0_4px_12px_rgba(255,255,255,0.08)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#edf4fb]
        hover:shadow-[0_6px_16px_rgba(255,255,255,0.12)]
      "
    >
      Visit My GitHub

      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-3.5 w-3.5 transition-transform duration-300"
      >
        <path
          d="M4 10h11M10 5l5 5-5 5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>


    {/* ===================================================== */}
    {/* CODE WINDOW DECORATION                                */}
    {/* ===================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        bottom-4
        right-4
        w-[112px]
        overflow-hidden
        rounded-lg
        border
        border-white/10
        bg-[#0d1d3b]/80
        shadow-[0_8px_20px_rgba(0,0,0,0.12)]
      "
    >

      {/* Window Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-2.5
          py-2
        "
      >

        <div className="flex items-center gap-1">

          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70"></span>

          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70"></span>

          <span className="h-1.5 w-1.5 rounded-full bg-green-400/70"></span>

        </div>

        <span className="text-[6px] text-slate-500">
          code.jsx
        </span>

      </div>


      {/* Code */}
      <div
        className="
          space-y-1
          px-3
          py-3
          font-mono
          text-[7px]
          leading-3
        "
      >

        <div>
          <span className="text-purple-400">
            const
          </span>{" "}
          <span className="text-blue-300">
            app
          </span>{" "}
          <span className="text-slate-400">
            =
          </span>
        </div>

        <div className="pl-2">
          <span className="text-blue-300">
            React
          </span>
          <span className="text-slate-500">
            {" + "}
          </span>
          <span className="text-cyan-300">
            Tailwind
          </span>
        </div>

        <div className="pl-2">
          <span className="text-blue-300">
            JavaScript
          </span>
          <span className="text-slate-500">
            {" = "}
          </span>
          <span className="text-green-400">
            true
          </span>
        </div>

      </div>

    </div>


    {/* Bottom Accent */}
    <div
      className="
        pointer-events-none
        absolute
        bottom-5
        left-5
        h-[2px]
        w-12
        rounded-full
        bg-[#3978d4]
        opacity-60
      "
    ></div>


    {/* Very Subtle Corner Gradient */}
    <div
      className="
        pointer-events-none
        absolute
        bottom-0
        right-0
        h-28
        w-28
        rounded-tl-full
        bg-gradient-to-tl
        from-[#3978d4]/10
        to-transparent
      "
    ></div>

  </div>
</section>

    </div>
  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className={`py-8 sm:py-10 lg:py-12 ${
    darkMode ? "bg-[#182235]" : "bg-white"
  }`}
>
  <div className="mx-auto max-w-[1240px] px-4 sm:px-6">

    <div className="grid items-stretch gap-0 md:grid-cols-2 lg:grid-cols-[0.9fr_1.05fr_0.55fr]">

      {/* LEFT — CONTACT DETAILS */}
      <div className="min-w-0 pr-0 md:pr-6 lg:pr-7">

        <div className="mb-5 text-left">
          <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#3978d4]">
            Get In Touch
          </p>

          <h2
            className={`mt-2 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl ${
              darkMode ? "text-[#f1f5f9]" : "text-[#102a52]"
            }`}
          >
            Contact Me
          </h2>
        </div>

        <div className="space-y-3.5">

          {/* Email */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[16px] w-[16px] shrink-0 text-[#3978d4]"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>

            <a
              href="mailto:bismaziaullah29@gmail.com"
              className={`text-sm font-medium ${
                darkMode
                  ? "text-[#cbd5e1] hover:text-[#60a5fa]"
                  : "text-[#405574] hover:text-[#3978d4]"
              }`}
            >
              bismaziaullah29@gmail.com
            </a>
          </div>


          {/* Location */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[16px] w-[16px] shrink-0 text-[#3978d4]"
            >
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            <p
              className={`text-sm font-medium ${
                darkMode ? "text-[#cbd5e1]" : "text-[#405574]"
              }`}
            >
              Gujranwala, Punjab, Pakistan
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[16px] w-[16px] shrink-0 text-[#0A66C2]"
            >
              <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.01 2.01 0 1 0 5.25 7.02 2.01 2.01 0 0 0 5.25 3ZM20.44 13.04c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.41V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.38l.27-6.96Z" />
            </svg>

            <a
              href="https://www.linkedin.com/in/bisma-mehar"
              target="_blank"
              rel="noopener noreferrer"
              className={`break-all text-sm font-medium ${
                darkMode
                  ? "text-[#cbd5e1] hover:text-[#60a5fa]"
                  : "text-[#405574] hover:text-[#3978d4]"
              }`}
            >
              https://www.linkedin.com/in/bisma-mehar
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[16px] w-[16px] shrink-0 text-[#3978d4]"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 7.92c.85 0 1.71.12 2.51.36 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .26.18.58.69.48A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                clipRule="evenodd"
              />
            </svg>

            <a
              href="https://github.com/bm-coder"
              target="_blank"
              rel="noopener noreferrer"
              className={`break-all text-sm font-medium ${
                darkMode
                  ? "text-[#cbd5e1] hover:text-[#60a5fa]"
                  : "text-[#405574] hover:text-[#3978d4]"
              }`}
            >
              https://github.com/bm-coder
            </a>
          </div>

        </div>
      </div>


      {/* MIDDLE — FORM */}
      <form
  onSubmit={(e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oi48saf",
      "template_590e4r8",
      e.currentTarget,
      "kBCKloN2Q3cRVDosn"
    )
    .then(() => {
  alert("Message sent successfully!");

  setFormData({
    name: "",
    email: "",
    message: "",
  });
})
    .catch(() => {
      alert("Failed to send message. Please try again.");
    });
  }}
  className="
          mt-8
          border-t
          border-[#dce8f5]
          pt-7
          md:mt-0
          md:border-l
          md:border-t-0
          md:pl-7
          md:pt-0
          dark:border-[#334155]
        "
      >

        <div className="grid gap-4 sm:grid-cols-2">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={`mb-2 block text-sm font-semibold ${
                darkMode ? "text-[#cbd5e1]" : "text-[#405574]"
              }`}
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              value={formData.name}
onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              type="text"
              placeholder="Your name"
              className={`h-[36px] w-full rounded-md border px-3 text-sm outline-none transition ${
                darkMode
                  ? "border-[#334155] bg-[#182235] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#60a5fa]"
                  : "border-[#dce8f5] bg-white text-[#102a52] placeholder:text-[#9aabc0] focus:border-[#3978d4]"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`mb-2 block text-sm font-semibold ${
                darkMode ? "text-[#cbd5e1]" : "text-[#405574]"
              }`}
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              value={formData.email}
onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              type="email"
              placeholder="Your email"
              className={`h-[36px] w-full rounded-md border px-3 text-sm outline-none transition ${
                darkMode
                  ? "border-[#334155] bg-[#182235] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#60a5fa]"
                  : "border-[#dce8f5] bg-white text-[#102a52] placeholder:text-[#9aabc0] focus:border-[#3978d4]"
              }`}
            />
          </div>

        </div>

        {/* Message */}
        <div className="mt-4">
          <label
            htmlFor="message"
            className={`mb-2 block text-sm font-semibold ${
              darkMode ? "text-[#cbd5e1]" : "text-[#405574]"
            }`}
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Your message"
            rows="2"
            className={`h-[85px] w-full resize-none rounded-md border px-3 py-2 text-sm outline-none transition ${
              darkMode
                ? "border-[#334155] bg-[#182235] text-[#f1f5f9] placeholder:text-[#64748b] focus:border-[#60a5fa]"
                : "border-[#dce8f5] bg-white text-[#102a52] placeholder:text-[#9aabc0] focus:border-[#3978d4]"
            }`}
          />
        </div>

        <button
          type="submit"
          className="
            mt-2.5
            inline-flex
            items-center
            rounded-md
            bg-[#2f72dc]
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-[#245fbe]
          "
        >
          Send Message
        </button>

      </form>


      {/* RIGHT — HANDWRITTEN */}
      <div
        className="
          hidden
          items-center
          justify-center
          border-l
          border-[#dce8f5]
          lg:flex
          lg:ml-7
          lg:pl-7
          dark:border-[#334155]
        "
      >
        <div className="relative -rotate-3 text-center">

          <p
            className={`font-[cursive] text-[28px] leading-[0.95] ${
              darkMode ? "text-[#93c5fd]" : "text-[#173b69]"
            }`}
          >
            Let&apos;s
            <br />
            work
            <br />
            together
          </p>

          {/* Underline */}
          <svg
            viewBox="0 0 100 20"
            className="absolute -bottom-7 left-1/2 w-[90px] -translate-x-1/2 rotate-[-4deg] text-[#3978d4]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11C24 5 52 6 94 9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M78 4L94 9L83 16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Heart */}
          <svg
            viewBox="0 0 24 24"
            className="absolute -right-6 bottom-1 h-5 w-5 rotate-12 text-[#3978d4]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8 8.8C20.8 13.2 12 20 12 20S3.2 13.2 3.2 8.8C3.2 6.2 5 4.2 7.5 4.2C9.1 4.2 10.5 5 12 6.6C13.5 5 14.9 4.2 16.5 4.2C19 4.2 20.8 6.2 20.8 8.8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

        </div>
      </div>

    </div>
  </div>
</section>


{/* Footer */}
<footer
  className={`
    w-full
    border-t
    transition-colors
    duration-300
    ${
      darkMode
        ? "border-[#1d2b40] bg-[#142943]"
        : "border-[#e4edf7] bg-[#213b5b]"
    }
  `}
>
  <div
    className="
      mx-auto
      flex
      min-h-[68px]
      w-full
      max-w-[1240px]
      items-center
      px-6
      py-3
      sm:px-6
      lg:px-6
    "
  >
    <div
      className="
        grid
        w-full
        grid-cols-1
        items-center
        gap-3
        sm:grid-cols-3
        sm:gap-0
      "
    >

      {/* LEFT — NAME + ROLE */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          sm:items-start
        "
      >
        <h3
          className="
            text-[14px]
            font-bold
            leading-tight
            text-white
          "
        >
          Bisma Ziaullah
        </h3>

        <p
          className="
            mt-1
            text-[11px]
            font-medium
            leading-tight
            text-[#c5d3e4]
          "
        >
          Frontend Developer
        </p>
      </div>


      {/* CENTER — COPYRIGHT */}
      <div
        className="
          flex
          items-center
          justify-center
          text-center
        "
      >
        <p
          className="
            text-[11px]
            font-medium
            leading-5
            text-[#c5d3e4]
          "
        >
          © 2026 Bisma Ziaullah. All rights reserved.
        </p>
      </div>


      {/* RIGHT — SOCIAL ICONS */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-4
          sm:justify-end
        "
      >

        {/* GitHub */}
        <a
          href="https://github.com/bm-coder"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            text-white
            transition
            duration-200
            hover:text-[#9fc7ff]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[17px] w-[17px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.58 2 12.22C2 16.74 4.865 20.57 8.84 21.92C9.34 22.02 9.52 21.7 9.52 21.43C9.52 21.2 9.51 20.43 9.51 19.42C6.73 20.05 6.15 18.05 6.15 18.05C5.69 16.84 5.03 16.52 5.03 16.52C4.12 15.88 5.1 15.89 5.1 15.89C6.1 15.97 6.63 16.95 6.63 16.95C7.52 18.53 8.97 18.07 9.55 17.82C9.64 17.16 9.9 16.71 10.19 16.46C7.97 16.2 5.74 15.32 5.74 11.4C5.74 10.28 6.13 9.37 6.77 8.65C6.67 8.39 6.32 7.35 6.87 5.94C6.87 5.94 7.71 5.67 9.62 6.99C10.42 6.76 11.21 6.65 12 6.65C12.79 6.65 13.58 6.76 14.38 6.99C16.29 5.67 17.13 5.94 17.13 5.94C17.68 7.35 17.33 8.39 17.23 8.65C18.26 9.37 18.26 10.28 18.26 11.4C18.26 15.33 16.02 16.2 13.8 16.46C14.16 16.78 14.48 17.4 14.48 18.35C14.48 19.71 14.47 20.81 14.47 21.43C14.47 21.7 14.65 22.02 15.15 21.92C19.135 20.57 22 16.74 22 12.22C22 6.58 17.523 2 12 2Z"
            />
          </svg>
        </a>


        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bisma-mehar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            text-white
            transition
            duration-200
            hover:text-[#9fc7ff]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-[17px] w-[17px]"
          >
            <path
              d="M5.2 3.5C4.09 3.5 3.2 4.4 3.2 5.5C3.2 6.6 4.09 7.5 5.2 7.5C6.31 7.5 7.2 6.6 7.2 5.5C7.2 4.4 6.31 3.5 5.2 3.5Z"
            />

            <path
              d="M3.5 9H6.9V20.5H3.5V9Z"
            />

            <path
              d="M9.2 9H12.45V10.57H12.5C12.95 9.72 14.05 8.8 15.9 8.8C19.35 8.8 20 11.07 20 14.02V20.5H16.6V14.75C16.6 13.38 16.58 11.62 14.7 11.62C12.8 11.62 12.52 13.1 12.52 14.62V20.5H9.2V9Z"
            />
          </svg>
        </a>

      </div>

    </div>
  </div>
</footer>

{showTopButton && (
  <button
    onClick={scrollToTop}
    aria-label="Back to top"
    className="fixed bottom-20 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[#dce8f5] bg-white text-[#102a52] shadow-md transition-all duration-300 hover:-translate-y-1 sm:right-6"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  </button>
)}

    </div>

  );
}

export default App;
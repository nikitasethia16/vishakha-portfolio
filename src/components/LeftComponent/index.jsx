import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import useTypewriter from "../../hook/useTypewriter";
import SocialIcons from "./SocialIcon";

const LeftComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const typedText = useTypewriter("ishakha Jain", 100);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Why Me", href: "#why-me" },
    { label: "Contact Me", href: "#contact-me" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative">
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        V{typedText}
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Social Media Manager
      </h2>
      <p className="mt-4 max-w-sm leading-normal text-slate-400">
        Turning Followers Into Loyal Fans, and Likes Into Leads. Social Media
        Magic, Made Just for You.
      </p>

      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden mt-6 text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Nav Links - Large Screens */}
      <nav className="hidden lg:block">
        <ul className="mt-16 w-max">
          {navLinks.map((e, i) => (
            <li key={i}>
              <a
                href={e.href}
                className={`group flex items-center py-3 ${
                  activeSection === e.href ? "text-white font-bold" : ""
                }`}
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 transition-all ${
                    activeSection === e.href
                      ? "w-16 bg-white"
                      : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest ${
                    activeSection === e.href
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-200"
                  }`}
                >
                  {e.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav - only shown when menu is open */}
      {isOpen && (
        <nav className="lg:hidden mt-6">
          <ul className="space-y-3">
            {navLinks.map((e, i) => (
              <li key={i}>
                <a
                  href={e.href}
                  onClick={() => setIsOpen(false)} // Close menu on link click
                  className={`block text-sm font-bold uppercase ${
                    activeSection === e.href ? "text-white" : "text-slate-200"
                  } hover:text-white`}
                >
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Social Icons */}
      <div className="gap-4 mt-10 hidden lg:flex">
        <SocialIcons />
      </div>
    </header>
  );
};

export default LeftComponent;

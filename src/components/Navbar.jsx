import { useState } from "react";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

// Navigation links
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Social media links
const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nadee3038/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1E7b5nrLVm/",
    icon: FaFacebookF,
  },
];

// Contact details
const whatsappLink = "https://wa.me/94756777844";
const phoneLink = "tel:+94778442234";
const phoneDisplay = "+94 77 844 2234";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#EADFD9] bg-[#FFF9F6]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 xl:px-8">

        {/* LOGO */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 flex-col leading-none"
          aria-label="Nadee Herath - Home"
        >
          <span className="text-2xl font-semibold text-[#A94F65]">
            Nadee Herath
          </span>

          <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#C49A5A]">
            Beauty Artist
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-3 xl:flex 2xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-[#2D2424] transition-colors duration-300 hover:text-[#A94F65]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* DESKTOP SOCIAL ICONS + CONTACT BUTTONS */}
        <div className="hidden shrink-0 items-center gap-2 xl:flex">

          {/* Instagram */}
          <a
            href={socialLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Nadee Herath on Instagram"
            title="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4D4CF] text-lg text-[#A94F65] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A94F65] hover:bg-[#A94F65] hover:text-white"
          >
            <FaInstagram />
          </a>

          {/* Facebook */}
          <a
            href={socialLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Nadee Herath on Facebook"
            title="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4D4CF] text-base text-[#A94F65] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A94F65] hover:bg-[#A94F65] hover:text-white"
          >
            <FaFacebookF />
          </a>

          {/* DIRECT CALL - DESKTOP */}
          <a
            href={phoneLink}
            aria-label={`Call Nadee at ${phoneDisplay}`}
            title={`Call Now: ${phoneDisplay}`}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#E4D4CF] text-lg text-[#A94F65] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A94F65] hover:bg-[#A94F65] hover:text-white"
          >
            <FiPhoneCall />
          </a>

          {/* WHATSAPP BOOKING - DESKTOP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#A94F65] px-4 py-3 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F4055] hover:!text-white"
          >
            <FaWhatsapp className="text-lg text-white" />

            <span className="text-white">
              Book via WhatsApp
            </span>
          </a>

        </div>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D9C9C1] text-2xl text-[#2D2424] transition-colors duration-300 hover:border-[#A94F65] hover:text-[#A94F65] xl:hidden"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </nav>

      {/* MOBILE / TABLET NAVIGATION */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#EADFD9] bg-[#FFF9F6] px-5 pb-6 pt-4 xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {/* Navigation links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-[#2D2424] transition-colors duration-300 hover:bg-[#F8EFEC] hover:text-[#A94F65]"
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <div className="my-3 h-px w-full bg-[#EADFD9]" />

            {/* Social media heading */}
            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A94F65]">
              Follow Nadee
            </p>

            {/* Social media buttons */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  aria-label={`Follow Nadee Herath on ${label}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#E4D4CF] bg-white/70 px-4 py-3 text-sm font-semibold text-[#A94F65] transition-colors duration-300 hover:border-[#A94F65] hover:bg-[#F8EBED]"
                >
                  <Icon className="text-lg" />
                  {label}
                </a>
              ))}
            </div>

            {/* Contact heading */}
            <p className="mt-5 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A94F65]">
              Get in Touch
            </p>

            {/* WHATSAPP BOOKING - MOBILE */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#A94F65] px-5 py-3.5 text-sm font-semibold !text-white transition-colors duration-300 hover:bg-[#8F4055] hover:!text-white"
            >
              <FaWhatsapp className="text-lg text-white" />

              <span className="text-white">
                Book via WhatsApp
              </span>
            </a>

            {/* DIRECT CALL - MOBILE */}
            <a
              href={phoneLink}
              onClick={closeMenu}
              aria-label={`Call Nadee at ${phoneDisplay}`}
              className="mt-2 flex items-center justify-center gap-3 rounded-full border border-[#D9C9C1] bg-white px-5 py-3.5 text-sm font-semibold text-[#A94F65] transition-colors duration-300 hover:border-[#A94F65] hover:bg-[#F8EFEC]"
            >
              <FiPhoneCall className="text-lg" />

              <span>Call Now</span>

              <span className="text-xs font-medium text-[#756868]">
                {phoneDisplay}
              </span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import {
  FiMapPin,
  FiArrowUpRight,
  FiPhoneCall,
} from "react-icons/fi";

// Contact information
const contactLinks = {
  whatsapp: "https://wa.me/94756777844",
  phone: "tel:+94778442234",
  phoneDisplay: "+94 77 844 2234",
  instagram: "https://www.instagram.com/nadee3038/",
  facebook: "https://www.facebook.com/share/1E7b5nrLVm/",
};

// Beauty services
const services = [
  "Bridal Dressing",
  "Engagement Styling",
  "Graduation Styling",
  "Makeup & Hairstyling",
  "Photoshoot Styling",
];

function Contact() {
  // Pre-filled WhatsApp booking message
  const whatsappMessage = encodeURIComponent(
    `Hello Nadee,

I would like to inquire about your beauty and dressing services.

Occasion (Bridal / Engagement / Graduation / Birthday / Other):
Event / Shoot Date:
Location:
Service Required:
Dressing Style (if applicable):

Thank you.`
  );

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#2D2424] py-12 sm:scroll-mt-20 sm:py-14 lg:py-14"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-[#C49A5A]/15" />

      <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#A94F65]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-14">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Section label */}
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D7B36D]">
              Let&apos;s Talk
            </p>

            {/* Main heading */}
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1] text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Create Your
              <span className="italic text-[#E4B7C1]">
                {" "}Perfect Look
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Planning your wedding, engagement, graduation, birthday
              celebration or a special photoshoot? Share your date,
              location and the look you have in mind. You can also
              send outfit details and inspiration photographs directly
              to Nadee through WhatsApp.
            </p>

            {/* Services */}
            <div className="mt-5 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center gap-3"
                >
                  {index > 0 && (
                    <span className="text-xs text-[#D7B36D]/65">
                      ✦
                    </span>
                  )}

                  <span className="text-xs font-medium text-white/55">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-white/65">
              <FiMapPin className="shrink-0 text-base text-[#D7B36D]" />

              <span>
                On-location beauty and dressing services across Sri Lanka
              </span>
            </div>

            {/* Social media description */}
            <p className="mt-5 max-w-xl text-xs leading-6 text-white/45">
              Explore Nadee&apos;s latest bridal transformations,
              engagement looks, graduation styling and beauty creations
              on Instagram and Facebook.
            </p>
          </motion.div>

          {/* RIGHT SIDE - BOOKING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="lg:min-w-[320px] lg:max-w-[350px]"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-sm">

              {/* Card heading */}
              <p className="font-display text-2xl font-semibold text-white">
                Start a Conversation
              </p>

              {/* Card description */}
              <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
                Check availability and discuss your occasion,
                preferred beauty services and styling ideas
                directly with Nadee.
              </p>

              {/* WHATSAPP BUTTON */}
              <a
                href={`${contactLinks.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#A94F65] px-6 py-3.5 text-sm font-semibold !text-white shadow-[0_8px_25px_rgba(169,79,101,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#BC5B73] hover:!text-white"
              >
                <FaWhatsapp className="text-xl text-white" />

                <span className="text-white">
                  Chat on WhatsApp
                </span>

                <FiArrowUpRight className="ml-1 text-base text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* DIRECT CALL BUTTON */}
              <a
                href={contactLinks.phone}
                aria-label={`Call Nadee at ${contactLinks.phoneDisplay}`}
                className="group mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#D7B36D]/45 bg-white/[0.06] px-5 py-3.5 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D7B36D] hover:bg-white/10 hover:!text-white"
              >
                <FiPhoneCall className="text-lg text-[#D7B36D]" />

                <span className="text-white">
                  Call Now
                </span>

                <span className="text-xs font-medium text-white/65">
                  {contactLinks.phoneDisplay}
                </span>
              </a>

              {/* SOCIAL MEDIA AREA */}
              <div className="mt-5 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-4">

                  {/* Social text */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      Follow Nadee
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      See her latest work
                    </p>
                  </div>

                  {/* Social icons */}
                  <div className="flex shrink-0 items-center gap-3">

                    {/* INSTAGRAM */}
                    <a
                      href={contactLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Nadee Herath on Instagram"
                      title="Instagram"
                      className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF9F6] text-[#A94F65] shadow-[0_6px_18px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A94F65] hover:text-white"
                    >
                      <FaInstagram className="text-[20px] transition-transform duration-300 group-hover:scale-110" />
                    </a>

                    {/* FACEBOOK */}
                    <a
                      href={contactLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow Nadee Herath on Facebook"
                      title="Facebook"
                      className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF9F6] text-[#A94F65] shadow-[0_6px_18px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A94F65] hover:text-white"
                    >
                      <FaFacebookF className="text-[18px] transition-transform duration-300 group-hover:scale-110" />
                    </a>

                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
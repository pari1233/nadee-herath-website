import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiCamera } from "react-icons/fi";
import { LuGraduationCap, LuHeart } from "react-icons/lu";

import bridalDressingImage from "../assets/services/bridal-dressing.png";
import engagementImage from "../assets/services/engagement.jpeg";
import graduationImage from "../assets/services/graduation.png";
import makeupImage from "../assets/services/makeup.jpeg";
import hairstyleImage from "../assets/services/hairstyle.jpeg";
import sareeImage from "../assets/services/saree.jpeg";
import photoshootImage from "../assets/services/photoshoot-styling.jpeg";

// Featured occasion services
const occasionServices = [
  {
    title: "Engagement Styling",
    portfolioCategory: "Engagement",
    image: engagementImage,
    eyebrow: "Your Love Story",
    description:
      "Beautifully personalised makeup, hairstyling and dressing for your engagement celebration, thoughtfully created to complement your outfit and special moment.",
    icon: LuHeart,
    label: "Engagement Beauty",
  },
  {
    title: "Graduation Styling",
    portfolioCategory: "Graduation",
    image: graduationImage,
    eyebrow: "Celebrate Your Achievement",
    description:
      "Elegant makeup, hairstyling and dressing for graduation ceremonies and photoshoots, helping you look and feel your best on your special day.",
    icon: LuGraduationCap,
    label: "Graduation Beauty",
  },
];

// Additional beauty services
const services = [
  {
    title: "Makeup",
    portfolioCategory: "Makeup",
    image: makeupImage,
    eyebrow: "Beauty, Your Way",
    description:
      "From soft natural beauty to polished glamour, every makeup look is created around your features, outfit and occasion.",
  },
  {
    title: "Hairstyling",
    portfolioCategory: "Hairstyling",
    image: hairstyleImage,
    eyebrow: "The Perfect Finish",
    description:
      "Elegant hairstyles thoughtfully designed to complement your face, outfit and the overall look you have in mind.",
  },
  {
    title: "Dressing & Draping",
    portfolioCategory: "Dressing",
    image: sareeImage,
    eyebrow: "Tradition Meets Style",
    description:
      "Beautiful Kandyan, Indian and Western dressing with careful attention to detail, comfort and a polished finish.",
    extraLabel: "Kandyan · Indian · Western",
  },
  {
    title: "Photoshoot Styling",
    portfolioCategory: "Photoshoots",
    image: photoshootImage,
    eyebrow: "Camera Ready",
    description:
      "Complete beauty styling for pre-shoots, birthday shoots, portraits and other special photoshoot moments.",
    extraLabel: "Pre-shoots · Birthday Shoots",
    icon: FiCamera,
  },
];

function Services() {
  // Navigate to the selected Portfolio category
  const openPortfolioCategory = (category) => {
    window.dispatchEvent(
      new CustomEvent("portfolio-category-change", {
        detail: category,
      })
    );

    const portfolioSection = document.getElementById("portfolio");

    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Nadee, I would like to discuss your beauty and dressing services for my occasion.\n\nOccasion (Bridal / Engagement / Graduation / Other):\nEvent Date:\nLocation:\nRequired Services:\nPreferred Dressing Style:"
  );

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8EFEC] pb-14 pt-10 sm:scroll-mt-20 sm:pb-16 sm:pt-12 lg:pb-12 lg:pt-14"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full border border-[#C49A5A]/20" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#F1DADD]/45 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A94F65] sm:text-sm">
            Signature Services
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-[0.98] text-[#2D2424] sm:text-6xl">
            Beauty for
            <span className="italic text-[#A94F65]">
              {" "}Every Moment
            </span>
          </h2>

          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C49A5A]" />
            <span className="text-[#C49A5A]">✦</span>
            <span className="h-px w-10 bg-[#C49A5A]" />
          </div>

          <p className="mx-auto max-w-xl text-base leading-7 text-[#756868]">
            From your wedding and engagement to graduation ceremonies,
            celebrations and photoshoots, discover personalised makeup,
            hairstyling and dressing for every special moment.
          </p>
        </motion.div>

        {/* MAIN BRIDAL FEATURE */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="group mt-10"
        >
          <button
            type="button"
            onClick={() => openPortfolioCategory("Bridal")}
            className="relative grid w-full overflow-hidden rounded-[2rem] bg-[#2D2424] text-left lg:grid-cols-[1.15fr_0.85fr]"
          >
            {/* Bridal image */}
            <div className="relative h-[350px] overflow-hidden sm:h-[440px] lg:h-[500px]">
              <img
                src={bridalDressingImage}
                alt="Kandyan, Indian and Western bridal dressing by Nadee Herath"
                className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#2D2424]/25" />

              {/* Image badge */}
              <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-black/15 px-4 py-2 backdrop-blur-md">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90">
                  Bridal Beauty
                </span>
              </div>

              {/* Dressing styles */}
              <div className="absolute bottom-6 left-6 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md sm:block">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/85">
                  Kandyan · Indian · Western
                </p>
              </div>
            </div>

            {/* Bridal content */}
            <div className="relative flex flex-col justify-center px-7 py-9 sm:px-10 lg:px-12 lg:py-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C49A5A]" />

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D7B36D]">
                  Bridal Signature
                </p>
              </div>

              <h3 className="mt-5 font-display text-5xl font-semibold leading-none text-white sm:text-6xl">
                Bridal
                <span className="block italic text-[#E4B7C1]">
                  Dressing
                </span>
              </h3>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                Complete bridal styling, thoughtfully coordinated from
                makeup and hairstyling to dressing and the finest finishing
                details, creating an elegant look that feels beautifully yours.
              </p>

              <div className="mt-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D7B36D]">
                  Dressing Styles
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Kandyan",
                    "Indian",
                    "Western",
                    "Complete Bridal Look",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">
                Explore Bridal Work

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition duration-300 group-hover:bg-white group-hover:text-[#A94F65]">
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
          </button>
        </motion.article>

        {/* ENGAGEMENT & GRADUATION FEATURE CARDS */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {occasionServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() =>
                    openPortfolioCategory(service.portfolioCategory)
                  }
                  className="relative block w-full overflow-hidden rounded-[1.7rem] bg-[#EEE3DF] text-left"
                >
                  <div className="relative h-[340px] overflow-hidden sm:h-[390px] lg:h-[420px]">
                    <img
                      src={service.image}
                      alt={`${service.title} by Nadee Herath`}
                      className="h-full w-full object-cover object-top transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05]"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A1A]/95 via-[#241A1A]/20 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-xl text-white backdrop-blur-sm">
                      <Icon />
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#A94F65]">
                      <FiArrowUpRight />
                    </div>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E4C583]">
                        {service.eyebrow}
                      </p>

                      <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-6 text-white/80">
                        {service.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#E4C583]">
                        Explore {service.label}
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* OTHER BEAUTY SERVICES */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() =>
                    openPortfolioCategory(service.portfolioCategory)
                  }
                  className="relative block w-full overflow-hidden rounded-[1.6rem] bg-[#EEE3DF] text-left"
                >
                  <div className="relative h-[340px] overflow-hidden sm:h-[390px] lg:h-[410px]">
                    <img
                      src={service.image}
                      alt={`${service.title} by Nadee Herath`}
                      className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241A1A]/90 via-[#241A1A]/10 to-transparent" />

                    {/* Optional icon */}
                    {Icon && (
                      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm">
                        <Icon />
                      </div>
                    )}

                    {/* Arrow */}
                    <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-100 transition-all duration-300 group-hover:bg-white group-hover:text-[#A94F65]">
                      <FiArrowUpRight />
                    </div>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-[#E4C583]">
                        {service.eyebrow}
                      </p>

                      <h3 className="font-display text-3xl font-semibold leading-tight text-white">
                        {service.title}
                      </h3>

                      {service.extraLabel && (
                        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                          {service.extraLabel}
                        </p>
                      )}

                      {/* Hover description */}
                      <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="pt-3 text-sm leading-6 text-white/80">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 h-px w-8 bg-[#D7B36D] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-9 flex flex-col items-center justify-between gap-5 border-t border-[#DFCEC7] pt-7 text-center md:flex-row md:text-left"
        >
          <div>
            <p className="font-display text-2xl font-semibold text-[#2D2424]">
              Have a special occasion coming up?
            </p>

            <p className="mt-1 text-sm leading-6 text-[#756868]">
              Whether it's a wedding, engagement, graduation or photoshoot,
              share your ideas and let Nadee help you create your look.
            </p>
          </div>

          <a
            href={`https://wa.me/94756777844?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#A94F65] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#8F4055]"
          >
            <FaWhatsapp className="text-lg" />
            Discuss Your Look
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
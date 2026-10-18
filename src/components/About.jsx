import { motion } from "framer-motion";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";
import {
  LuSparkles,
  LuHeart,
  LuPalette,
  LuGraduationCap,
} from "react-icons/lu";

import aboutImage from "../assets/hero/profile.png";

// About section highlights
const highlights = [
  {
    icon: LuHeart,
    title: "Bridal & Engagement",
    text: "Beautifully personalised makeup, hairstyling and dressing for weddings and engagements.",
  },
  {
    icon: LuGraduationCap,
    title: "Graduation Styling",
    text: "Elegant makeup, hairstyling and dressing to celebrate your special achievement.",
  },
  {
    icon: LuPalette,
    title: "Complete Beauty Styling",
    text: "Kandyan, Indian and Western looks for celebrations, photoshoots and special occasions.",
  },
];

function About() {
  const whatsappMessage = encodeURIComponent(
    "Hello Nadee, I would like to know more about your bridal, engagement, graduation and beauty styling services."
  );

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-[#FFF9F6] pb-12 pt-8 sm:scroll-mt-20 sm:pb-14 sm:pt-10 lg:pb-12 lg:pt-10"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border border-[#D8B270]/30" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#F4E2E4]/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8">

        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="relative mx-auto max-w-lg">

            {/* Decorative blush circle */}
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#F0D9DD]" />

            {/* Decorative gold circle */}
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full border border-[#C49A5A]/50" />

            {/* Profile image */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={aboutImage}
                alt="Nadee Herath professional makeup artist, hairstylist and bridal dressing specialist in Sri Lanka"
                className="h-[460px] w-full object-cover object-top sm:h-[540px] lg:h-[590px]"
                loading="lazy"
              />

              {/* Image gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2D2424]/75 via-[#2D2424]/10 to-transparent px-7 pb-7 pt-28">

                <p className="font-display text-3xl font-semibold text-white">
                  Nadee Herath
                </p>

                <p className="mt-1 max-w-md text-sm leading-6 text-white/85">
                  Makeup Artist · Hairstylist · Bridal & Occasion Dressing
                  Specialist
                </p>

                <p className="mt-2 text-xs font-medium tracking-wide text-[#E8C987]">
                  Kandyan · Indian · Western
                </p>

              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-5 left-5 rounded-2xl border border-[#EBDDD8] bg-white/95 px-5 py-3 shadow-lg backdrop-blur-md sm:left-[-20px]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-2 text-[#A94F65]">

                <LuHeart className="text-lg" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Beauty with care
                </span>

              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT SIDE - ABOUT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          {/* Section label */}
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A94F65] sm:text-sm">
            Meet Nadee
          </p>

          {/* Main heading */}
          <h2 className="mt-4 max-w-2xl text-5xl font-semibold leading-[0.98] text-[#2D2424] sm:text-6xl">

            Creating Beauty That Feels

            <span className="block text-[#A94F65]">
              Like You
            </span>

          </h2>

          {/* Decorative divider */}
          <div className="my-6 flex items-center gap-3">

            <span className="h-px w-14 bg-[#C49A5A]" />

            <span className="text-lg text-[#C49A5A]">
              ✦
            </span>

            <span className="h-px w-14 bg-[#C49A5A]" />

          </div>

          {/* About description */}
          <div className="max-w-2xl space-y-4 text-base leading-8 text-[#756868] sm:text-lg">

            <p>
              Nadee Herath is a professional beauty and dressing artist
              specialising in bridal dressing, engagement styling,
              graduation looks, makeup and hairstyling for life's
              most memorable occasions.
            </p>

            <p>
              From timeless Kandyan bridal elegance and beautiful Indian
              dressing to modern Western styles, every look is
              thoughtfully created to complement your natural beauty,
              personality and individual style.
            </p>

            <p>
              Whether you're preparing for your wedding, celebrating
              your engagement, graduating, attending a special event
              or getting ready for a pre-shoot or birthday photoshoot,
              Nadee brings personalised beauty services directly
              to your location anywhere in Sri Lanka.
            </p>

          </div>

          {/* HIGHLIGHT CARDS */}
          <div className="mt-7 grid gap-3 sm:grid-cols-3">

            {highlights.map(({ icon: Icon, title, text }) => (

              <motion.div
                key={title}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group rounded-2xl border border-[#E9DCD6] bg-white/75 p-4 transition-colors duration-300 hover:border-[#DDB8C1] hover:bg-white"
              >

                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8EBED] text-lg text-[#A94F65] transition-colors duration-300 group-hover:bg-[#A94F65] group-hover:text-white">

                  <Icon />

                </div>

                {/* Title */}
                <h3 className="mt-3 text-base font-semibold leading-6 text-[#2D2424]">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-[#756868]">
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

          {/* ISLANDWIDE SERVICE NOTE */}
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#F8EFEC] px-4 py-3">

            <FiMapPin className="mt-0.5 shrink-0 text-lg text-[#A94F65]" />

            <div>

              <p className="text-sm font-semibold text-[#2D2424]">
                Available Across Sri Lanka
              </p>

              <p className="mt-1 text-xs leading-5 text-[#756868]">
                Professional on-location beauty and dressing services
                for weddings, engagements, graduations and celebrations.
              </p>

            </div>

          </div>

          {/* WHATSAPP CTA */}
          <div className="mt-6">

            <a
              href={`https://wa.me/94756777844?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#A94F65] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#8F4055]"
            >

              Chat with Nadee

              <FiArrowUpRight className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
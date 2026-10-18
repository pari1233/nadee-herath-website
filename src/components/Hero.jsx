import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCamera,
  FiMapPin,
} from "react-icons/fi";

import { LuCrown, LuGraduationCap, LuSparkles } from "react-icons/lu";

import heroOne from "../assets/hero/hero-1.jpeg";
import heroTwo from "../assets/hero/hero-2.jpeg";
import heroThree from "../assets/hero/hero-3.jpeg";
import heroFour from "../assets/hero/hero-4.jpeg";

import engagementImage from "../assets/hero/engagement.jpeg";
import graduationImage from "../assets/hero/graduation.png";

// Hero slider images
const heroImages = [
  {
    src: heroOne,
    alt: "Beautiful bridal makeup and dressing by Nadee Herath",
    label: "Bridal Dressing",
    caption: "Timeless bridal beauty for your unforgettable wedding day",
  },
  {
    src: engagementImage,
    alt: "Elegant engagement makeup and dressing by Nadee Herath",
    label: "Engagement Styling",
    caption: "Beautifully personalised styling for your engagement celebration",
  },
  {
    src: graduationImage,
    alt: "Professional graduation makeup and hairstyling by Nadee Herath",
    label: "Graduation Styling",
    caption: "Celebrate your achievement with a look as special as your day",
  },
  {
    src: heroTwo,
    alt: "Professional makeup and hairstyling by Nadee Herath",
    label: "Makeup & Hairstyling",
    caption: "Elegant beauty styling for every special occasion",
  },
  {
    src: heroThree,
    alt: "Kandyan Indian and Western dressing by Nadee Herath",
    label: "Kandyan · Indian · Western",
    caption: "Traditional elegance and modern dressing beautifully styled",
  },
  {
    src: heroFour,
    alt: "Pre-shoot and birthday photoshoot styling by Nadee Herath",
    label: "Photoshoot Styling",
    caption: "Picture-perfect beauty for pre-shoots and birthday celebrations",
  },
];

// Feature highlights
const features = [
  {
    icon: LuCrown,
    title: "Bridal & Engagement",
    description: "Your special moments",
  },
  {
    icon: LuGraduationCap,
    title: "Graduation Styling",
    description: "Celebrate beautifully",
  },
  {
    icon: FiMapPin,
    title: "Islandwide",
    description: "On-location service",
  },
];

function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic image slider
  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPreviousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + heroImages.length) % heroImages.length
    );
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % heroImages.length);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Nadee, I would like to check your availability for bridal, engagement, graduation or other beauty and dressing services."
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FFF9F6] pt-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-6 pt-10 lg:grid-cols-2 lg:px-8 lg:pb-8 lg:pt-12">

        {/* LEFT CONTENT */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Eyebrow */}
          <motion.p
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#A94F65] sm:text-sm"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Bridal · Engagement · Graduation · Beauty Styling
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="max-w-2xl text-5xl font-semibold leading-[0.95] text-[#2D2424] sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            Beauty That

            <span className="block text-[#A94F65]">
              Celebrates
            </span>

            Every Occasion
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            className="my-7 flex items-center gap-3"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="h-px w-14 bg-[#C49A5A]" />

            <span className="text-xl text-[#C49A5A]">
              ✦
            </span>

            <span className="h-px w-14 bg-[#C49A5A]" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-xl text-base leading-8 text-[#756868] sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            From your engagement and graduation to your wedding day,
            birthday celebrations and photoshoots, Nadee Herath creates
            personalised makeup, hairstyling and dressing looks that
            make every occasion unforgettable.

            <span className="mt-3 block font-medium text-[#A94F65]">
              Kandyan · Indian · Western · Available Islandwide
            </span>
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >

            {/* WhatsApp */}
            <a
              href={`https://wa.me/94756777844?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-[#A94F65] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#8F4055]"
            >
              <FaWhatsapp className="text-xl" />

              Book via WhatsApp
            </a>

            {/* Portfolio */}
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-3 rounded-full border border-[#CFAEB5] px-7 py-4 text-sm font-semibold text-[#2D2424] transition duration-300 hover:-translate-y-1 hover:border-[#A94F65] hover:text-[#A94F65]"
            >
              View Portfolio

              <FiArrowRight />
            </a>
          </motion.div>

          {/* FEATURE HIGHLIGHTS */}
          <motion.div
            className="mt-8 grid grid-cols-1 gap-5 border-t border-[#E8DAD5] pt-6 sm:grid-cols-3"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E0BFC5] text-lg text-[#A94F65]">
                  <Icon />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#2D2424]">
                    {title}
                  </p>

                  <p className="text-xs text-[#756868]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div
            className="relative mx-auto max-w-lg lg:max-w-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsPaused(false);
              }
            }}
          >

            {/* Decorative blush circle */}
            <motion.div
              className="pointer-events-none absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#F1DDE0]"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Decorative gold circle */}
            <motion.div
              className="pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 rounded-full border border-[#D8B270]"
              animate={{
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main image container */}
            <div className="relative h-[470px] overflow-hidden rounded-[2rem] bg-[#F4E7E3] shadow-[0_25px_70px_rgba(79,45,48,0.16)] sm:h-[590px]">

              {/* Animated images */}
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeImage}
                  src={heroImages[activeImage].src}
                  alt={heroImages[activeImage].alt}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  transition={{
                    opacity: {
                      duration: 1,
                    },
                    scale: {
                      duration: 5.5,
                      ease: "easeOut",
                    },
                  }}
                />
              </AnimatePresence>

              {/* Image gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2D2424]/70 via-transparent to-transparent" />

              {/* Animated caption */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-7 pt-28">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${activeImage}`}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <LuSparkles className="text-sm text-[#E6C987]" />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E6C987]">
                        {heroImages[activeImage].label}
                      </p>
                    </div>

                    <p className="max-w-sm text-sm font-medium leading-6 text-white">
                      {heroImages[activeImage].caption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Previous button */}
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Show previous image"
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2D2424] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white"
              >
                <FiArrowLeft />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Show next image"
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#2D2424] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white"
              >
                <FiArrowRight />
              </button>

              {/* Slider indicators */}
              <div className="absolute bottom-7 right-6 flex items-center gap-2">
                {heroImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`Show ${image.label}`}
                    aria-current={activeImage === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeImage === index
                        ? "w-7 bg-white"
                        : "w-2 bg-white/55 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="pointer-events-none absolute -top-5 left-5 rounded-2xl border border-[#F0E4DF] bg-white/95 px-5 py-2 shadow-lg backdrop-blur-md sm:left-[-25px]"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#A94F65]">
                Available
              </p>

              <p className="mt-1 font-display text-xl font-semibold text-[#2D2424]">
                Across Sri Lanka
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
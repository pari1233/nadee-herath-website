import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiX,
} from "react-icons/fi";

// Bridal images
import Bride1 from "../assets/portfolio/Bridal1.jpeg";
import Bride2 from "../assets/portfolio/Bridal2.jpeg";
import Bride3 from "../assets/portfolio/Bridal3.jpeg";

// Engagement images
import Engagement1 from "../assets/portfolio/Engagement1.jpeg";


// Graduation images
import Graduation1 from "../assets/portfolio/Graduation1.png";
import Graduation2 from "../assets/portfolio/Graduation2.jpeg";

// Makeup images
import Makeup1 from "../assets/portfolio/Makeup1.jpeg";
import Makeup2 from "../assets/portfolio/Makeup2.jpeg";
import Makeup3 from "../assets/portfolio/Makeup3.jpeg";
import Makeup4 from "../assets/portfolio/Makeup4.jpeg";
import Makeup5 from "../assets/portfolio/Makeup5.jpeg";

// Hairstyling images
import Hairstyle1 from "../assets/portfolio/Hairstyle1.jpeg";
import Hairstyle2 from "../assets/portfolio/Hairstyle2.jpeg";
import Hairstyle3 from "../assets/portfolio/Hairstyle3.jpeg";

// Dressing images
import Dressing1 from "../assets/portfolio/Dressing1.jpeg";
import Dressing2 from "../assets/portfolio/Dressing2.jpeg";
import Dressing3 from "../assets/portfolio/Dressing3.jpeg";

// Photoshoot images
import Photoshoots1 from "../assets/portfolio/Photoshoots1.jpeg";
import Photoshoots2 from "../assets/portfolio/Photoshoots2.jpeg";
import Photoshoots3 from "../assets/portfolio/Photoshoots3.jpeg";

// Portfolio categories
const categories = [
  "All",
  "Bridal",
  "Engagement",
  "Graduation",
  "Makeup",
  "Hairstyling",
  "Dressing",
  "Photoshoots",
];

// Portfolio items
const portfolioItems = [
  // BRIDAL
  {
    id: 1,
    image: Bride1,
    title: "Bridal Elegance",
    primaryCategory: "Bridal",
    categories: ["Bridal", "Makeup"],
    style: "Complete Bridal Look",
    position: "object-top",
  },
  {
    id: 2,
    image: Bride2,
    title: "Timeless Bride",
    primaryCategory: "Bridal",
    categories: ["Bridal"],
    style: "Traditional Bridal",
    position: "object-top",
  },
  {
    id: 3,
    image: Bride3,
    title: "Bridal Beauty",
    primaryCategory: "Bridal",
    categories: ["Bridal"],
    style: "Elegant Bridal",
    position: "object-top",
  },

  // ENGAGEMENT
  {
    id: 18,
    image: Engagement1,
    title: "Engagement Elegance",
    primaryCategory: "Engagement",
    categories: ["Engagement", "Makeup"],
    style: "Complete Engagement Styling",
    position: "object-top",
  },

  // GRADUATION
  {
    id: 20,
    image: Graduation1,
    title: "Graduation Glow",
    primaryCategory: "Graduation",
    categories: ["Graduation", "Makeup"],
    style: "Graduation Makeup",
    position: "object-top",
  },
  {
    id: 21,
    image: Graduation2,
    title: "A Moment to Celebrate",
    primaryCategory: "Graduation",
    categories: ["Graduation", "Hairstyling"],
    style: "Graduation Hair & Dressing",
    position: "object-top",
  },

  // MAKEUP
  {
    id: 4,
    image: Makeup1,
    title: "Elegant Glam",
    primaryCategory: "Makeup",
    categories: ["Makeup", "Photoshoots"],
    style: "Glam Makeup",
    shootType: "Birthday Shoot",
    position: "object-top",
  },
  {
    id: 5,
    image: Makeup2,
    title: "Soft Glam",
    primaryCategory: "Makeup",
    categories: ["Makeup", "Dressing"],
    style: "Soft Glam",
    shootType: "Pre-shoot",
    position: "object-top",
  },
  {
    id: 6,
    image: Makeup3,
    title: "Polished Beauty",
    primaryCategory: "Makeup",
    categories: ["Makeup", "Dressing"],
    style: "Occasion Makeup",
    shootType: "Portrait Styling",
    position: "object-top",
  },
  {
    id: 7,
    image: Makeup4,
    title: "Soft Glam",
    primaryCategory: "Makeup",
    categories: ["Makeup", "Dressing"],
    style: "Soft Glam",
    shootType: "Pre-shoot",
    position: "object-top",
  },
  {
    id: 8,
    image: Makeup5,
    title: "Polished Beauty",
    primaryCategory: "Makeup",
    categories: ["Makeup", "Photoshoots"],
    style: "Occasion Makeup",
    shootType: "Portrait Styling",
    position: "object-top",
  },

  // HAIRSTYLING
  {
    id: 9,
    image: Hairstyle1,
    title: "Elegant Hair Detail",
    primaryCategory: "Hairstyling",
    categories: ["Hairstyling", "Bridal"],
    style: "Elegant Updo",
    position: "object-center",
  },
  {
    id: 10,
    image: Hairstyle2,
    title: "Hair Artistry",
    primaryCategory: "Hairstyling",
    categories: ["Hairstyling"],
    style: "Hair Detail",
    position: "object-center",
  },
  {
    id: 11,
    image: Hairstyle3,
    title: "Occasion Hairstyle",
    primaryCategory: "Hairstyling",
    categories: ["Hairstyling", "Bridal"],
    style: "Occasion Hair",
    position: "object-center",
  },

  // DRESSING
  {
    id: 12,
    image: Dressing1,
    title: "Traditional Elegance",
    primaryCategory: "Dressing",
    categories: ["Dressing"],
    style: "Kandyan",
    position: "object-top",
  },
  {
    id: 13,
    image: Dressing2,
    title: "Classic Dressing",
    primaryCategory: "Dressing",
    categories: ["Dressing"],
    style: "Indian",
    position: "object-top",
  },
  {
    id: 14,
    image: Dressing3,
    title: "Modern Styling",
    primaryCategory: "Dressing",
    categories: ["Dressing"],
    style: "Western",
    position: "object-top",
  },

  // PHOTOSHOOTS
  {
    id: 15,
    image: Photoshoots1,
    title: "Polished Beauty",
    primaryCategory: "Photoshoots",
    categories: ["Photoshoots", "Makeup"],
    style: "Occasion Makeup",
    shootType: "Portrait Styling",
    position: "object-top",
  },
  {
    id: 16,
    image: Photoshoots2,
    title: "Elegant Portrait",
    primaryCategory: "Photoshoots",
    categories: ["Photoshoots", "Makeup"],
    style: "Portrait Styling",
    shootType: "Portrait Styling",
    position: "object-center",
  },
  {
    id: 17,
    image: Photoshoots3,
    title: "Creative Photoshoot",
    primaryCategory: "Photoshoots",
    categories: ["Photoshoots", "Makeup"],
    style: "Creative Styling",
    shootType: "Event Coverage",
    position: "object-center",
  },
];

// Gallery animation
const galleryVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.055,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Individual image animation
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  // Filter portfolio images
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) =>
      item.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  // Selected image information
  const selectedIndex = filteredItems.findIndex(
    (item) => item.id === selectedId
  );

  const selectedImage =
    selectedIndex >= 0 ? filteredItems[selectedIndex] : null;

  // Receive category requests from Services.jsx
  useEffect(() => {
    const handleCategoryChange = (event) => {
      const requestedCategory = event.detail;

      if (!categories.includes(requestedCategory)) {
        return;
      }

      setActiveCategory(requestedCategory);
      setSelectedId(null);
    };

    window.addEventListener(
      "portfolio-category-change",
      handleCategoryChange
    );

    return () => {
      window.removeEventListener(
        "portfolio-category-change",
        handleCategoryChange
      );
    };
  }, []);

  // Previous image
  const previousImage = () => {
    if (!filteredItems.length) return;

    const nextIndex =
      selectedIndex <= 0
        ? filteredItems.length - 1
        : selectedIndex - 1;

    setSelectedId(filteredItems[nextIndex].id);
  };

  // Next image
  const nextImage = () => {
    if (!filteredItems.length) return;

    const nextIndex =
      selectedIndex >= filteredItems.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedId(filteredItems[nextIndex].id);
  };

  // Keyboard controls and body scroll lock
  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedIndex, filteredItems]);

  // Display category label
  const getDisplayCategory = (item) => {
    if (activeCategory === "All") {
      return item.primaryCategory;
    }

    return activeCategory;
  };

  // Display secondary label
  const getSecondaryLabel = (item) => {
    if (activeCategory === "Photoshoots" && item.shootType) {
      return item.shootType;
    }

    return item.style;
  };

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 overflow-hidden bg-[#FFF9F6] pb-14 pt-12 sm:scroll-mt-20 sm:pb-16 sm:pt-14 lg:pb-12 lg:pt-16"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#F3E0E3]/35 blur-3xl" />

      <div className="pointer-events-none absolute -right-36 bottom-20 h-80 w-80 rounded-full border border-[#C49A5A]/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A94F65] sm:text-sm">
            Selected Work
          </p>

          <h2 className="mt-4 text-5xl font-semibold leading-[0.98] text-[#2D2424] sm:text-6xl">
            A Glimpse Into
            <span className="italic text-[#A94F65]">
              {" "}
              Nadee&apos;s Artistry
            </span>
          </h2>

          <div className="mx-auto my-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C49A5A]" />
            <span className="text-[#C49A5A]">✦</span>
            <span className="h-px w-10 bg-[#C49A5A]" />
          </div>

          <p className="mx-auto max-w-2xl leading-7 text-[#756868]">
            Discover Nadee&apos;s bridal, engagement and graduation
            styling, alongside makeup, hairstyling, traditional
            dressing and beautiful looks created for photoshoots
            and special occasions.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="mt-8 flex justify-center"
        >
          <div className="flex flex-wrap justify-center gap-2 rounded-[2rem] border border-[#E8DAD5] bg-white/65 p-2 shadow-[0_10px_35px_rgba(79,45,48,0.04)] backdrop-blur-sm">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    if (category === activeCategory) return;

                    setActiveCategory(category);
                    setSelectedId(null);
                  }}
                  aria-pressed={active}
                  className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300 sm:px-5 ${
                    active
                      ? "text-white"
                      : "text-[#756868] hover:text-[#A94F65]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="portfolio-filter"
                      className="absolute inset-0 rounded-full bg-[#A94F65]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* PORTFOLIO GALLERY */}
        <div className="mt-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={galleryVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="columns-1 gap-4 sm:columns-2 lg:columns-3"
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const displayCategory = getDisplayCategory(item);
                  const secondaryLabel = getSecondaryLabel(item);

                  return (
                    <motion.article
                      key={item.id}
                      variants={itemVariants}
                      className="mb-4 break-inside-avoid"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className="group relative block w-full overflow-hidden rounded-[1.6rem] bg-[#EEE3DF] text-left"
                      >
                        <img
                          src={item.image}
                          alt={`${item.title} by Nadee Herath`}
                          loading="lazy"
                          className={`h-auto w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${item.position}`}
                        />

                        {/* Image gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#211818]/85 via-[#211818]/5 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-90" />

                        {/* Category badges */}
                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                          <span className="rounded-full border border-white/25 bg-black/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                            {displayCategory}
                          </span>

                          {secondaryLabel && (
                            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                              {secondaryLabel}
                            </span>
                          )}
                        </div>

                        {/* View icon */}
                        <div className="absolute right-5 top-5 flex h-10 w-10 translate-y-1 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:bg-white group-hover:text-[#A94F65] group-hover:opacity-100">
                          <FiArrowUpRight />
                        </div>

                        {/* Image information */}
                        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                            {item.title}
                          </p>

                          <div className="mt-2 flex items-center gap-2 text-xs text-white/70 opacity-0 transition-opacity delay-75 duration-300 group-hover:opacity-100">
                            <span className="h-px w-7 bg-[#D7B36D]" />
                            View look
                          </div>
                        </div>
                      </button>
                    </motion.article>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mx-auto max-w-xl rounded-[1.5rem] border border-[#E8DAD5] bg-white/70 px-6 py-12 text-center"
                >
                  <p className="font-display text-2xl font-semibold text-[#2D2424]">
                    More beautiful moments coming soon
                  </p>

                  <p className="mt-3 text-sm leading-7 text-[#756868]">
                    New {activeCategory.toLowerCase()} styling photographs
                    will be added to this collection soon.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-12 max-w-3xl border-t border-[#E8DAD5] pt-8 text-center"
        >
          <span className="font-display text-5xl text-[#C49A5A]/45">
            “
          </span>

          <p className="-mt-3 font-display text-3xl font-semibold leading-tight text-[#2D2424] sm:text-4xl">
            Every look should feel
            <span className="italic text-[#A94F65]">
              {" "}unmistakably you.
            </span>
          </p>

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C49A5A]">
            Nadee Herath
          </p>
        </motion.div>
      </div>

      {/* IMAGE LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio image viewer"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#181212]/95 p-4 backdrop-blur-lg sm:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close image"
              onClick={() => setSelectedId(null)}
              className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white hover:text-[#2D2424]"
            >
              <FiX />
            </button>

            {/* Previous image */}
            {filteredItems.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2D2424] sm:left-8"
              >
                <FiArrowLeft />
              </button>
            )}

            {/* Selected image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage.id}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.28,
                  ease: "easeOut",
                }}
                onClick={(event) => event.stopPropagation()}
                className="flex max-h-[92vh] max-w-5xl flex-col items-center"
              >
                <img
                  src={selectedImage.image}
                  alt={`${selectedImage.title} by Nadee Herath`}
                  className="max-h-[76vh] max-w-full rounded-[1.5rem] object-contain"
                />

                <div className="mt-5 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
                      {getDisplayCategory(selectedImage)}
                    </span>

                    {getSecondaryLabel(selectedImage) && (
                      <>
                        <span className="text-white/25">·</span>

                        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D7B36D]">
                          {getSecondaryLabel(selectedImage)}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next image */}
            {filteredItems.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-[#2D2424] sm:right-8"
              >
                <FiArrowRight />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
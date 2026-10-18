import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Shalini",
    location: "Colombo",
    occasion: "Bridal Dressing",
    review:
      "Thank you so much Nadee for making me feel so beautiful on my wedding day. I loved how everything came together, especially my makeup, hair and dressing. You were very calm and patient while getting me ready, which made the whole morning feel much less stressful.",
  },
  {
    id: 2,
    name: "Dinithi",
    location: "Gampaha",
    occasion: "Kandyan Dressing",
    review:
      "I was really happy with my Kandyan look. Everything was arranged very neatly and the dressing was comfortable throughout the function. Nadee also helped me choose a hairstyle and makeup look that suited the outfit without making it feel too heavy.",
  },
  {
    id: 3,
    name: "Sachini",
    location: "Kandy",
    occasion: "Indian Dressing",
    review:
      "I wanted an Indian style for a family function and showed Nadee a few reference photos before the day. She understood the look I was going for and made everything work nicely with my saree and jewellery. I received so many compliments that evening.",
  },
  {
    id: 4,
    name: "Tharushi",
    location: "Negombo",
    occasion: "Pre-shoot Styling",
    review:
      "Nadee did my makeup and hair for our pre-shoot and I was really happy with how everything looked in the photos. The makeup still looked natural in person but showed beautifully on camera. She also helped me decide what would work best with my outfits.",
  },
  {
    id: 5,
    name: "Kavindi",
    location: "Kurunegala",
    occasion: "Birthday Shoot",
    review:
      "I booked Nadee for my birthday shoot and absolutely loved the final look. I wanted something glamorous but still like myself, and she got the balance exactly right. My makeup and hair stayed beautiful for the entire shoot and looked amazing in the pictures.",
  },
  {
    id: 6,
    name: "Nethmi",
    location: "Colombo",
    occasion: "Makeup & Hairstyling",
    review:
      "I asked for a simple and elegant look for a special event and Nadee understood exactly what I meant. The makeup was not too heavy, the hairstyle suited me really well and I felt comfortable throughout the whole event.",
  },
];

function Reviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showPreviousReview = () => {
    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const showNextReview = () => {
    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      setActiveReview((current) =>
        current === reviews.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentReview = reviews[activeReview];

  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden bg-[#F8EFEC] pb-12 pt-10 sm:scroll-mt-20 sm:pb-14 sm:pt-12 lg:pb-12 lg:pt-12"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-24 top-16 h-52 w-52 rounded-full border border-[#C49A5A]/15" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#F2DDE1]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A94F65] sm:text-sm">
            Kind Words
          </p>

          <h2 className="mt-3 text-4xl font-semibold leading-[0.98] text-[#2D2424] sm:text-5xl">
            Loved by the Women
            <span className="block italic text-[#A94F65]">
              I&apos;ve Styled
            </span>
          </h2>

          <div className="mx-auto my-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C49A5A]" />
            <span className="text-[#C49A5A]">✦</span>
            <span className="h-px w-9 bg-[#C49A5A]" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-6 text-[#756868] sm:text-base">
            From weddings and special occasions to pre-shoots and birthday
            shoots, every experience is created to feel personal and
            comfortable.
          </p>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-8 max-w-4xl"
        >
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative overflow-hidden rounded-[1.75rem] border border-[#E7D7D1] bg-[#FFF9F6] px-6 py-7 shadow-[0_16px_45px_rgba(79,45,48,0.06)] sm:px-8 sm:py-8 lg:px-12 lg:py-9"
          >
            {/* Decorative quotation mark */}
            <span className="pointer-events-none absolute -left-1 -top-8 font-display text-[8rem] leading-none text-[#A94F65]/[0.05]">
              “
            </span>

            {/* Stars */}
            <div className="relative flex justify-center gap-1 text-[#C49A5A]">
              {[0, 1, 2, 3, 4].map((star) => (
                <FaStar key={star} className="text-xs" />
              ))}
            </div>

            {/* Changing review */}
            <div className="relative mt-5 min-h-[230px] sm:min-h-[190px] lg:min-h-[175px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center"
                >
                  <blockquote className="mx-auto max-w-3xl font-display text-xl font-semibold leading-[1.5] text-[#2D2424] sm:text-2xl lg:text-[1.65rem]">
                    “{currentReview.review}”
                  </blockquote>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="h-px w-6 bg-[#C49A5A]/45" />

                    <div>
                      <p className="text-sm font-semibold text-[#2D2424]">
                        {currentReview.name}
                      </p>

                      <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.17em] text-[#A94F65]">
                        {currentReview.occasion} · {currentReview.location}
                      </p>
                    </div>

                    <span className="h-px w-6 bg-[#C49A5A]/45" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="relative mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={showPreviousReview}
                aria-label="Previous review"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCC9C3] text-sm text-[#2D2424] transition duration-300 hover:border-[#A94F65] hover:bg-[#A94F65] hover:text-white"
              >
                <FiArrowLeft />
              </button>

              <div className="flex items-center gap-2">
                {reviews.map((review, index) => (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => setActiveReview(index)}
                    aria-label={`Show review ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeReview === index
                        ? "w-6 bg-[#A94F65]"
                        : "w-1.5 bg-[#D8C5BF] hover:bg-[#B98A96]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNextReview}
                aria-label="Next review"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCC9C3] text-sm text-[#2D2424] transition duration-300 hover:border-[#A94F65] hover:bg-[#A94F65] hover:text-white"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="font-display text-xl font-semibold text-[#2D2424] sm:text-2xl">
            Your moment. Your style. Your confidence.
          </p>

          <p className="mt-1.5 text-xs leading-5 text-[#756868] sm:text-sm">
            Makeup · Hairstyling · Kandyan · Indian · Western · Bridal Dressing
            · Photoshoot Styling
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;
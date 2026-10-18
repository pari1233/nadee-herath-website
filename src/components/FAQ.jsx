import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    id: 1,
    question: "Do you travel anywhere in Sri Lanka?",
    answer:
      "Yes. Nadee provides on-location beauty, dressing and photoshoot styling services across Sri Lanka. Travel arrangements can be discussed when confirming your booking.",
  },
  {
    id: 2,
    question: "Do you provide complete bridal dressing?",
    answer:
      "Yes. Complete bridal dressing is available, including makeup, hairstyling, dressing and finishing touches needed to bring the full bridal look together.",
  },
  {
    id: 3,
    question: "Do you provide Kandyan, Indian and Western dressing?",
    answer:
      "Yes. Nadee provides Kandyan, Indian and Western dressing for weddings, celebrations, photoshoots and other special occasions. You can share your outfit and preferred style before the appointment.",
  },
  {
    id: 4,
    question: "Can I book only makeup or hairstyling?",
    answer:
      "Absolutely. You can book individual services such as makeup or hairstyling, or combine them with dressing depending on the look you need for your occasion.",
  },
  {
    id: 5,
    question: "Do you provide styling for pre-shoots?",
    answer:
      "Yes. Nadee provides makeup, hairstyling and complete styling for pre-shoots. You can send your outfits, shoot concept and inspiration photos beforehand so the look can be planned around them.",
  },
  {
    id: 6,
    question: "Do you provide styling for birthday shoots?",
    answer:
      "Yes. Birthday-shoot styling is available, including makeup and hairstyling tailored to your outfit, shoot concept and the type of look you want to create.",
  },
  {
    id: 7,
    question: "Do you only provide services for brides?",
    answer:
      "Not at all. Nadee styles clients for weddings, homecomings, graduations, parties, family celebrations, pre-shoots, birthday shoots and many other special occasions.",
  },
  {
    id: 8,
    question: "Can I send inspiration photos before my appointment?",
    answer:
      "Of course. You are welcome to share your outfit, jewellery, hairstyle ideas, makeup references, dressing style or photoshoot inspiration through WhatsApp before your appointment.",
  },
  {
    id: 9,
    question: "How early should I make my booking?",
    answer:
      "Booking as early as possible is recommended, especially for weddings, popular dates and planned photoshoots. You can contact Nadee through WhatsApp to check availability for your date.",
  },
  {
    id: 10,
    question: "How can I check prices and availability?",
    answer:
      "Simply contact Nadee through WhatsApp with your date, location, occasion or shoot type, required services and preferred dressing style if applicable. She can then discuss availability and booking details directly with you.",
  },
];

function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  const toggleFAQ = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-[#FFF9F6] pb-14 pt-10 sm:scroll-mt-20 sm:pb-16 sm:pt-12 lg:pb-16 lg:pt-14"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-28 top-16 h-64 w-64 rounded-full bg-[#F3E0E3]/35 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-60 w-60 rounded-full border border-[#C49A5A]/15" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A94F65] sm:text-sm">
              Before Your Appointment
            </p>

            <h2 className="mt-3 max-w-lg text-4xl font-semibold leading-[0.98] text-[#2D2424] sm:text-5xl lg:text-6xl">
              A Few Things
              <span className="block italic text-[#A94F65]">
                You May Wonder
              </span>
            </h2>

            <div className="my-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C49A5A]" />
              <span className="text-[#C49A5A]">✦</span>
              <span className="h-px w-10 bg-[#C49A5A]" />
            </div>

            <p className="max-w-md text-sm leading-7 text-[#756868] sm:text-base">
              Everything you may want to know before booking your beauty,
              dressing or photoshoot styling appointment with Nadee.
            </p>

            {/* Mini CTA */}
            <div className="mt-7 max-w-md rounded-[1.6rem] border border-[#E5D6D1] bg-[#F8EFEC] p-5">
              <p className="font-display text-xl font-semibold text-[#2D2424]">
                Still have a question?
              </p>

              <p className="mt-2 text-sm leading-6 text-[#756868]">
                Chat directly with Nadee and tell her what you have in mind.
              </p>

              <a
                href="https://wa.me/94756777844?text=Hello%20Nadee%2C%20I%20have%20a%20question%20about%20your%20beauty%2C%20dressing%20or%20photoshoot%20styling%20services."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#A94F65] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#8F4055]"
              >
                <FaWhatsapp className="text-lg" />
                Ask Nadee
              </a>
            </div>
          </motion.div>

          {/* FAQ cards */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openItem === index;

              return (
                <motion.div
                  key={faq.id}
                  layout
                  className={`overflow-hidden rounded-[1.4rem] border transition-colors duration-300 ${
                    isOpen
                      ? "border-[#DDB9C1] bg-[#FFF4F3]"
                      : "border-[#E8DAD5] bg-white/70"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <h3
                      className={`font-display text-lg font-semibold transition-colors duration-300 sm:text-xl ${
                        isOpen
                          ? "text-[#A94F65]"
                          : "text-[#2D2424] group-hover:text-[#A94F65]"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[#A94F65] bg-[#A94F65] text-white"
                          : "border-[#DCC9C3] bg-white text-[#2D2424] group-hover:border-[#A94F65] group-hover:text-[#A94F65]"
                      }`}
                    >
                      <FiPlus />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.32,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.22,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6">
                          <div className="border-t border-[#E6D4D1] pt-4">
                            <p className="max-w-2xl text-sm leading-7 text-[#756868] sm:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
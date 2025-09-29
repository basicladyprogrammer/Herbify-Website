import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import windPng from "../assets/wind.png";

function Features() {
  const features = [
    {
      id: 1,
      icon: "🌱",
      title: "100% Organic",
      description:
        "All our products are made with pure, natural, and organic ingredients for your health and wellness.",
    },
    {
      id: 2,
      icon: "💧",
      title: "Cold-Pressed Oils",
      description:
        "We use traditional cold-pressing techniques to preserve nutrients and ensure maximum benefits.",
    },
    {
      id: 3,
      icon: "♻️",
      title: "Eco-Friendly Packaging",
      description:
        "Sustainable packaging that’s kind to the planet and safe for you and your family.",
    },
    {
      id: 4,
      icon: "🧘",
      title: "Wellness Focused",
      description:
        "Designed to promote balance, relaxation, and natural healing in your daily life.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "50%"]);

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 bg-green-50 overflow-hidden">
      <motion.img
        src={windPng}
        alt="wind leaves"
        className="absolute top-0 left-0 right-0 w-[1200px] opacity-70 pointer-events-none"
        style={{ x, rotate }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-green-900 mb-6">
          Why Choose Herbify?
        </h2>
        <p className="text-lg text-green-700 max-w-2xl mx-auto mb-12">
          We believe in harnessing the power of nature to create products that
          nurture your body, mind, and spirit.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-xl">
              <div className="text-5xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-bold text-green-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

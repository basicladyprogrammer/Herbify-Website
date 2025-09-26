import { motion } from "framer-motion";
import dec1 from "../assets/dec1.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-300 overflow-hidden">
      {/* Floating leaf left */}
      <motion.img
        src={dec1}
        alt="leaf"
        className="absolute top-10 left-10 w-20 opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating leaf right */}
      <motion.img
        src={dec1}
        alt="leaf"
        className="absolute bottom-10 right-10 w-24 opacity-70"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main Title */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold text-green-900 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        Nature in Every Drop 🌿
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-green-800 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}>
        Discover 100% pure herbal oils and natural remedies crafted for your
        wellness and beauty.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#products"
        className="mt-6 px-8 py-3 rounded-full bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 hover:scale-105 transition transform"
        whileHover={{ scale: 1.1 }}>
        Shop Now
      </motion.a>
    </section>
  );
}

export default Hero;

import { motion } from "framer-motion";
import dec1 from "../assets/dec2.png";
import bg from "../assets/bg.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden">
      <motion.img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-green-900/30 z-0" />

      <motion.img
        src={dec1}
        alt="leaf"
        className="absolute bottom-10 right-10 w-24 opacity-70 z-10"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-20 transform-gpu"
        whileHover={{ scale: 1.02, rotateX: 5, rotateY: -5 }}
        transition={{ duration: 0.6 }}>
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Nature in Every Drop
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}>
          Discover 100% pure herbal oils and natural remedies crafted for your
          wellness and beauty.
        </motion.p>

        <motion.a
          href="#products"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 transition"
          whileHover={{ scale: 1.15, rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring", stiffness: 200 }}>
          Shop Now
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;

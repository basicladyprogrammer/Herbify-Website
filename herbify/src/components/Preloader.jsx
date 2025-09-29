import { motion } from "framer-motion";
import logo from "../assets/favilogo.png";

function Preloader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.img
        src={logo}
        alt="Loading..."
        className="w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default Preloader;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="bg-royalblue text-royalgold flex flex-col items-center justify-center text-center py-20 px-6 md:px-10">
      <motion.img
        src={logo}
        alt="Royal Protocol Logo"
        className="h-48 w-auto sm:h-56 md:h-64 lg:h-72 xl:h-80 mx-auto mb-12 
                   drop-shadow-[0_8px_16px_rgba(11,29,58,0.4)] opacity-95 
                   transition-all duration-700 ease-in-out"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-3xl md:text-5xl font-serif font-bold tracking-wide mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Royal Protocol
      </motion.h1>

      <motion.p
        className="text-base md:text-lg text-royalgold/90 max-w-2xl leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Fondata da S.A.R. il Principe Reale Emanuele Filiberto di Savoia, 
        Royal Protocol custodisce e promuove la tradizione araldica, genealogica 
        e cavalleresca italiana con rigore, eleganza e continuità.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          to="/royal-protocol"
          className="bg-royalgold text-royalblue font-semibold py-2 px-6 rounded-full shadow-md hover:bg-royalred hover:text-white transition-all duration-300"
        >
          Scopri di più
        </Link>
      </motion.div>
    </section>
  );
}

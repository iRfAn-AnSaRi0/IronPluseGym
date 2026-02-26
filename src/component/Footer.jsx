


import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-neutral-950 to-black border-t border-white/10 relative overflow-hidden">
      
      {/* Animated Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center"
      >
        {/* Brand */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-3 tracking-wide">
          IronPulse Fitness
        </h2>

        <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg px-4 sm:px-0">
          Transform Your Body. Transform Your Life.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          {[
            { icon: <FaFacebookF />, link: "https://facebook.com" },
            { icon: <FaInstagram />, link: "https://instagram.com" },
            { icon: <FaYoutube />, link: "https://youtube.com" },
            { icon: <FaTwitter />, link: "https://twitter.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-900 p-3 sm:p-4 rounded-full border border-white/10 
                         hover:bg-red-500 hover:border-red-500 
                         transition duration-300 shadow-md hover:shadow-red-500/40"
            >
              <span className="text-white text-base sm:text-lg md:text-xl">
                {social.icon}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-20 sm:w-24 h-[2px] bg-red-500 mx-auto mb-4 sm:mb-6 opacity-70"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm tracking-wide px-4 sm:px-0">
          © {new Date().getFullYear()} IronPulse Fitness. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
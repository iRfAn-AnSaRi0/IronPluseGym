

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[slowZoom_20s_linear_infinite]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558611848-73f7eb4001ab?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
          Transform Your Body.
          <span className="block text-red-500 mt-2">
            Transform Your Life.
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          Join IronPulse Fitness and unlock your true potential with
          expert coaching, modern equipment, and a motivating environment.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-red-500 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold tracking-wide hover:bg-red-600 transition duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            Join Now
          </a>

          <a
            href="#programs"
            className="w-full sm:w-auto border border-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold tracking-wide hover:bg-white hover:text-black transition duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            View Programs
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 text-xs sm:text-sm">
        Scroll Down ↓
      </div>
    </section>
  );
};

export default Hero;
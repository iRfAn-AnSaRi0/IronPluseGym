import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Strength Coach",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amit Verma",
    role: "Fat Loss Specialist",
   img: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Priya Singh",
    role: "Personal Trainer",
    img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Meet Our <span className="text-red-500">Expert Trainers</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
          Certified professionals committed to transforming your strength,
          physique, and mindset.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto"
      >
        {trainers.map((trainer, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={trainer.img}
                alt={trainer.name}
                className="h-72 sm:h-80 md:h-96 w-full object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* Social icons */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition duration-500">
                <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-full hover:bg-red-500 transition cursor-pointer">
                  <Instagram size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-full hover:bg-red-500 transition cursor-pointer">
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-full hover:bg-red-500 transition cursor-pointer">
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-neutral-900/80 backdrop-blur-md p-5 sm:p-6 text-center border border-white/10 group-hover:border-red-500/40 transition duration-500">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-red-500 transition">
                {trainer.name}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {trainer.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Trainers;
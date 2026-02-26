

import { Dumbbell, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Train with state-of-the-art machines and professional-grade fitness equipment.",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    desc: "Our experienced trainers guide you with personalized workout plans.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    desc: "Hundreds of members have transformed their bodies with our programs.",
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const WhyChoose = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Why Choose <span className="text-red-500">IronPulse?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
          We combine expert coaching, advanced equipment, and a motivating
          environment to help you achieve your fitness goals faster.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-red-500/40 via-transparent to-red-500/40 hover:from-red-500 hover:to-red-500 transition duration-500 h-full"
            >
              <div className="bg-neutral-900 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 text-center h-full border border-white/10 group-hover:border-red-500/40 transition duration-500 flex flex-col">
                
                {/* Icon */}
                <div className="mb-5 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 rounded-full bg-white/5 group-hover:bg-red-500/10 transition duration-500">
                    <Icon
                      className="text-red-500 group-hover:scale-110 transition duration-500 w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 group-hover:text-red-500 transition">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-grow">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyChoose;
import { motion } from "framer-motion";

const programs = [
  {
    title: "Strength Training",
    desc: "Build muscle and increase power with structured weight training programs.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fat Loss Program",
    desc: "Burn fat effectively with high-intensity workouts and nutrition guidance.",
    img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Personal Training",
    desc: "Get one-on-one guidance from certified professional trainers.",
   img: "https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=800&q=80",
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Programs = () => {
  return (
    <section
      id="programs"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-black via-neutral-950 to-black"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Our <span className="text-red-500">Programs</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
          Professionally designed programs to transform your strength,
          endurance, and confidence.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto"
      >
        {programs.map((program, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-red-500/40 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={program.img}
                alt={program.title}
                className="h-52 sm:h-60 md:h-64 w-full object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 group-hover:text-red-500 transition">
                {program.title}
              </h3>

              <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {program.desc}
              </p>

              <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-red-500 px-6 py-3 rounded-full font-medium hover:bg-red-600 transition duration-300 shadow-lg shadow-red-500/20 text-sm sm:text-base">
                Enroll Now
                <span className="transform group-hover:translate-x-1 transition">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Programs;
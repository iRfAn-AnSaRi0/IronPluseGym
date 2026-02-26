import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: [
      "Gym Access",
      "Locker Facility",
      "Basic Workout Plan",
    ],
  },
  {
    name: "Standard",
    price: "₹1999",
    featured: true,
    features: [
      "Everything in Basic",
      "Diet Plan",
      "Trainer Support",
    ],
  },
  {
    name: "Premium",
    price: "₹2999",
    features: [
      "Everything in Standard",
      "Personal Training",
      "Priority Support",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
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

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-black via-neutral-950 to-black relative">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Membership <span className="text-red-500">Plans</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
          Choose a plan that matches your fitness goals and unlock your
          transformation journey.
        </p>
      </div>

      {/* Pricing Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto"
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className={`relative rounded-2xl p-[1px] h-full ${
              plan.featured
                ? "bg-gradient-to-r from-red-500 via-red-600 to-red-500"
                : "bg-white/10"
            }`}
          >
            <div
              className={`relative h-full rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md text-center border transition duration-500 flex flex-col ${
                plan.featured
                  ? "bg-neutral-900 border-red-500/40"
                  : "bg-neutral-900/80 border-white/10 hover:border-red-500/40"
              } hover:scale-[1.03]`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 sm:px-5 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {plan.name}
              </h3>

              <p className="text-4xl sm:text-5xl font-bold mb-6">
                {plan.price}
                <span className="text-sm sm:text-lg font-medium text-gray-400">
                  {" "}
                  / month
                </span>
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-gray-300 flex-grow">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Check size={18} className="text-red-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition duration-300 text-sm sm:text-base ${
                  plan.featured
                    ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/30"
                    : "bg-white/10 hover:bg-red-500 hover:text-white"
                }`}
              >
                Join Now
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
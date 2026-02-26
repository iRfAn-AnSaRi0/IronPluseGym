
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
} from "lucide-react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // changed to name instead of placeholder
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfNn9NSgD7UBqMVulMx0dh6xZ67kqaxiAQLRnqhUsqZ-pcacg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams({
          "entry.615584772": formData.name,
          "entry.1102523397": formData.phone,
          "entry.739858514": formData.email,
          "entry.1359084772": formData.message,
        }),
      }
    )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Error sending message. Try again!");
      })
      .finally(() => {
        setLoading(false);
      });
  };



  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-neutral-950 via-black to-neutral-950">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
          Ready to start your transformation? Reach out today and take the
          first step toward a stronger you.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
      >
        {/* Contact Form */}
        

   <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-red-500/40 via-transparent to-red-500/40">
      <div className="bg-neutral-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 sm:p-4 rounded-lg bg-black border border-neutral-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition text-sm sm:text-base"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-3 sm:p-4 rounded-lg bg-black border border-neutral-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition text-sm sm:text-base"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 sm:p-4 rounded-lg bg-black border border-neutral-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition text-sm sm:text-base"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 sm:p-4 rounded-lg bg-black border border-neutral-800 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition text-sm sm:text-base"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold transition duration-300 shadow-lg shadow-red-500/30 text-sm sm:text-base ${
              loading
                ? "bg-red-600 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>

        {/* Contact Info */}
        <div className="bg-neutral-900/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 flex flex-col gap-6 sm:gap-8">
          
          {/* Address + Contact */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <MapPin className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-gray-300 text-sm sm:text-base">
                Siliguri, West Bengal
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Phone className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-gray-300 text-sm sm:text-base">
                +91 98765 43210
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Mail className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-gray-300 text-sm sm:text-base">
                info@ironpulsefitness.com
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps?q=Siliguri,West+Bengal&output=embed"
              className="w-full h-56 sm:h-64"
              loading="lazy"
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 sm:gap-6 pt-2">
            {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
              <div
                key={i}
                className="bg-black p-2 sm:p-3 rounded-full border border-white/10 hover:bg-red-500 hover:border-red-500 transition cursor-pointer"
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
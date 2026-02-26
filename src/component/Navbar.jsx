
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Programs", link: "#programs" },
    { name: "Trainers", link: "#trainers" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      {" "}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {" "}
        {/* Logo */}{" "}
        <h1 className="text-2xl font-extrabold tracking-wide">
          {" "}
          <span className="text-white">Iron</span>{" "}
          <span className="text-red-500">Pulse</span>{" "}
        </h1>{" "}
        {/* Desktop Menu */}{" "}
        <div className="hidden md:flex items-center gap-10 font-medium">
          {" "}
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-white hover:text-red-500 transition duration-300"
            >
              {" "}
              {item.name}{" "}
            </a>
          ))}{" "}
          {/* CTA Button */}{" "}
          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition duration-300"
          >
            {" "}
            Join Now{" "}
          </a>{" "}
        </div>{" "}
        {/* Hamburger Icon (Mobile Only) */}{" "}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {" "}
          {open ? <X size={30} /> : <Menu size={30} />}{" "}
        </button>{" "}
      </div>{" "}
      {/* Mobile Menu */}{" "}
      <div
        className={`md:hidden bg-black text-center overflow-hidden transition-all duration-300 ${open ? "max-h-96 py-6" : "max-h-0"}`}
      >
        {" "}
        <div className="space-y-6 text-lg font-medium">
          {" "}
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-white hover:text-red-500 transition duration-300"
            >
              {" "}
              {item.name}{" "}
            </a>
          ))}{" "}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-block bg-red-500 px-6 py-2 rounded-full text-white"
          >
            {" "}
            Join Now{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
export default Navbar;

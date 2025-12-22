import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Atlassian from "../assets/atlassian.png";
import PLP from "../assets/plp.png";
import Sameg from "../assets/sameg.png";
import Nyota from "../assets/nyota.png";
import Angaza from "../assets/angaza.png";
import Widb from "../assets/widb.png";


const testimonials = [
  {
    name: "Michael Kimathi (MK)",
    role: "Community Manager, Atlassian",
    quote:
      "I’ve worked closely with Faith in community-driven environments, and what stands out most is her consistency and people-first approach. She understands how to nurture engagement while aligning community efforts with strategic goals.",
    avatar: "https://i.pravatar.cc/150?img=12",
    logo: Atlassian, // Clear, high-quality Atlassian logo
  },
  {
    name: "Mumbi Ndungu",
    role: "Founder, Power Learn Project (PLP)",
    quote:
      "Faith worked with us as part of the communication and support team, handling community engagement with clarity and empathy. Her ability to support learners at scale while keeping communication human made her an invaluable team member.",
    avatar: "https://i.pravatar.cc/150?img=32",
    logo: PLP, // Official PLP logo
  },
  {
    name: "Eunice",
    role: "Founder, Sameg Management",
    quote:
      "During the period I worked with Faith, she demonstrated strong communication skills, adaptability, and reliability. She brings structure and calm to fast-paced environments and works exceptionally well with diverse teams.",
    avatar: "https://i.pravatar.cc/150?img=47",
    logo: Sameg, // Clean placeholder (real logo not found publicly)
  },
  {
    name: "Sarah Beine",
    role: "Tech Lead, NyotaLink Ltd",
    quote:
      "Faith brought incredible energy to our frontend development team. Her clean, intentional code and ability to blend technical precision with user-focused design elevated our entire product experience.",
    avatar: "https://i.pravatar.cc/150?img=5",
    logo: Nyota, // Placeholder until official logo available
  },
  {
    name: "Maureen Aluoch",
    role: "Co-Founder, Angaza Place Limited",
    quote:
      "As CTO and co-founder, Faith shaped our entire tech vision from day one. Her strategic thinking, leadership in engineering, and commitment to ethical innovation were foundational to our growth.",
    avatar: "https://i.pravatar.cc/150?img=28",
    logo: Angaza, // Placeholder (different from solar company)
  },
  {
    name: "Brava Jilliang",
    role: "Program Lead, Women in Digital Business",
    quote:
      "Faith’s training sessions are transformative. She empowers women entrepreneurs with practical digital skills and genuine confidence, helping them build sustainable online businesses with purpose.",
    avatar: "https://i.pravatar.cc/150?img=68",
    logo: Widb, // Placeholder for initiative
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 7 seconds for a calm, premium feel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-6"
        >
          Testimonials
        </motion.h1>
        <p className="text-lg opacity-80 mb-16 max-w-2xl mx-auto">
          Kind words from founders, leaders, and collaborators I’ve had the privilege to work with.
        </p>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/10"
            >
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-28 h-28 rounded-full mx-auto mb-8 object-cover ring-4 ring-white/20"
              />
              <p className="text-xl md:text-2xl italic mb-10 leading-relaxed max-w-3xl mx-auto">
                “{testimonials[index].quote}”
              </p>
              <h3 className="font-bold text-xl">{testimonials[index].name}</h3>
              <p className="text-accent text-lg mb-8">{testimonials[index].role}</p>

              {/* Company Logo - now clear, colored, and small */}
              {testimonials[index].logo && (
                <div className="flex justify-center">
                  <img
                    src={testimonials[index].logo}
                    alt={`${testimonials[index].role.split(',')[0]} logo`}
                    className="h-10 object-contain" // Small (40px height), full color, clear
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-accent w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// You can replace logo URLs with real brand logos later
const testimonials = [
  {
    name: "Michael Kimathi (MK)",
    role: "Community Manager, Atlassian",
    quote:
      "I’ve worked closely with Faith in community-driven environments, and what stands out most is her consistency and people-first approach. She understands how to nurture engagement while aligning community efforts with strategic goals.",
    avatar: "https://i.pravatar.cc/150?img=12",
    // logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Atlassian-logo.svg",
  },
  {
    name: "Mumbi Ndungu",
    role: "Founder, Power Learn Project (PLP)",
    quote:
      "Faith worked with us as part of the communication and support team, handling community engagement with clarity and empathy. Her ability to support learners at scale while keeping communication human made her an invaluable team member.",
    avatar: "https://i.pravatar.cc/150?img=32",
    // logo: "https://powerlearnproject.org/wp-content/uploads/2023/03/PLP-Logo.png",
  },
  {
    name: "Eunice",
    role: "Founder, Sameg Management",
    quote:
      "During the period I worked with Faith, she demonstrated strong communication skills, adaptability, and reliability. She brings structure and calm to fast-paced environments and works exceptionally well with diverse teams.",
    avatar: "https://i.pravatar.cc/150?img=47",
    // logo: "https://dummyimage.com/140x40/ffffff/000000&text=Sameg+Management",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide (slow)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6 seconds = slow & premium

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Testimonials
        </motion.h1>

        <p className="text-lg opacity-80 mb-16">
          Trusted by founders and community leaders across tech and education.
        </p>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur rounded-3xl p-12 shadow-2xl"
            >
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />

              <p className="text-xl italic mb-8 leading-relaxed">
                “{testimonials[index].quote}”
              </p>

              <h3 className="font-bold text-lg">
                {testimonials[index].name}
              </h3>
              <p className="text-accent mb-6">
                {testimonials[index].role}
              </p>

              {/* Logo */}
              <div className="flex justify-center">
                <img
                  src={testimonials[index].logo}
                  alt={`${testimonials[index].role} logo`}
                  className="h-8 opacity-80 grayscale"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-accent" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

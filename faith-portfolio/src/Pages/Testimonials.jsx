import { motion } from "framer-motion";

const testimonials = [
  { name: "Alex Johnson", role: "CEO, TechCo", quote: "Faith transformed our community...", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Sarah Lee", role: "Founder, Web3 Project", quote: "Exceptional strategist and builder...", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Michael Chen", role: "Head of Community", quote: "Her consistency is unmatched...", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Emma Davis", role: "Developer Lead", quote: "Brilliant developer and communicator...", avatar: "https://i.pravatar.cc/150?img=4" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Testimonials
        </motion.h1>

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full mb-6 object-cover" />
              <p className="text-xl italic mb-6">"{t.quote}"</p>
              <p className="font-bold">{t.name}</p>
              <p className="text-accent">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
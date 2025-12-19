import { motion } from "framer-motion";

const companies = Array(8).fill(null); // Placeholder for 8 logos

export default function Companies() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Companies I've Worked With
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center"
        >
          {companies.map((_, i) => (
            <div
              key={i}
              className="bg-white/20 rounded-2xl h-32 flex items-center justify-center text-2xl font-bold hover:scale-110 transition"
            >
              Logo {i + 1}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
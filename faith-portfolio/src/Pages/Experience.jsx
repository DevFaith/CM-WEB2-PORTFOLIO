import { motion } from "framer-motion";

const experiences = [
  { year: "2023 - Present", role: "Senior Community Manager", company: "Web3 Foundation", desc: "Leading global community initiatives..." },
  { year: "2021 - 2023", role: "Community Manager", company: "Blockchain Startup", desc: "Grew community from 0 to 50k members..." },
  { year: "2019 - 2021", role: "Web Developer & Moderator", company: "Tech Collective", desc: "Built web tools and managed forums..." },
];

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 w-0.5 bg-white/30 h-full -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="w-16 h-16 bg-accent rounded-full absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center text-black font-bold">
                {i + 1}
              </div>
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-20" : "md:pl-20"} pl-20 md:pl-0`}>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                  <p className="text-accent mb-2">{exp.year}</p>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg mb-4">{exp.company}</p>
                  <p>{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
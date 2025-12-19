import { motion } from "framer-motion";

export default function About() {
  const philosophies = [
    { title: "Consistency", desc: "Building long-term growth through daily disciplined action." },
    { title: "Discipline", desc: "Staying committed even when motivation fades." },
    { title: "Impact", desc: "Creating meaningful connections and real results for communities." },
    { title: "Creativity", desc: "Innovative solutions in community building and tech." },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl max-w-3xl mx-auto text-center mb-20"
        >
          I am a passionate community builder and web developer with a focus on creating meaningful connections, fostering growth, and delivering impactful tech solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center hover:bg-white/20 transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-accent">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
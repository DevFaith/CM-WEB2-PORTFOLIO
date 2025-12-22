import { motion } from "framer-motion";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Image5 from "../assets/image5.png";
import Image6 from "../assets/image6.png";
import Image7 from "../assets/image7.png";

const values = [
  {
    title: "Purpose",
    desc: "I believe digital presence isn’t just about showing up it’s about showing up with intention. Every strategy, post, and connection should serve a meaningful goal.",
    image: Image2,
    // alt: "Professional working purposefully on digital strategy",
  },
  {
    title: "Storytelling",
    desc: "Great content doesn’t just convert audiences, it teaches, inspires, and builds trust. I help brands and individuals craft authentic narratives that resonate and last.",
    image: Image3,
    alt: "Content creator crafting stories on laptop",
  },
  {
    title: "Human Connection",
    desc: "People make the digital world meaningful. I focus on fostering genuine relationships, empathy, and community that turn audiences into loyal advocates.",
    image: Image4,
    alt: "Diverse group connecting through digital devices",
  },
  {
    title: "Consistency & Clarity",
    desc: "In an era of constant content, clarity and consistent effort always win. I guide others to communicate with focus and show up reliably.",
    image: Image7,
    alt: "Social media content calendar for consistent planning",
  },
  {
    title: "Digital Confidence",
    desc: "My passion is seeing people step into their power online to learning to communicate value, attract opportunities, and create change through digital tools.",
    image: Image5,
    alt: "Person gaining confidence through online learning",
  },
  {
    title: "Accessible Growth",
    desc: "I’m dedicated to making digital literacy purposeful and reachable, whether training teams, building communities, or empowering young people to thrive online.",
    image: Image6,
    alt: "Inclusive group learning digital skills together",
  },
];

export default function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-12"
        >
          About Me
        </motion.h1>

        {/* Short Intro Bio */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto text-center space-y-6 text-lg md:text-xl leading-relaxed text-white/90 mb-20"
        >
          <p>
            I’ve always believed that digital presence isn’t just about showing up it’s about <span className="text-accent font-semibold">showing up with purpose</span>.
          </p>
          <p>
            As a Digital Trainer, Community Manager, Web Developer, and Marketing Strategist, I bridge tech and human connection to help individuals and brands create meaningful, lasting impact online.
          </p>
          <p className="text-xl font-medium">
            Let’s build stories that last, not just posts that trend. 🚀
          </p>
        </motion.div>

        {/* Core Values - Main Focus with Images */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Drives Me – My Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden hover:bg-white/20 hover:scale-105 transition-all duration-500 border border-white/10 shadow-2xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-accent">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Bio for Depth (Optional Scroll) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-24 text-center text-lg leading-relaxed text-white/80"
        >
          <p>
            My journey started in tech, where I learned that the digital world moves fast, but people are what make it meaningful. Over time, I’ve worked with communities, startups, and professionals to turn ideas into impact and helping them create content that teaches, inspires, and builds trust.
          </p>
          <p className="mt-6">
            What truly drives me is empowering others to step into their digital confidence and create change through purposeful tools and strategies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
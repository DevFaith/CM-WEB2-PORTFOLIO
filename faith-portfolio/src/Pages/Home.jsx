import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { Code, Users, Megaphone, GraduationCap } from "lucide-react"; // npm install lucide-react
import Image1 from "../assets/Image1.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                Hello!<br />
                I'm <span className="text-accent">FAITH WAITHERA</span>
              </h1>
              {/* <p className="md:text-4xl mt-4 text-white/90">
                                As a Web Developer, Social Media Manager, Digital Trainer, and Marketing Strategist, I help individuals and brands build meaningful visibility online not through noise, but through strategy, storytelling, and human connection.

              </p> */}
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-white/80">
              {/* <p>
                I’ve always believed that digital presence isn’t just about showing up—it’s about showing up with purpose.
              </p> */}
              {/* <p>
              </p> */}
              {/* <p>
                My journey started in tech, where I learned that the digital world moves fast, but people are what make it meaningful. Over time, I’ve worked with communities, startups, and professionals to turn ideas into impact—helping them create content that not only converts but also teaches, inspires, and builds trust.
              </p>
              <p>
                What drives me is seeing people step into their digital confidence: learning how to communicate value, attract opportunities, and create change through the power of digital tools.
              </p>
              <p>
                Whether it’s building responsive web applications, growing engaged online communities, training teams on digital marketing, or teaching young people how to leverage the internet for growth—I’m here to make digital literacy more accessible and purposeful.
              </p> */}
              <p className="font-medium">
                                                As a Web Developer, Social Media Manager, Digital Trainer, and Marketing Strategist, I help individuals and brands build meaningful visibility online not through noise, but through strategy, storytelling, and human connection.

                Because in this era of constant content, clarity, consistency, and connection will always win.<br />
                <br />
                Let’s build stories that last, not just posts that trend. 🚀
              </p>
            </div>

            <SocialLinks className="mb-10" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent">3+</p>
                <p className="text-white/80">Years of Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent">70+</p>
                <p className="text-white/80">Global Community Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-white/80">Awards Won</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-6">
              <Link
                to="/contacts"
                className="bg-accent hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition"
              >
                Hire Me
              </Link>
              <Link
                to="/contacts"
                className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition"
              >
                Let's Collaborate
              </Link>
            </div>

            <p className="text-lg text-white/90">
              📩 <strong>Let’s Connect:</strong> If you’re looking to grow your brand, empower your team, build a powerful web presence, or understand how to create a strong digital strategy I’d love to collaborate.
            </p>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={Image1}
              alt="Faith Waithera - Professional portrait"
              className="rounded-full w-96 h-96 object-cover shadow-2xl border-8 border-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Expertise / Services Section with Icons */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            My Expertise
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Web Development */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <Code className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-lg">
                Building modern, responsive web applications and digital tools with clean code, creativity, and user-focused design. From front-end experiences to full-stack solutions.
              </p>
            </motion.div>

            {/* Social Media & Community Management */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <Users className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h3 className="text-2xl font-bold mb-4">Social Media & Community Management</h3>
              <p className="text-lg">
                Growing and nurturing engaged online communities across platforms. Strategy, content planning, moderation, and authentic connection that turns followers into loyal advocates.
              </p>
            </motion.div>

            {/* Digital Training & Marketing Strategy */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center gap-4 mb-6">
                <GraduationCap className="w-14 h-14 text-accent" />
                <Megaphone className="w-14 h-14 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Training & Marketing Strategy</h3>
              <p className="text-lg">
                Empowering teams and individuals with practical digital marketing skills, strategic storytelling, and brand growth plans that drive real impact and lasting visibility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
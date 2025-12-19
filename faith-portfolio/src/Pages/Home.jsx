import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const photoUrl = "https://thumbs.dreamstime.com/b/portrait-beautiful-black-girl-smiling-standing-self-assured-confident-smile-cross-arms-chest-posing-against-studio-253298318.jpg";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hello!<br />I'm <span className="text-accent">FAITH</span>
          </h1>
          <p className="text-2xl md:text-4xl mb-6">Community Manager & Web3 Developer</p>
          <p className="text-lg mb-8 max-w-2xl">
            I'm a seasoned Community Manager and builder in the web 1/2/3 spaces. With a passion for building strong communities and innovative tech solutions, I bring creativity, consistency, and strategic thinking to every project.
          </p>

          <SocialLinks className="mb-10" />

          <div className="grid grid-cols-3 gap-8 text-center mb-10">
            <div>
              <p className="text-4xl font-bold text-accent">5+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">70+</p>
              <p>Global Community Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent">10+</p>
              <p>Awards Won</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <Link to="/contact" className="bg-accent hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition">
              Hire Me
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg transition">
              Let's Collaborate
            </Link>
          </div>
        </motion.div>

        {/* Right - Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={photoUrl}
            alt="FAITH - Professional portrait"
            className="rounded-full w-96 h-96 object-cover shadow-2xl border-8 border-white/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
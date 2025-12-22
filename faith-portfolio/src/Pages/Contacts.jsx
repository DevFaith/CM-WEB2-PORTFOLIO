import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import Image8 from "../assets/Image8.png"; // Your photo of yourself speaking/explaining on mic

export default function Contact() {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-white/20 shadow-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold mb-10"
              >
                Contact Information
              </motion.h2>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300">
                    <Mail className="w-7 h-7 text-accent" />
                  </div>
                  <a
                    href="mailto:waitherafaith@outlook.com"
                    className="text-xl hover:text-accent transition duration-300"
                  >
                    waitherafaith@outlook.com
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300">
                    <Phone className="w-7 h-7 text-accent" />
                  </div>
                  <a
                    href="tel:+254769313712"
                    className="text-xl hover:text-accent transition duration-300"
                  >
                    +254 769 313 712
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-5 group"
                >
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300">
                    <MapPin className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-xl">
                    Rhapta Road, Westlands,<br />
                    Nairobi, Kenya
                  </p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-10 text-lg text-white/70 italic"
              >
                I'm always open to meaningful conversations, collaborations, or speaking opportunities. 
                Reach out to let's create something impactful together.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Speaking Photo (moved to right for better flow & prominence) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center text-center order-1 lg:order-2"
          >
            <div className="relative group mb-10 max-w-full">
              {/* Subtle glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 to-purple-600/20 blur-3xl scale-105 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Photo - rectangular for speaking pose, fits naturally */}
              <img
                src={Image8}
                alt="Faith Waithera speaking and explaining on microphone"
                className="relative w-full max-w-lg lg:max-w-2xl rounded-3xl object-cover shadow-2xl border-8 border-white/30 transition-all duration-700 group-hover:border-accent/50 group-hover:scale-105"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-lg"
            >
              <h2 className="text-4xl font-bold mb-4">Faith Waithera</h2>
              <p className="text-xl text-white/80 mb-6">
                Digital Trainer • Speaker • Web Developer • Marketing Strategist
              </p>

              {/* Social Icons */}
              <div className="flex justify-center space-x-8">
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-125"
                >
                  <Linkedin className="w-9 h-9" />
                </a>
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-125"
                >
                  <Github className="w-9 h-9" />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X"
                  className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-125"
                >
                  <Twitter className="w-9 h-9" />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/70 hover:text-accent transition-all duration-300 hover:scale-125"
                >
                  <Instagram className="w-9 h-9" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821!2d36.7799!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17228e94f4d3%3A0x4d4f2e1d5a4b3c2d!2sRhapta+Rd%2C+Westlands%2C+Nairobi%2C+Kenya!5e0!3m2!1sen!2ske!4v1703999999999"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location - Westlands, Nairobi"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
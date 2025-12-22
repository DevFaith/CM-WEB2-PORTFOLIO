// src/components/Preloader.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onLoaded }) {
  const fullName = "G.  Waithera Faith";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingSpeed = 110; // Adjust for faster/slower typing

    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setTypedText((prev) => prev + fullName.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false); // Stop cursor after typing finishes
        setTimeout(onLoaded, 1200); // Delay before fading out the loader
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [onLoaded]);

  // Blinking cursor effect (only while typing)
  useEffect(() => {
    if (!isTyping) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-800 to-pink-700"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-5xl lg:text-5xl font-bold text-white tracking-wider drop-shadow-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block animate-bounce">👩🏾‍💻</span>{" "}
          {typedText}
          {isTyping && showCursor && (
            <motion.span
              className="inline-block ml-2"
              animate={{ opacity: [1, 0.3] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              🤓👩‍💻 {/* Lady with microphone – perfect for a speaker/trainer */}
            </motion.span>
          )}
        </motion.h1>

        {/* Optional subtle tagline that appears after typing */}
        {!isTyping && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-2xl md:text-3xl text-white/80 font-medium"
          >
            Digital Trainer • Speaker • Developer
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
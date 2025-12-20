import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your EmailJS credentials
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(() => setStatus("Message sent successfully!"))
      .catch(() => setStatus("Failed to send. Try again."));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Let's Collaborate
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="mb-6">Email: faith@example.com</p>
            <p className="mb-6">Phone: +254 700 000 000 (optional)</p>
            <p className="mb-8">Location: Rhapta Road, Westlands, Nairobi, Kenya</p>
            {/* SocialLinks component here if desired */}
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-lg bg-white/10 backdrop-blur" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <input type="email" placeholder="Email Address" required className="w-full p-4 rounded-lg bg-white/10 backdrop-blur" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <input type="text" placeholder="Subject" required className="w-full p-4 rounded-lg bg-white/10 backdrop-blur" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              <textarea placeholder="Message" rows="6" required className="w-full p-4 rounded-lg bg-white/10 backdrop-blur" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              <button type="submit" className="bg-accent hover:bg-pink-600 text-white px-8 py-4 rounded-full">
                Send Message
              </button>
            </form>
            {status && <p className="mt-6 text-accent">{status}</p>}
          </motion.div>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.821!2d36.7799!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17228e94f4d3%3A0x4d4f2e1d5a4b3c2d!2sRhapta+Rd%2C+Westlands%2C+Nairobi%2C+Kenya!5e0!3m2!1sen!2ske!4v1703999999999"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}


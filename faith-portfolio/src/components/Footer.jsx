import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = ["Home", "About", "Experience", "Testimonials", "Contact"];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/faithwaithera-smm-and-software-developer/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/DevFaith", icon: Github, label: "GitHub" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter/X" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "mailto:waitherafaith@outlook.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="bg-purple-950/90 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Brand / Name */}
        <div className="md:col-span-1">
          <h3 className="text-3xl font-bold mb-4">FAITH WAITHERA</h3>
          <p className="text-white/70 leading-relaxed">
            Digital Trainer • Web Developer<br />
            Community Manager • Marketing Strategist
          </p>
          <p className="text-white/60 text-sm mt-6">
            Building meaningful digital presence with purpose, strategy, and human connection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-white/80 hover:text-accent transition"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect / Social */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Connect With Me</h4>
          <div className="flex justify-center md:justify-start space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/80 hover:text-accent transition transform hover:scale-110"
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
          <p className="text-white/70 mt-8">
            <a href="mailto:waitherafaith@outlook.com" className="hover:text-accent transition">
              waitherafaith@outlook.com
            </a>
          </p>
        </div>

        {/* Newsletter or Extra (optional space) */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-white">Stay Updated</h4>
          <p className="text-white/70 mb-4">
            Get tips on digital growth, community building, and tech straight to your inbox.
          </p>
          {/* Simple placeholder - you can replace with real form later */}
          <p className="text-accent font-medium">Coming soon →</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 pt-8 border-t border-white/20 text-center">
        <p className="text-white/60">
          &copy; {new Date().getFullYear()} Faith Waithera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
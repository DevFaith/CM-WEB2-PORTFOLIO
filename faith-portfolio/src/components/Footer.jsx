import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = ["Home", "About", "Experience", "Testimonials", "Companies", "Contact"];

  return (
    <footer className="bg-purple-950/80 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-2xl font-bold mb-4">FAITH</p>
        <div className="flex justify-center space-x-6 mb-6">
          {quickLinks.map((link) => (
            <Link key={link} to={link === "Home" ? "/" : `/${link.toLowerCase()}`} className="hover:text-accent">
              {link}
            </Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} FAITH. All rights reserved.</p>
      </div>
    </footer>
  );
}
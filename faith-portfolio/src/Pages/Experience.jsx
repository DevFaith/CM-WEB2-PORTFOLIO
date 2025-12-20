import { motion } from "framer-motion";

const experiences = [
  {
    period: "Oct 2025 – Present · 3 mos",
    role: "Digital Marketing Trainer (Part-time)",
    company: "Women in Digital Business",
    location: "Nairobi County, Kenya · Remote",
    desc: [
      "Empowering women entrepreneurs with practical digital marketing skills to grow their businesses online.",
      "• Delivering training on strategy, storytelling, content creation, social media management, and building meaningful digital presence.",
      "• Helping participants turn ideas into impactful online brands with clarity, consistency, and human connection.",
    ],
  },
  {
    period: "Aug 2024 – Nov 2025 · 1 yr 4 mos",
    role: "Social Media Manager (On-site)",
    company: "Atlassian Intelligence",
    location: "Nairobi County, Kenya",
    desc: [
      "Led social media communications and digital marketing efforts for Atlassian Intelligence.",
      "• Crafted strategic content that strengthened brand voice, boosted engagement, and built community trust.",
      "• Focused on authentic storytelling and consistent presence across platforms.",
    ],
  },
  {
    period: "Aug 2024 – Nov 2025 · 1 yr 4 mos",
    role: "Content Creator",
    company: "Atlassian Community Events Nairobi",
    location: "Nairobi County, Kenya",
    desc: [
      "Created engaging content for Nairobi's Atlassian Community events and initiatives.",
      "• Promoted events, shared educational resources, and drove participation through targeted digital marketing.",
      "• Combined technical knowledge with storytelling to foster community growth and interaction.",
    ],
  },
  {
    period: "Mar 2025 – Apr 2025 · 2 mos",
    role: "Social Media Manager (Contract)",
    company: "SAMEG Properties",
    location: "Nairobi County, Kenya · Remote",
    desc: [
      "Brought in to revive and reposition a dormant digital presence inactive since 2023.",
      "I began with a full audit of their platforms, identifying gaps in communication, engagement, and brand tone.",
      "Developed a tailored social media strategy aligned with the company's core values and real estate offerings.",
      "Implemented a content calendar, introduced fresh visual branding, and crafted audience-focused posts—from property highlights to community updates.",
      "Focused efforts on rebuilding trust and consistency, resulting in significant increases in engagement, follower growth, and direct inquiries.",
      "Helped restore brand credibility, making it clear that SAMEG Properties was active and committed to its community.",
      "This experience reinforced that social media success comes from showing up with intention, understanding your audience, and telling stories that matter.",
    ],
  },
  {
    period: "Feb 2025 – Apr 2025 · 3 mos",
    role: "Frontend Web Developer (Part-time)",
    company: "NyotaLink Ltd",
    location: "Westlands, Nairobi · Remote",
    desc: [
      "Built intuitive, responsive, and accessible web experiences where creativity meets functionality.",
      "Part of a dynamic team designing and developing user-focused interfaces that connect and engage.",
      "Bridged the gap between code and community by merging tech with storytelling—writing semantic HTML, styling with Tailwind CSS, integrating Firebase for real-time interactions, and managing brand voice across platforms.",
      "Always led with intention and purpose.",
      "What I Do Best:",
      "• Frontend development with ReactJS & Vite",
      "• Social media revamps & digital strategy",
      "• Community engagement & growth",
      "• Creating content that builds trust, not just clicks",
      "• Turning ideas into scalable digital experiences",
    ],
  },
  {
    period: "Feb 2025 – Mar 2025 · 2 mos",
    role: "Communication and Support Team (Internship)",
    company: "Power Learn Project",
    location: "Westlands, Nairobi · Remote",
    desc: [
      "Played a key role in fostering seamless interactions between learners, mentors, and the organization.",
      "• Community Engagement – Managed communication channels, ensured timely updates, and promoted interactive discussions.",
      "• Learner Support – Provided assistance by addressing inquiries, troubleshooting technical issues, and guiding users through the learning platform.",
      "• Content & Messaging – Crafted clear, impactful messages for announcements, newsletters, and FAQs.",
      "• Feedback & Improvement – Collected learner insights to optimize support processes and boost overall engagement.",
      "This role strengthened my communication, problem-solving, and technical support skills while contributing to an innovative digital education initiative.",
    ],
  },
  {
    period: "Jan 2025 – Feb 2025 · 2 mos",
    role: "Co-Founder, CTO & Tech Lead",
    company: "Angaza Place Limited",
    location: "Westlands, Nairobi, Kenya · Remote",
    desc: [
      "As Chief Technology Officer (CTO), drove the technology strategy and led engineering teams to create scalable, innovative solutions aligned with business goals. Focused on collaboration, emerging technologies, and bridging the gap between technical and business teams to deliver impactful results.",
      "As Tech Lead, guided engineering teams in delivering high-quality software, mentored developers, ensured adherence to best practices, and collaborated with product teams to align technical decisions with business needs. Prioritized innovation, efficiency, and timely project delivery.",
      "Angaza Place Ltd. is on a mission to revolutionize the beauty and retail industries by delivering innovative, ethical, and sustainable solutions.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center mb-24 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot with number */}
              <div className="w-16 h-16 bg-accent rounded-full absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center text-black font-bold text-xl z-10 shadow-lg">
                {i + 1}
              </div>

              {/* Card */}
              <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-20" : "md:pl-20"} pl-20 md:pl-0`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <p className="text-accent mb-3 font-medium">{exp.period}</p>
                  <h3 className="text-2xl font-bold mb-4">{exp.role}</h3>

                  <div className="space-y-4 text-white/90 leading-relaxed">
                    {exp.desc.map((line, idx) => (
                      <p key={idx} className={line.startsWith("•") ? "ml-6" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Company logo placeholder + name (mimics LinkedIn style) */}
                  <div className="flex items-center mt-8 pt-6 border-t border-white/20">
                    <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center text-2xl font-bold text-accent">
                      {exp.company.split(' ').map(word => word[0].toUpperCase()).slice(0, 3).join('')}
                    </div>
                    <div className="ml-5">
                      <p className="text-xl font-bold">{exp.company}</p>
                      {exp.location && <p className="text-sm text-white/70">{exp.location}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
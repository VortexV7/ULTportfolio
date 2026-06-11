import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "College", value: "GWCET - Computer Science & Engineering" },
  { icon: Calendar, label: "Year", value: "3rd Year · 2025–26" },
  { icon: MapPin, label: "Location", value: "Nagpur, India" },
  { icon: Sparkles, label: "Interests", value: "Web Dev · AI · CP · Open Source" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5722]">About</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-[#111827]">A little about me</h2>
          <p className="mt-6 font-serif text-lg text-[#4B5563]">
            I'm a Computer Engineering student fascinated by how software shapes the way people think and work. I spend my
            time building full-stack products, exploring machine learning, and grinding competitive programming problems.
          </p>
          <p className="mt-4 font-serif text-lg text-[#4B5563]">
            Outside of code, I love writing, contributing to open source, and obsessing over interface details that most
            people will never notice.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="bg-[#E5E7EB] rounded-2xl p-4 flex flex-col gap-3"
            >
              <s.icon size={20} className="text-[#FF5722]" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#4B5563] font-semibold">
                  {s.label}
                </p>
                <p className="font-sans font-medium text-sm text-[#111827] mt-1">{s.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

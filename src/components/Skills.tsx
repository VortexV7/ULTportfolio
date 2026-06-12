import { motion } from "framer-motion";

const groups = [
  { title: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript", "Java"] },
  { title: "Frontend", items: ["React", "Electron.js", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { title: "Backend", items: ["Node.js"] },
  { title: "Databases", items: ["MySQL", "Supabase"] },
  { title: "Tools", items: ["Git", "VS Code", "Figma", "Linux"] },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 px-5 sm:px-6 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5722]">Skills</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-[#111827]">What I work with</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={item}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 border-l-4 border-l-[#FF5722]"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#111827]">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[#111827] hover:bg-[#FF5722] hover:text-white hover:border-transparent transition-colors duration-150 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

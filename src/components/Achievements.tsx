import { motion } from "framer-motion";

type Cat = "CP RATING" | "PROJECT" | "CERTIFICATION" | "ACADEMIC";

const catColors: Record<Cat, string> = {
  "CP RATING": "bg-[#FF5722]",
  PROJECT: "bg-blue-500",
  CERTIFICATION: "bg-green-600",
  ACADEMIC: "bg-purple-600",
};

const items: { title: string; desc: string; cat: Cat; date: string }[] = [
  {
    title: "B.Tech Computer Engineering",
    desc: "Pursuing Computer Engineering with interests in web development, machine learning, and software engineering.",
    cat: "ACADEMIC",
    date: "2023–Present",
  },
  {
    title: "Developer Portfolio",
    desc: "Designed and developed a modern portfolio website with responsive layouts, animations, and a custom UI system.",
    cat: "PROJECT",
    date: "2026",
  },
  {
    title: "Machine Learning Projects",
    desc: "Implemented machine learning projects involving data preprocessing, model training, and evaluation techniques.",
    cat: "PROJECT",
    date: "2025–2026",
  },
  {
    title: "Competitive Programming",
    desc: "Regularly solve algorithmic problems and participate in coding contests to strengthen problem-solving skills.",
    cat: "CP RATING",
    date: "Ongoing",
  },
  {
    title: "Full-Stack Web Applications",
    desc: "Built modern web applications using contemporary frontend technologies and backend integrations.",
    cat: "PROJECT",
    date: "2025–2026",
  },
  {
    title: "Machine Learning Coursework",
    desc: "Studied neural networks, supervised learning, and model evaluation through academic and practical projects.",
    cat: "CERTIFICATION",
    date: "2025",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20 px-5 sm:px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5722]">Achievements</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-[#111827]">Milestones & recognition</h2>
        </motion.div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-[#E5E7EB]" />
          <div className="flex flex-col gap-6">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[26px] md:-left-[34px] top-5 w-3 h-3 rounded-full bg-[#FF5722] ring-4 ring-[#F9FAFB]" />
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 justify-between">
                    <h3 className="font-sans font-bold text-base text-[#111827]">{it.title}</h3>
                    <span className={`font-mono text-[10px] font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded-full ${catColors[it.cat]}`}>
                      {it.cat}
                    </span>
                  </div>
                  <p className="mt-2 font-serif text-[15px] text-[#4B5563]">{it.desc}</p>
                  <p className="mt-3 font-mono text-xs font-semibold text-[#4B5563]">{it.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

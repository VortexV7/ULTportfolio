import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import AIMockInterview from "../assets/projects/ai-mock-interview-project.png";
import RedlineSignal from "../assets/projects/redline_signal.png";
import IngeniousCSE from "../assets/projects/ingenious_gwcet.png";
import EngageVision from "../assets/projects/engageVision.png";
import paperGPT from "../assets/projects/paperGPT.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  featured?: boolean;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "AI Mock Interview Assistant",
    description: "AI-powered interview coach: real-time transcription, adaptive questioning, focus tracking, code support, and PDF reporting.",
    tech: ["Electron", "Python", "Whisper", "Groq"],
    featured: true,
    image: AIMockInterview,
    githubUrl: "https://github.com/VortexV7/AI-Mock-Interview-Assistant",
    liveUrl: "https://github.com/VortexV7/AI-Mock-Interview-Assistant/releases"
  },
  {
    title: "Redline Signal",
    description: "Real-time global risk and sentiment intelligence dashboard powered by FastAPI, Next.js, Reddit, HackerNews, and public X/Twitter feeds.",
    tech: ["TypeScript", "FastAPI", "Vader", "OSINT", "Sentiment Analysis"],
    featured: true,
    image: RedlineSignal,
    githubUrl: "https://github.com/VortexV7/Redline-Signal",
    liveUrl: "https://redline-signal.vercel.app/"
  },
    {
    title: "Ingenious Website",
    description: "Built the official website for the Ingenious CSE department forum using React and Vercel",
    tech: ["React.js", "Node.js", "Tailwind", "Vercel"],
    featured: false,
    image: IngeniousCSE,
    githubUrl: "https://github.com/VortexV7/ingenious-cse-forum",
    liveUrl: "https://ingenious-cse.vercel.app/"
  },
    {
    title: "EngageVision YT",
    description: "This AI app analyzes your YouTube thumbnails and gives you feedback to get more clicks",
    tech: ["Streamlit", "Python", "HTML"],
    featured: false,
    image: EngageVision,
    githubUrl: "https://github.com/VortexV7/EngageVision-YT",
    liveUrl: "https://engagevision-yt.streamlit.app/"
  },
    {
    title: "paperGPT",
    description: "PaperGPT uses AI to let you ask questions and get instant answers from your PDF documents",
    tech: ["Streamlit", "Python", "HTML"],
    featured: false,
    image: paperGPT,
    githubUrl: "https://github.com/VortexV7/paperGPT",
    liveUrl: "https://paper-gpt05.streamlit.app/"
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href?: string;
  icon: typeof GitBranch;
  label: string;
}) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1.5 text-[#4B5563] hover:text-[#FF5722] font-mono text-xs font-semibold uppercase transition-colors"
    >
      <Icon size={14} /> {label}
    </a>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#FF5722] hover:shadow-lg transition-all duration-200"
    >
      <div className="relative aspect-[16/9] bg-[#E5E7EB] overflow-hidden">
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#4B5563]">Project Screenshot</span>
          </div>
        )}
        {p.featured && (
          <span className="absolute top-3 right-3 font-mono text-[10px] font-semibold uppercase tracking-wider bg-[#FF5722] text-white px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-sans font-bold text-lg text-[#111827]">{p.title}</h3>
        <p className="mt-2 font-serif text-[15px] text-[#4B5563] line-clamp-2">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-[#E5E7EB] text-[#111827]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 border-t border-[#E5E7EB] flex items-center gap-5">
        <ProjectLink href={p.githubUrl} icon={GitBranch} label="GitHub" />
        <ProjectLink href={p.liveUrl} icon={ExternalLink} label="Live Demo" />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 px-5 sm:px-6 bg-[#FDFDFD]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#FF5722]">Projects</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-medium text-[#111827]">Things I've built</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

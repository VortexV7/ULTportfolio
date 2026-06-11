import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-gray-500">
          Built with React & <span className="text-[#FF5722]">♥</span> by Ved Sharanagate
        </p>
        <div className="flex items-center gap-4 text-gray-500">
          <a href="https://github.com/vortexV7" className="hover:text-[#FF5722] transition-colors"><Github size={16} /></a>
          <a href="https://linkedin.com/in/ved-sharanagate" className="hover:text-[#FF5722] transition-colors"><Linkedin size={16} /></a>
          <a href="mailto:hydro.ved5@gmail.com" className="hover:text-[#FF5722] transition-colors"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

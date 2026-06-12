import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";
import socialPreviewUrl from "@/assets/og-thumbnail.svg?url";
import { siteConfig } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: siteConfig.title },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: siteConfig.title },
      { property: "og:description", content: siteConfig.socialDescription },
      { property: "og:image", content: socialPreviewUrl },
      { name: "twitter:title", content: siteConfig.title },
      { name: "twitter:description", content: siteConfig.socialDescription },
      { name: "twitter:image", content: socialPreviewUrl },
    ],
  }),
  component: Index,
});

function Index() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    if (splash) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [splash]);

  if (splash) {
    return <SplashScreen onDone={() => setSplash(false)} />;
  }

  return (
    <main className="bg-[#FDFDFD] text-[#111827] overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

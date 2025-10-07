import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import ScrollNormalize from "@/components/ScrollNormalize";
import FirstScrollNudge from "@/components/FirstScrollNudge";

// Add metadata for LinkedIn
export const metadata = {
  title: "Brave Desai - AI/ML Engineer Portfolio",
  description: "AI/ML Engineer building scalable intelligent systems that transform data into actionable insights. View my projects, experience, and resume.",
  openGraph: {
    title: "Brave Desai - AI/ML Engineer Portfolio",
    description: "AI/ML Engineer building scalable intelligent systems that transform data into actionable insights. View my projects, experience, and resume.",
    url: "https://brave-desai-portfolio.vercel.app",
    siteName: "Brave Desai Portfolio",
    images: [
      {
        url: "https://brave-desai-portfolio.vercel.app/AI.jpg",
        width: 1200,
        height: 630,
        alt: "Brave Desai - AI/ML Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 "  >
      <div className= "max-w-7xl w-full">
        <ScrollNormalize />
        <FirstScrollNudge />
        <FloatingNav  navItems = {navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

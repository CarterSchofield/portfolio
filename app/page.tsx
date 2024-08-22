import About from "@/components/About";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import OldHero from "@/components/OldHero";
import RecentProjects from "@/components/RecentProjects";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <OldHero /> */}
        <Grid />
        <Experience />
        <About />
        <RecentProjects />
        {/* <Testimonials /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

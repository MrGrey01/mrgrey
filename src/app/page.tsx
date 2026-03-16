// import Navbar from "@/components/sections/Navbar";
import { HomeNavbar } from "@/components/sections/home-navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import WhyMe from "@/components/sections/WhyMe";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main>
        <Hero />
        {/* <div className="divider" /> */}
        <About />
        {/* <div className="divider" /> */}
        <Process />
        {/* <div className="divider" /> */}
        <Services />
        {/* <div className="divider" /> */}
        <Projects />
        <div className="divider" />
        <WhyMe />
        <div className="divider" />
        <Testimonials />
        <div className="divider" />
        <FAQ />
        <div className="divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

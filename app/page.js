import Image from "next/image";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import InformationSection from "./_components/InformationSection";
import Companies from "./_components/Companies";
import DownloadSection from "./_components/DownloadSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Companies />
      <InformationSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

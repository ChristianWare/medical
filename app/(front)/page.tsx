import DoctorsList from "@/components/DoctorsList";
import Hero from "@/components/Frontend/Hero";
import MegaMenu from "@/components/Frontend/MegaMenu";
import TabbedSection from "@/components/Frontend/TabbedSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <TabbedSection />
      {/* <DoctorsList /> */}
    </div>
  );
}

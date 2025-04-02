import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";
import SignupForm from "@/components/SignupForm";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}

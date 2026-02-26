import CameraScrollWrapper from "@/components/CameraScrollWrapper";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import Specs from "@/components/Specs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* ───── Hero scrollytelling ───── */}
      <CameraScrollWrapper />

      {/* ───── Landing sections ───── */}
      <Features />
      <Modules />
      <Specs />
      <Footer />
    </main>
  );
}

import  Navbar  from "@/components/Navbar";
import Gemini from "@/components/Gemini"
import Smart from "@/components/Smart";
import Globe from "@/components/Globe";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Gemini/>
      <Smart/>
      <Globe />
      <Footer />
    </main>
    
  );
}

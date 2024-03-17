import  Navbar  from "@/components/Navbar";
import Gemini from "@/components/Gemini"
import Smart from "@/components/Smart";
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Gemini/>
      <Smart/>
    </main>
    
  );
}

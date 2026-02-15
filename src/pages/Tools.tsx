import Navbar from "@/components/Navbar";
import ToolsGrid from "@/components/ToolsGrid";
import Footer from "@/components/Footer";

const Tools = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 hero-gradient relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10">
          <ToolsGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: ReactNode;
  withGrid?: boolean;
  showFooter?: boolean;
}

const PageLayout = ({ children, withGrid = true, showFooter = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 relative">
        {withGrid && <div className="absolute inset-0 pointer-events-none" />}
        <div className="relative z-10">{children}</div>
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;

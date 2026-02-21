import { Palette } from "lucide-react";
import ToolPageLayout from "@/components/ToolPageLayout";

const LogoTool = () => (
  <ToolPageLayout
    title="AI Logo Generator"
    description="Design professional logos in seconds"
    icon={Palette}
    placeholder="Describe your brand and logo style... e.g. 'A minimalist tech startup logo for a company called Quantum, using geometric shapes and blue tones'"
    tips={[
      "Describe your brand personality: modern, playful, corporate, luxury",
      "Mention preferred colors and color schemes",
      "Specify style: minimalist, vintage, abstract, mascot-based",
      "Include your company name and industry for context",
    ]}
  />
);

export default LogoTool;

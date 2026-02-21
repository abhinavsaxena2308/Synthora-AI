import { Image } from "lucide-react";
import ToolPageLayout from "@/components/ToolPageLayout";

const ImageTool = () => (
  <ToolPageLayout
    title="AI Image Generator"
    description="Create stunning images from text descriptions"
    icon={Image}
    placeholder="Describe the image you want... e.g. 'A futuristic cityscape at sunset with flying cars and neon lights, cinematic lighting, 4K'"
    tips={[
      "Be specific about style: photorealistic, anime, oil painting, digital art",
      "Include lighting details: golden hour, studio lighting, dramatic shadows",
      "Mention composition: close-up, wide angle, bird's eye view",
      "Add quality keywords: 4K, ultra detailed, professional photography",
    ]}
  />
);

export default ImageTool;

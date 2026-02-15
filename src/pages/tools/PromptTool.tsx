import { Wand2 } from "lucide-react";
import ToolPageLayout from "@/components/ToolPageLayout";

const PromptTool = () => (
  <ToolPageLayout
    title="AI Prompt Generator"
    description="Craft perfect prompts for any AI model"
    icon={Wand2}
    placeholder="What do you want to create? Describe your goal and we'll generate optimized prompts... e.g. 'I want to generate product photos for an e-commerce store'"
    tips={[
      "Tell us what AI tool you're targeting: Midjourney, DALL-E, Stable Diffusion",
      "Describe the end goal, not just the visual — we'll optimize the prompt",
      "Mention any constraints: aspect ratio, style, color palette",
      "The more context you give, the better the prompt we generate",
    ]}
  />
);

export default PromptTool;

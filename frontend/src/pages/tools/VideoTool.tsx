import { Video } from "lucide-react";
import ToolPageLayout from "@/components/ToolPageLayout";

const VideoTool = () => (
  <ToolPageLayout
    title="AI Video Generator"
    description="Transform ideas into captivating videos"
    icon={Video}
    placeholder="Describe the video you want... e.g. 'A 10-second drone flyover of a tropical island with crystal clear water, cinematic quality'"
    tips={[
      "Describe the scene, camera movement, and duration",
      "Mention the mood: energetic, calm, dramatic, inspiring",
      "Include style reference: cinematic, documentary, social media",
      "Keep descriptions focused — simpler prompts often work better for video",
    ]}
  />
);

export default VideoTool;

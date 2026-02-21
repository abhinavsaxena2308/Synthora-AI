import { useState, useRef, useEffect } from "react";
import { Send, Loader2, LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/PageLayout";

interface ToolPageLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  placeholder: string;
  tips: string[];
}

const ToolPageLayout = ({ title, description, icon: Icon, placeholder, tips }: ToolPageLayoutProps) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "model"; content: string }[]>([]);
  const [tipsOpen, setTipsOpen] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleGenerate = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: `Generated result for: "${userMessage.slice(0, 80)}${userMessage.length > 80 ? "…" : ""}"\n\nThis is a placeholder. Connect your API to power real AI generation.`,
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <PageLayout showFooter={false} withGrid={false}>
      <div
        ref={mainRef}
        className="flex flex-col min-h-[calc(100vh-5rem)] bg-background"
      >
        {/* Main content area - scrollable when filled */}
        <div className="flex-1 flex flex-col min-h-0 w-full max-w-3xl mx-auto px-4">
          {!hasMessages && !isLoading ? (
            /* Empty state: centered like ChatGPT/Gemini */
            <div className="flex-1 flex flex-col items-center justify-center py-12">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="text-2xl font-semibold text-foreground mb-1">{title}</h1>
              <p className="text-muted-foreground text-sm mb-10">{description}</p>
              <div className="w-full max-w-2xl">
                <div className="rounded-2xl border border-border/60 bg-card/40 shadow-sm focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="min-h-[120px] border-0 bg-transparent resize-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/80 rounded-2xl"
                    rows={3}
                  />
                  <div className="flex justify-end px-3 pb-3">
                    <Button
                      variant="hero"
                      size="sm"
                      onClick={handleGenerate}
                      disabled={!input.trim()}
                      className="gap-1.5 rounded-xl"
                    >
                      <Send className="h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Press Enter to send, Shift+Enter for new line
                </p>
                <div className="mt-4 w-full max-w-2xl">
                  <button
                    type="button"
                    onClick={() => setTipsOpen((o) => !o)}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mx-auto"
                  >
                    {tipsOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    Tips for best results
                  </button>
                  {tipsOpen && (
                    <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground pl-4 border-l border-border/50 text-left">
                      {tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* Message list - custom scrollbar, smooth scroll */
            <div className="flex-1 overflow-y-auto overflow-x-hidden chat-scroll py-6 px-1 space-y-8">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === "user" ? "flex justify-end" : "flex justify-start"}
                >
                  <div
                    className={
                      msg.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-tr-md bg-primary/15 text-foreground px-4 py-3 text-sm"
                        : "max-w-[85%] rounded-2xl rounded-tl-md bg-muted/50 text-foreground px-4 py-3 text-sm whitespace-pre-wrap"
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-md bg-muted/50 px-4 py-3 flex items-center gap-2 text-muted-foreground text-sm">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating…
                  </div>
                </div>
              )}
              <div ref={bottomRef} className="min-h-6 flex-shrink-0" aria-hidden />
            </div>
          )}
        </div>

        {/* Fixed bottom input - only when conversation has started (ChatGPT/Gemini style) */}
        {hasMessages && (
          <div className="sticky bottom-0 left-0 right-0 border-t border-border/40 bg-background/95 backdrop-blur-sm py-4">
            <div className="w-full max-w-3xl mx-auto px-4">
              {/* Collapsible tips */}
              <div className="mb-3">
                <button
                  type="button"
                  onClick={() => setTipsOpen((o) => !o)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {tipsOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  Tips
                </button>
                {tipsOpen && (
                  <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground pl-4 border-l border-border/50">
                    {tips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="rounded-2xl border border-border/60 bg-card/40 shadow-sm focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/20 transition-all flex flex-col">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={placeholder}
                  className="min-h-[52px] max-h-[200px] border-0 bg-transparent resize-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/80 rounded-2xl py-3"
                  rows={1}
                />
                <div className="flex justify-end px-3 pb-3 -mt-1">
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={handleGenerate}
                    disabled={isLoading || !input.trim()}
                    className="gap-1.5 rounded-xl"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {isLoading ? "Generating…" : "Send"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ToolPageLayout;

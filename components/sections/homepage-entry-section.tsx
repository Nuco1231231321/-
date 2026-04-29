import Link from "next/link";
import { MessageCircleQuestion, Sparkles, Wand2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptChip } from "@/components/ui/prompt-chip";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

type HomepageEntrySectionProps = {
  prompts: readonly string[];
};

export function HomepageEntrySection({ prompts }: HomepageEntrySectionProps) {
  return (
    <Section className="relative border-b border-border-default/50 bg-bg-surface/10 py-32 overflow-hidden">
      {/* Decorative Background - Editorial Style */}
      <div className="absolute right-0 top-0 h-full w-[40%] bg-bg-base border-l border-border-default/50 opacity-50 bg-[url('/noise.png')] opacity-[0.02]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-32">
          {/* Left Side: The "Sacred" Input Field */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-accent-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">Consultation Interface</span>
              </div>

              <h2 className="font-serif text-[48px] leading-[1.0] font-semibold tracking-[-0.03em] text-text-primary lg:text-[64px]">
                One question. <br />
                <span className="italic text-accent-primary">No accounts.</span> <br />
                Just clarity.
              </h2>

              <p className="max-w-md text-[17px] leading-[1.7] text-text-secondary">
                The most important answers often start with a single, quiet realization. Type your honest query here to see a summary of the patterns at play.
              </p>
            </div>

            <div className="relative group">
              {/* Subtle Ritual Decoration */}
              <div className="absolute -left-4 -top-4 size-8 border-l border-t border-border-strong opacity-20" />
              <div className="absolute -right-4 -bottom-4 size-8 border-r border-b border-border-strong opacity-20" />

              <Card variant="default" className="overflow-hidden !border-border-strong !rounded-none shadow-[20px_20px_60px_-10px_rgba(0,0,0,0.05)]">
                <CardHeader className="bg-bg-surface p-6 border-b border-border-default flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircleQuestion className="size-4 text-accent-primary" />
                    <CardTitle className="text-sm font-bold uppercase tracking-widest text-text-primary">Input Query</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-text-tertiary">
                    <span className="animate-pulse flex size-1.5 rounded-full bg-accent-primary" />
                    SYSTEM IDLE
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Textarea
                    defaultValue="I keep going back and forth in my mind. Is this a moment to wait, speak honestly, or let go?"
                    aria-label="Homepage entry question"
                    className="min-h-[160px] w-full resize-none border-none bg-transparent p-8 text-xl font-serif text-text-primary focus-visible:ring-0 placeholder:italic"
                  />
                  <div className="flex flex-wrap gap-2 p-6 bg-bg-surface/50 border-t border-border-default">
                    {prompts.map((prompt, index) => (
                      <PromptChip key={prompt} active={index === 0} className="!rounded-none border-border-default/50">
                        {prompt}
                      </PromptChip>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 border-t border-border-default flex flex-col gap-4 sm:flex-row">
                  <Button variant="primary" fullWidth className="h-14 text-base !rounded-none !text-[#F9F6F1] shadow-md group">
                    <Wand2 className="mr-2 size-4 group-hover:rotate-12 transition-transform" />
                    Generate Summary
                  </Button>
                </div>
              </Card>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-tertiary">
                <ShieldCheck className="size-4 text-accent-primary" strokeWidth={2} />
                <span>Anonymous Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-tertiary">
                <Sparkles className="size-4 text-accent-primary" strokeWidth={2} />
                <span>Real-time Patterns</span>
              </div>
            </div>
          </div>

          {/* Right Side: Atmospheric Editorial Visual */}
          <div className="relative">
            <div className="relative aspect-[3/4] border-8 border-bg-surface overflow-hidden shadow-2xl">
              <Image
                src="/entry-atmospheric.png"
                alt="Atmospheric Ritual Space"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/5 to-transparent mix-blend-overlay" />

              {/* Micro Details */}
              <div className="absolute bottom-6 left-6 text-white z-20">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">Phase: Clarity</p>
              </div>
            </div>

            {/* Editorial callout lines */}
            <div className="absolute -left-12 -top-12 h-24 w-px bg-border-strong hidden lg:block" />
            <div className="absolute -left-12 -top-12 w-24 h-px bg-border-strong hidden lg:block" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

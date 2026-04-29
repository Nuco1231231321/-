import Link from "next/link";
import { Hand, Heart, Clock3, Sparkles } from "lucide-react";
import type { PreviewSnippet } from "@/types/content";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type HomepagePalmSectionProps = {
  snippets: PreviewSnippet[];
};

export function HomepagePalmSection({ snippets }: HomepagePalmSectionProps) {
  return (
    <Section density="major" className="relative border-y border-border-default/50 bg-bg-base py-24">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Side: Professional Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-accent-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">Professional Consultation</span>
              </div>

              <h2 className="font-serif text-[48px] leading-[1.05] font-semibold tracking-[-0.03em] text-text-primary lg:text-[64px]">
                The path from Question to <span className="italic text-accent-primary">Clarity</span>.
              </h2>

              <p className="max-w-xl text-[17px] leading-[1.8] text-text-secondary">
                A typed question offers speed. A palm reading offers physical evidence. We combine high-resolution imaging with pattern recognition to surface insights tailored to your unique history.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: Hand, label: "Detailed Mapping", desc: "Digital verification of the primary hand lines and mounts." },
                { icon: Heart, label: "Emotional Context", desc: "Identify recurring themes in relationships and stability." },
                { icon: Clock3, label: "Timing Windows", desc: "Analyze the intersection of opportunity and current cycles." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="flex size-11 shrink-0 items-center justify-center border border-border-default bg-bg-surface text-accent-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[15px] font-bold uppercase tracking-widest text-text-primary">{item.label}</p>
                    <p className="text-[14px] leading-relaxed text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex pt-4">
              <Link href="/ai-palm-reading" className={cn(buttonVariants({ variant: "primary" }), "h-14 px-10 text-base !rounded-none !text-[#F9F6F1] shadow-sm")}>
                Start AI Palm Reading
              </Link>
            </div>
          </div>

          {/* Right Side: Realistic Photography Showcase */}
          <div className="relative">
            <div className="relative aspect-[4/5] bg-bg-surface border border-border-default overflow-hidden p-3 shadow-xl">
              <Image
                src="/palm-scan-preview.png"
                alt="Professional Palm Discovery"
                fill
                className="object-cover"
              />

              {/* Clean, Non-AI styled Overlay */}
              <div className="absolute inset-0 z-10 p-8 pointer-events-none">
                {/* Elegant Label */}
                <div className="absolute top-8 left-8">
                  <div className="bg-surface-dark/90 px-3 py-1.5 backdrop-blur-md">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#F9F6F1]">Mapping: Verified</span>
                  </div>
                </div>

                {/* High-End Result Insight */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white p-6 border border-border-default shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="size-3 text-accent-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-text-tertiary">Reading Insight</span>
                    </div>
                    <p className="text-[15px] leading-relaxed font-serif text-text-primary">
                      "A distinct pattern in the emotional line suggests a focus on long-term grounding over immediate change."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

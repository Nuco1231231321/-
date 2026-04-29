import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Sparkles,
  Zap,
  Hand,
  Heart,
  Clock3,
  BriefcaseBusiness
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

type HomepageHeroShellProps = {
  title: string;
  description: string;
};

export function HomepageHeroShell({
  title,
  description,
}: HomepageHeroShellProps) {
  return (
    <Section density="none" className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-base/50">
      {/* Editorial Decorative Layer - Grain and Hairline */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />

      {/* Delicate Grid/Line System */}
      <div className="absolute inset-0 z-0">
        <div className="mx-auto h-full max-w-screen-2xl border-x border-border-default/50" />
        <div className="absolute top-[25%] left-0 w-full border-t border-border-default/30" />
        <div className="absolute bottom-[20%] left-0 w-full border-t border-border-default/30" />
      </div>

      <Container className="relative z-10 pt-20 pb-24">
        <div className="grid items-start gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          {/* Left Side: Structured Typography */}
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent-primary/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">
                The AI Ritual (v1.0)
              </span>
            </div>

            <div className="space-y-8">
              <h1 className="font-serif text-[64px] leading-[0.9] font-medium tracking-[-0.04em] text-text-primary sm:text-[80px] lg:text-[110px]">
                AI Fortune <br />
                <span className="text-accent-primary italic">Teller</span>
              </h1>

              <div className="max-w-md space-y-6">
                <p className="font-serif text-[22px] leading-[1.3] text-text-secondary lg:text-[28px]">
                  Clarity for your life&apos;s quietest questions.
                </p>
                <div className="h-px w-full bg-border-default/60" />
                <p className="text-[16px] leading-[1.8] text-text-secondary">
                  A specialized intersection of ancient pattern recognition and machine intelligence. Exploring love, timing, and career through the lines you carry.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/ai-palm-reading"
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "h-14 px-10 text-base shadow-sm !rounded-none !text-[#F9F6F1]"
                )}
              >
                Try AI Palm Reading
              </Link>
              <Link
                href="/online-fortune-telling"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-14 px-10 text-base !rounded-none hover:bg-bg-surface"
                )}
              >
                Ask a question
              </Link>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-tertiary">
                <Shield className="size-4 text-accent-primary" />
                <span>Encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-tertiary">
                <Zap className="size-4 text-accent-primary" />
                <span>Instant API</span>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Documentation Structure */}
          <div className="relative pt-12 lg:pt-0">
            {/* The "Artifact" Container - Avoiding cheap AI blurs */}
            <div className="relative aspect-[4/5] bg-bg-surface border border-border-strong p-2">
              <div className="absolute -top-6 -right-6 text-[10px] font-mono text-text-tertiary leading-none uppercase rotate-90 origin-left">
                Protocol-09 // Palm.Scan
              </div>

              <div className="relative h-full w-full overflow-hidden grayscale-[0.2] contrast-[1.05]">
                <Image
                  src="/AI Fortune Teller Illustration.png"
                  alt="The system interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/10" />
              </div>

              {/* Technical Overlays - Instead of floating bubbles, use structured cards */}
              <div className="absolute -left-12 top-1/4 w-56 border border-border-strong bg-white p-5 shadow-2xl">
                <div className="mb-4 flex items-center justify-between border-b border-border-default pb-2">
                  <span className="text-[10px] font-bold uppercase text-text-tertiary">Pattern Detected</span>
                  <Heart className="size-3 text-accent-primary" />
                </div>
                <p className="font-serif text-sm italic leading-relaxed text-text-primary">
                  "A resonance in the emotional line suggests a period of necessary reflection before a new cycle begins in late Autumn."
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 w-64 border border-border-strong bg-surface-dark p-6 text-ink-inverse shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center border border-ink-inverse/20">
                    <Hand className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Session Input</p>
                    <p className="text-sm font-medium">Detailed Palm Mapping Active</p>
                    <div className="mt-2 h-1 w-full bg-ink-inverse/10">
                      <div className="h-full w-2/3 bg-accent-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative labels at the corners */}
            <div className="absolute -bottom-16 left-0 flex gap-4 text-[9px] font-mono uppercase tracking-[0.2em] text-text-tertiary opacity-50">
              <span>Coordinates: 35.6895° N, 139.6917° E</span>
              <span className="hidden sm:inline">| System Time: Realtime</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

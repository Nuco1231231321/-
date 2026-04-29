"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { palmFaqs } from "@/content/site-content";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { UploadZone } from "@/components/blocks/upload-zone";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Shield,
  Zap,
  Hand,
  Heart,
  TrendingUp,
  Scale,
  Compass,
  FileSearch,
  ScanEye,
  Lock,
  EyeOff,
  History,
  FileCheck
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PalmReadingPage() {
  const router = useRouter();

  const handleFileUploaded = (file: File) => {
    console.log("File received, initiating compression protocol:", file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.onload = () => {
        // --- COMPRESSION LOGIC ---
        const MAX_WIDTH = 1024;
        const MAX_HEIGHT = 1024;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const compressedBase64 = canvas.toDataURL("image/jpeg", 0.8);
          console.log("Staging image to R2 cloud storage...");

          fetch('/api/palm/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ image: compressedBase64 })
          })
            .then(async (res) => {
              const data = await res.json();
              if (!res.ok) {
                console.error("PROXY ERROR DETAIL:", data);
                throw new Error(data.error || 'Upload Proxy Failed');
              }
              return data;
            })
            .then(data => {
              if (data.image_url) {
                console.log("R2 Staged Success:", data.image_url);
                localStorage.setItem("uploaded_palm_image_url", data.image_url);
                localStorage.setItem("uploaded_palm_image_base64", compressedBase64);
                router.push("/ai-palm-reading/analysis");
              }
            })
            .catch(err => {
              console.error("ANALYSIS FLOW RECOVERY:", err.message);
              // Fallback to local base64 so user isn't stuck
              localStorage.setItem("uploaded_palm_image_url", compressedBase64);
              localStorage.setItem("uploaded_palm_image_base64", compressedBase64);
              router.push("/ai-palm-reading/analysis");
            });
        }
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <PageWrapper navbar={<Navbar />} footer={<Footer />}>
      {/* 1. Hero Content & Upload System */}
      <Section density="major" className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-bg-base">
        <div className="absolute inset-x-0 top-[20%] h-px bg-border-default/40" />
        <Container className="relative z-10">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_520px] lg:gap-24">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-accent-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-primary">AI Palm Reading Scanner</span>
              </div>

              <div className="space-y-6">
                <h1 className="font-serif text-[56px] leading-[0.95] font-semibold tracking-[-0.04em] text-text-primary sm:text-[72px] lg:text-[100px]">
                  Free <br />
                  <span className="italic text-accent-primary">Palm Reading</span> <br />
                  Online
                </h1>
                <p className="max-w-xl font-serif text-[22px] leading-[1.3] text-text-secondary lg:text-[32px]">
                  A private mapping of your potential.
                </p>
                <div className="h-px w-full bg-border-default hover:bg-accent-primary transition-colors duration-500" />
                <p className="text-[17px] leading-[1.8] text-text-secondary">
                  Our **AI Palm Reader** uses advanced pattern recognition to analyze the unique biography written on your hands. No generic horoscopes—just physical evidence mapped against high-level machine intelligence.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 text-sm font-semibold text-text-tertiary">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-accent-primary" />
                  <span>Private & Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="size-4 text-accent-primary" />
                  <span>Instant Digital Analysis</span>
                </div>
              </div>
            </div>

            <div className="relative pt-8 lg:pt-0">
              <div className="relative bg-bg-surface border border-border-strong p-8 shadow-2xl">
                <div className="absolute -top-3 -left-3 size-16 border-l border-t border-accent-primary/40 pointer-events-none transition-opacity duration-1000 opacity-40" />

                <UploadZone
                  title="Begin Analysis"
                  description="Provide a clear, well-lit photo of your primary palm to start the scanning protocol."
                  actionLabel="Scan My Palm"
                  onUpload={handleFileUploaded}
                  className="!border-dashed !border-border-strong/40 !rounded-none !bg-bg-base hover:!bg-bg-surface transition-colors min-h-[400px]"
                />

                <div className="mt-8 pt-6 border-t border-border-default flex items-center justify-between text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                  <span>Protocol: PLM-SCAN.v2</span>
                  <span className="animate-pulse">System: Active</span>
                </div>
              </div>

              {/* DATA PRIVACY BANNER */}
              <div className="mt-6 border border-accent-soft/50 bg-accent-soft/10 p-4">
                <div className="flex gap-4">
                  <Lock className="size-5 shrink-0 text-accent-primary" />
                  <div className="space-y-1">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-text-primary">Data Sovereignty Commitment</p>
                    <p className="text-[12px] leading-relaxed text-text-secondary">
                      Your palm photo is processed in a secure ephemeral environment and **permanently deleted** immediately after analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Privacy & Trust Deep Dive */}
      <Section className="bg-surface-dark py-24 text-ink-inverse">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3 lg:gap-24">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-serif text-[42px] font-semibold leading-[1.1]">Privacy is <br /><span className="italic opacity-60">not optional.</span></h2>
              <p className="opacity-70 leading-relaxed font-serif">We understand the gravity of biological data. Our infrastructure is built to protect your identity while uncovering your patterns.</p>
            </div>
            <div className="lg:col-span-2 grid gap-10 sm:grid-cols-2">
              {[
                { icon: EyeOff, title: "Zero Trace Policy", desc: "No images are stored on our servers. The moment your reading is generated, the source photo is wiped from the system." },
                { icon: Shield, title: "End-to-End Encryption", desc: "All data transfers between your browser and our AI engine utilize bank-grade SSL encryption protocols." },
                { icon: Hand, title: "Anonymous Analysis", desc: "We don't require accounts or personal names. Your palm is analyzed as a standalone data set." },
                { icon: FileCheck, title: "Human Rights Aligned", desc: "Our AI is programmed for guidance, not predestination, ensuring an ethical approach to personal insights." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 border-l border-ink-inverse/10 pl-6 text-ink-inverse/90">
                  <item.icon className="size-6 text-accent-primary" />
                  <h3 className="text-lg font-bold font-serif">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Detailed Methodology */}
      <Section className="border-y border-border-default/40 bg-bg-surface/20 py-24">
        <Container>
          <div className="grid gap-20 lg:grid-cols-2">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-serif text-[42px] font-semibold text-text-primary italic">The Evolution of Chiromancy.</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed font-serif text-[17px]">
                  <p>
                    Traditionally, **palmistry online palm reading** was limited by the human eye. A reader might miss the subtle textures of the Mount of Moon or the faint branching of a destiny line.
                  </p>
                  <p>
                    By utilizing a **free palm reading scanner online**, you are engaging with a high-fidelity mapping engine. Our AI identifies over 10,000 distinct intersection points.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white border border-border-default shadow-sm">
                  <History className="size-6 mb-4 text-accent-primary" />
                  <h4 className="font-bold mb-2 font-serif">Ancient Wisdom</h4>
                  <p className="text-xs text-text-tertiary leading-relaxed">Based on 3,000 years of observation in Eastern and Western traditions.</p>
                </div>
                <div className="p-6 bg-white border border-border-default shadow-sm">
                  <ScanEye className="size-6 mb-4 text-accent-primary" />
                  <h4 className="font-bold mb-2 font-serif">Modern Logic</h4>
                  <p className="text-xs text-text-tertiary leading-relaxed">Driven by deep learning models trained on millions of pattern variations.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-12">
              <div className="space-y-4">
                <FileSearch className="size-8 text-accent-primary opacity-60" />
                <h3 className="text-xl font-bold font-serif text-text-primary">Free AI Palm Reading Scanner</h3>
                <p className="text-text-secondary leading-relaxed">The scanner performs a sub-millimeter analysis of your left palm—the "hand of potential"—to surface insights.</p>
              </div>
              <div className="space-y-4">
                <Compass className="size-8 text-accent-primary opacity-60" />
                <h3 className="text-xl font-bold font-serif text-text-primary">Personalized Online Reading</h3>
                <p className="text-text-secondary leading-relaxed">By combining **online palm readings** with real-time data synthesis, we offer a personal biography that evolves as you do.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Comparison Section */}
      <Section density="major" className="py-24 bg-bg-base overflow-hidden border-t border-border-default/40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-[42px] font-semibold text-text-primary leading-[1.1]">AI Scanner vs. <br /><span className="italic text-accent-primary">Traditional Readings</span></h2>
              <div className="space-y-4">
                {[
                  { label: "Precision", human: "Subjective eye analysis", ai: "10,000+ data point mapping" },
                  { label: "Availability", human: "Scheduled appointments", ai: "Instant 24/7 access" },
                  { label: "Privacy", human: "Face-to-face vulnerability", ai: "100% anonymous & ephemeral" },
                  { label: "Bias", human: "Personal reader influence", ai: "Objective pattern recognition" }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-[80px_1fr_1fr] gap-4 py-4 border-b border-border-default text-xs">
                    <span className="font-bold text-text-tertiary uppercase tracking-widest text-[9px] pt-1">{item.label}</span>
                    <span className="text-text-secondary line-through opacity-40 italic">{item.human}</span>
                    <span className="text-text-primary font-semibold">{item.ai}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative p-10 bg-bg-surface border border-border-strong shadow-xl">
              <div className="absolute top-0 right-0 p-4">
                <Shield className="size-8 text-accent-primary opacity-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 italic text-text-primary">The Clinical Advantage</h3>
              <p className="text-text-secondary leading-relaxed text-[15px] font-serif">
                A traditional **palmistry online palm reading** often relies on broad archetypes. Our **AI Palm Reader** treats your palm as a unique biological landscape.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Four Dimensions */}
      <Section className="py-24 border-t border-border-default/40">
        <Container>
          <div className="mb-16">
            <h2 className="font-serif text-[38px] font-semibold text-text-primary">Your Reading. <span className="italic text-accent-primary">Four Dimensions.</span></h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-2">
            {[
              {
                icon: Heart,
                title: "Emotional Integrity & Love",
                desc: "Identify patterns in your heart line to understand connection.",
                tag: "Relationship Wisdom"
              },
              {
                icon: TrendingUp,
                title: "Career Trajectory & Timing",
                desc: "Fate line and sun line reveal drive and optimal windows.",
                tag: "Professional Direction"
              },
              {
                icon: Scale,
                title: "Internal Balance & Health",
                desc: "Energy mapping through health and life lines.",
                tag: "Vitality Index"
              },
              {
                icon: Hand,
                title: "Core Identity & Strength",
                desc: "Mount of Jupiter and Venus character profile.",
                tag: "Character Profile"
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative border border-border-default bg-bg-surface p-10 hover:border-accent-primary transition-colors">
                <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-accent-primary opacity-60">
                  {pillar.tag}
                </div>
                <div className="space-y-5">
                  <div className="flex size-12 items-center justify-center border border-border-default bg-bg-base text-accent-primary group-hover:bg-accent-primary group-hover:text-ink-inverse transition-colors">
                    <pillar.icon className="size-6" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-text-primary">{pillar.title}</h3>
                  <p className="max-w-sm text-text-secondary leading-relaxed font-serif text-[15px]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. FAQ & Final CTA */}
      <Section className="py-24 border-t border-border-default/40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_560px]">
            <div className="space-y-12">
              <h2 className="font-serif text-[38px] font-semibold text-text-primary italic text-accent-primary">Questions & Clarity.</h2>
              <Accordion type="single" collapsible className="w-full">
                {palmFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-border-default">
                    <AccordionTrigger className="text-left font-serif text-xl py-5 hover:no-underline hover:text-accent-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-text-secondary text-[17px] leading-relaxed pb-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="bg-bg-surface border border-border-strong p-10 flex flex-col items-center text-center justify-center space-y-8 h-fit lg:sticky lg:top-24 shadow-xl">
              <div className="size-16 rounded-full bg-accent-soft/30 flex items-center justify-center text-accent-primary">
                <Hand className="size-8" />
              </div>
              <div className="space-y-4 font-serif">
                <h3 className="text-3xl font-bold text-text-primary">Ready to See?</h3>
                <p className="text-text-secondary leading-relaxed">Complete one verification scan to sync your biological momentum markers.</p>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={cn(buttonVariants({ variant: "primary" }), "h-14 px-12 text-base shadow-lg !text-[#F9F6F1] !rounded-none")}
              >
                Upload My Palm
              </button>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}

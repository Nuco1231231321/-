import { fortuneFaqs, fortuneTrustItems } from "@/content/site-content";
import { ResultPreviewCard } from "@/components/blocks/result-preview-card";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { ToolPageShell } from "@/components/sections/tool-page-shell";
import { Button } from "@/components/ui/button";
import { PromptChip } from "@/components/ui/prompt-chip";
import { Textarea } from "@/components/ui/textarea";

const prompts = [
  "Love",
  "Career",
  "Timing",
  "Self-understanding",
] as const;

export default function OnlineFortuneTellingPage() {
  return (
    <PageWrapper navbar={<Navbar />} footer={<Footer />}>
      <ToolPageShell
        eyebrow="Online Fortune Telling"
        title="Question-first readings should create clarity before they ask for money."
        description="This page shell is designed for faster entry traffic that wants an immediate answer, but still needs structure, trust, and a reason to pay for depth."
        trustItems={fortuneTrustItems}
        trustTitle="The question-first flow wins only if the preview feels emotionally precise."
        trustBody="A question box alone is not a product. The system must reflect the user’s situation, name a recognizable pattern, and create a justified gap between the preview and the full report."
        inputArea={
          <div className="rounded-xl border border-border-default bg-bg-surface p-5 lg:p-6">
            <div className="space-y-4">
              <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-text-secondary">
                Start with your question
              </p>
              <Textarea
                defaultValue="I feel torn between waiting and acting. Is this a period for patience, or is the uncertainty itself the answer?"
                aria-label="Fortune question preview"
              />
              <div className="flex flex-wrap gap-2">
                {prompts.map((prompt, index) => (
                  <PromptChip key={prompt} active={index === 0}>
                    {prompt}
                  </PromptChip>
                ))}
              </div>
              <Button fullWidth>Start reading</Button>
            </div>
          </div>
        }
        previewArea={
          <ResultPreviewCard
            eyebrow="Preview structure"
            title="The free answer needs to recognize the user’s situation fast."
            summary="This shell demonstrates how the product should move from a user question into a short, emotionally legible interpretation that builds desire for the full report."
            bullets={[
              "Reflects uncertainty without sounding generic",
              "Turns confusion into a named pattern or tension",
              "Introduces what deeper clarity becomes available after upgrade",
            ]}
            lockedLabel="Locked: expanded interpretation, clearer direction, and next-step guidance"
          />
        }
        faqs={fortuneFaqs}
      />
    </PageWrapper>
  );
}

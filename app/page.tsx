import Script from "next/script";
import type { Metadata } from "next";

import {
  homepageFaqs,
  homepagePalmPreviewSnippets,
  homepageQuestionPrompts,
  homepageReadingUseCases,
  homepageSecondaryToolPaths,
  homepageSteps,
  homepageTrustItems,
} from "@/content/site-content";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { ToolPathGrid } from "@/components/blocks/tool-path-grid";
import { TrustBar } from "@/components/blocks/trust-bar";
import { ValuePillarsGrid } from "@/components/blocks/value-pillars-grid";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { FaqSection } from "@/components/sections/faq-section";
import { HomepageEntrySection } from "@/components/sections/homepage-entry-section";
import { HomepageHeroShell } from "@/components/sections/homepage-hero-shell";
import { HomepagePalmSection } from "@/components/sections/homepage-palm-section";

export const metadata: Metadata = {
  title: "AI Fortune Teller - Personalized Online Fortune Telling & Readings",
  description:
    "Discover clarity with the world's most advanced AI Fortune Teller. Get instant online palm readings, personalized astrology, and spiritual insights for love, career, and timing. 100% private and accurate.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Fortune Teller | #1 Online Fortune Telling & AI Palm Reading",
    description:
      "A premium AI fortune teller for personal insights. Start with a quick query or explore deeper with AI Palm Reading for truly personalized results.",
    url: "/",
    siteName: "AI Fortune",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Fortune Teller | Professional Online Readings",
    description: "Get instant AI palm readings and personalized spiritual guidance. Private and accurate.",
  }
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <PageWrapper navbar={<Navbar />} footer={<Footer />}>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HomepageHeroShell
        title="AI Fortune Teller"
        description="A personal online fortune teller for love, career, and emotional clarity. Start with AI Palm Reading for a more personalized experience, or ask the specific question that has been on your mind."
      />

      <SectionWrapper density="dense">
        <TrustBar items={homepageTrustItems} />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="How it works"
        title="One question, a first reading, and a clear next step."
        description="You should feel whether the reading understands your situation before deciding whether to go further."
      >
        <ProcessSteps items={homepageSteps} />
      </SectionWrapper>

      <HomepageEntrySection prompts={homepageQuestionPrompts} />

      <HomepagePalmSection snippets={homepagePalmPreviewSnippets} />

      <SectionWrapper
        eyebrow="What people come here for"
        title="Love, work, timing, and the patterns you keep running into."
        description="These are the questions that feel too personal for a generic horoscope and too real to leave unanswered."
      >
        <ValuePillarsGrid items={homepageReadingUseCases} />
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Where to start"
        title="Choose the path that matches how you want to begin."
        description="A quick question works well when you want speed. Palm reading goes further when you want the experience to feel more specific to you."
      >
        <ToolPathGrid items={homepageSecondaryToolPaths} />
      </SectionWrapper>

      <FaqSection
        title="Questions you might have before starting"
        description="If you are deciding whether this feels right for you, these are the answers that usually help."
        items={homepageFaqs}
      />
    </PageWrapper>
  );
}

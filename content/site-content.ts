import {
  BriefcaseBusiness,
  Clock3,
  Compass,
  Heart,
  Lock,
  Mail,
  Shield,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";

import type {
  FaqItem,
  PreviewSnippet,
  StepItem,
  ToolPathItem,
  TrustItem,
  ValuePillarItem,
} from "@/types/content";

export const homepageTrustItems: TrustItem[] = [
  { label: "Private by design", icon: Shield },
  { label: "Instant first reading", icon: Zap },
  { label: "Personal, not generic", icon: Sparkles },
  { label: "Clearer next steps", icon: Compass },
];

export const homepageSteps: StepItem[] = [
  {
    title: "Ask what is really on your mind",
    body: "Most people begin with love, timing, career, or a feeling they cannot quite explain yet.",
  },
  {
    title: "See what the reading picks up",
    body: "The first response should feel immediate, calm, and personally recognizable — not like a template answer.",
  },
  {
    title: "Go deeper when it feels right",
    body: "The full reading connects the pattern, the emotional meaning, and the next step with more clarity.",
  },
];

export const homepageFaqs: FaqItem[] = [
  {
    question: "How does this AI fortune teller differ from a generic chatbot?",
    answer:
      "Unlike a standard AI, our AI fortune teller is specifically tuned for emotional intelligence and symbolic interpretation. Whether you are seeking an online fortune teller for love or a quick AI horoscope, the system reads the underlying patterns of your query to provide a personalized astrology reading that feels deeply resonant rather than template-generated.",
  },
  {
    question: "Can I get a personalized astrology reading without my birth chart?",
    answer:
      "Yes. While traditional astrologers require an exact birth time, our personalized reading starts with your current energy—either through an honest question or a free AI palm reading. This provides immediate clarity on your situation, making it an accessible alternative to complex natal chart readings while maintaining high emotional accuracy.",
  },
  {
    question: "Is this considered an AI psychic reading or an AI horoscope?",
    answer:
      "It combines the best of both. Think of it as an AI psychic reading that uses modern technology to interpret ancient patterns. It’s more specific than a daily love horoscope because it focuses on your unique question, yet it’s calmer and more private than visiting a traditional psychic.",
  },
  {
    question: "How accurate is the free online fortune teller preview?",
    answer:
      "The free preview is designed to show you that the system 'sees' your situation. We don't believe in vague prophecies; instead, we focus on identifying the emotional cycles you are currently living through. Most users find that even the free summary provides enough clarity to understand their next step without committing to a full report early.",
  },
  {
    question: "Why should I try the palm reading instead of just asking a question?",
    answer:
      "A typed question is fast, but an AI palm reading provides a much higher signal for a personalized reading. Your palm lines are a physical map of your tendencies. By using the AI palm reader scanner, you allow the interpretative engine to ground its insights in something uniquely yours, leading to a more intimate and less generic experience.",
  },
  {
    question: "Is the first AI palm reading really free?",
    answer:
      "Yes. You can run a free AI palm reading online without payment, account creation, or email. The first reading gives you a short, structured summary so you can see whether the reading feels accurate before deciding whether to unlock the deeper layers of the report.",
  },
];

export const homepageReadingUseCases: ValuePillarItem[] = [
  {
    title: "Love and Relationship Reading",
    body: "Focus on mixed signals, emotional distance, and the underlying truth of a connection that has not fully surfaced yet.",
    icon: Heart,
  },
  {
    title: "Career and Timing Direction",
    body: "For seasons when work feels unsettled, a major decision is approaching, or you need a steadier sense of timing.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Patterns and Self-Understanding",
    body: "Move beyond a generic horoscope to see the recurring emotional patterns that shape your responses to life.",
    icon: Clock3,
  },
];

export const homepagePalmPreviewSnippets: PreviewSnippet[] = [
  {
    label: "Core Tendency",
    value: "You tend to carry more than you show, especially when a decision feels emotionally important and difficult to speak out loud.",
  },
  {
    label: "Relationship Pattern",
    value: "There may be caution around closeness here, but not a lack of feeling. What appears as distance is often self-protection.",
  },
  {
    label: "Current Direction",
    value: "The next opening may come from clearer expression, not from waiting for a certainty that has not yet arrived on its own.",
  },
];

export const homepageSecondaryToolPaths: ToolPathItem[] = [
  {
    eyebrow: "Personalized Analysis",
    title: "AI Palm Reading",
    description: "The most personal entry point. Use your palm photo to get a reading that feels specific to you and your unique life lines.",
    href: "/ai-palm-reading",
    cta: "Start palm reading",
  },
  {
    eyebrow: "Quick Clarity",
    title: "Online Fortune Telling",
    description: "Ask one honest question and get an immediate reading when you want clarity before committing to anything deeper.",
    href: "/online-fortune-telling",
    cta: "Ask one question",
  },
  {
    eyebrow: "Coming Soon",
    title: "Bazi Chart Calculator",
    description: "A birth-based reading path for when you want a structured chart interpretation alongside the fortune reading.",
    href: "/checkout",
    cta: "Join roadmap",
  },
];

export const homepageQuestionPrompts = [
  "Will this relationship become clearer?",
  "Should I make the career move now?",
  "What is this moment trying to teach me?",
  "What pattern am I repeating?",
] as const;

export const palmTrustItems: TrustItem[] = [
  { label: "Upload only what is needed", icon: Upload },
  { label: "Private image handling", icon: Shield },
  { label: "Instant summary first", icon: Zap },
  { label: "Deeper report stays locked", icon: Lock },
];

export const palmFaqs: FaqItem[] = [
  {
    question: "What is AI palm reading and how is it different from traditional palmistry?",
    answer:
      "AI palm reading uses computer vision and structured interpretation to read the same lines a traditional palmist would — life line, heart line, head line, fate line — but without the in-person reading session. The interpretation focuses on personality, emotional patterns, and current direction rather than mystical prediction.",
  },
  {
    question: "Is there a free palm reading online I can try first?",
    answer:
      "Yes. You can run a free AI palm reading by uploading one clear photo of your palm. The free preview gives you a short, structured summary so you can see whether the reading feels accurate before unlocking the full report.",
  },
  {
    question: "Do I need a special palm scanner or app?",
    answer:
      "No. The online palm reading works in your browser with a standard phone or laptop camera. You do not need to download an app, sign up for an account, or use a dedicated palm reading scanner. A clear photo of your open palm is enough.",
  },
  {
    question: "How should I take the palm photo for the best reading?",
    answer:
      "Open your dominant hand, palm facing up, in soft natural light. Make sure the major lines are visible and not blurred. The AI palm reader works best when the photo is in focus and the whole palm fits inside the frame. If the image is too dark or out of focus, you will be asked to retake it.",
  },
  {
    question: "Is my palm photo private?",
    answer:
      "Yes. The image is used only to generate your reading. It is not shared, sold, or used for training. You can delete the photo and reading at any time from your session.",
  },
  {
    question: "What does the full palm reading report include?",
    answer:
      "The full report goes beyond the preview into love and relationship pattern, career and timing direction, personality strengths and tensions, and a section on what this current chapter is asking from you. It is closer to a structured personal reading than a generic palmistry guide.",
  },
  {
    question: "Can I get a free AI palm reading without signing up?",
    answer:
      "Yes. The first reading is free, and you do not need an account or email to see the preview. Email is only requested if you want the full report sent to you, or if you want to come back to your reading later.",
  },
];

export const fortuneTrustItems: TrustItem[] = [
  { label: "Low-risk question entry", icon: Sparkles },
  { label: "Structured answer preview", icon: Compass },
  { label: "Private and calm by default", icon: Shield },
  { label: "Email capture only after value", icon: Mail },
];

export const fortuneFaqs: FaqItem[] = [
  {
    question: "What is online fortune telling and how does the AI version work?",
    answer:
      "Online fortune telling here means asking one honest question and getting a structured reading in return. Unlike a generic chatbot answer, the AI is shaped to recognize emotional patterns — relationship tension, career uncertainty, timing questions — and respond with something closer to a personal reading than a horoscope summary.",
  },
  {
    question: "Can an AI fortune teller really read my situation?",
    answer:
      "It cannot predict the future. What it can do is read the question carefully, identify the pattern behind it, and reflect it back in clearer language. Most people use it less for prophecy and more for emotional clarity — a calmer way to see what is actually going on.",
  },
  {
    question: "How is this different from a daily love horoscope or career horoscope?",
    answer:
      "A daily love horoscope is written for everyone with the same sign. This is shaped around the specific question you bring. If you ask about a relationship, the reading focuses on that relationship — not on what every Cancer or Leo is supposed to feel today.",
  },
  {
    question: "What questions should I ask for the best reading?",
    answer:
      "Honest, slightly uncertain questions work best — \"why does this keep happening,\" \"should I wait or speak up,\" \"is this the right time.\" Vague questions like \"what will happen\" give vague readings. The more specific your question, the more personal the answer feels.",
  },
  {
    question: "Is the first online fortune reading free?",
    answer:
      "Yes. You can ask one question and get the first reading without payment, account, or email. The full report is paid, and you only see that option after the first reading is in front of you.",
  },
  {
    question: "Do I need to share personal information to start?",
    answer:
      "No. You do not need a birth chart, name, location, or sign-up. Just type your question. Email is only collected if you want to save your reading or receive the full report.",
  },
];

export const checkoutFaqs: FaqItem[] = [
  {
    question: "What exactly do I get with the full reading?",
    answer:
      "A complete personal report covering your love and relationship pattern, career and timing direction, emotional tendencies, and a clear section on what to do next. It builds directly on the preview you just saw, so it feels like a continuation of the same reading — not a separate product.",
  },
  {
    question: "Is this a one-time payment or a subscription?",
    answer:
      "One-time. You pay once for one full report. There is no auto-renewal, no monthly charge, and no hidden subscription. If you want another reading later, you start a new one.",
  },
  {
    question: "How quickly do I get the full report?",
    answer:
      "Immediately. The full reading unlocks the moment payment goes through — no waiting period, no email delivery delay. You can read it on the same screen and save or email it to yourself afterward.",
  },
  {
    question: "Is the payment secure?",
    answer:
      "Yes. Payments are processed by an industry-standard provider with full encryption. Your card details are never stored on this site, and the reading itself is tied to your session, not to a permanent account.",
  },
  {
    question: "Can I get a refund if the reading is not useful?",
    answer:
      "Yes. If the full reading does not feel useful or accurate, you can request a refund within 7 days. The free preview exists exactly so you can decide before paying — but refunds are still available if something goes wrong.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You can complete the reading and payment without an account. Email is only requested so you can have a copy of the report or return to it later.",
  },
];

export const checkoutIncludes = [
  { label: "Full love pattern analysis", icon: Heart },
  { label: "Career and timing interpretation", icon: BriefcaseBusiness },
  { label: "Next-step guidance summary", icon: Compass },
];

export const palmReadingRitual = {
  scanningPhases: [
    { id: "lines", label: "Scanning Line Intersections...", duration: 2500 },
    { id: "mounts", label: "Analyzing Mount Depth & Tension...", duration: 3000 },
    { id: "rare", label: "Detecting Rare Destiny Markers...", duration: 2500 },
    { id: "ancient", label: "Cross-referencing Ancient Palmistry Systems...", duration: 3500 },
    { id: "path", label: "Mapping Life Path Trajectory...", duration: 3000 }
  ],
  teaserModels: {
    love: {
      hook: "We found a rare shadow bridge between your Heart and Head lines.",
      trigger: "This signifies a profound conflict between what you crave and what you tolerate.",
      gap: "Is this bridge a connection or a boundary you haven't crossed yet?",
    },
    wealth: {
      hook: "Your Sun Line shows a significant blockage at your current age-node.",
      trigger: "A major financial opportunity is visible, but a secondary line is holding it back.",
      gap: "Do you know which habit is suppressing this surge?",
    },
    career: {
      hook: "A dual fate line has started to emerge in your secondary hand.",
      trigger: "This usually appears when a person is living one life while another is waiting to begin.",
      gap: "Are you ready to handle the transition that begins in 4-7 months?",
    },
    transition: {
      hook: "The intersection of your Life and Fate lines shows a rare 'pivot node'.",
      trigger: "This usually appears before a major, irreversible life decision.",
      gap: "Is this your ultimate opportunity or a critical warning you shouldn't ignore?",
    },
    rare: {
      hook: "An extremely rare 'Mystic Cross' (La Croix Mystique) was detected.",
      trigger: "Only 3% of individuals carry this mark of profound intuitive power.",
      gap: "Your potential is currently dormant. Do you know how to activate it?",
    }
  },
  paywallSolutions: [
    {
      question: "Is this real?",
      answer: "Our AI maps the physical tension and geometric intersections of your unique palm. We see the patterns you feel but cannot name."
    },
    {
      question: "Is it worth it?",
      answer: "You are not buying a report; you are buying the explanation for the patterns that have been holding you back for years."
    },
    {
      question: "Why buy now?",
      answer: "Your current 'Pivot Node' is active. Insights provided during this window are 4x more actionable than during static phases."
    },
    {
      question: "What if I don't?",
      answer: "The pattern identified in your 'Teaser' will continue to repeat until the cognitive gap is closed with accurate data."
    }
  ]
};

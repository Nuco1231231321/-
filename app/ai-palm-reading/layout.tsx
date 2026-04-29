import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free AI Palm Reading Online - Accurate Palmistry Scanner",
    description:
        "Experience the #1 AI Palm Reader online. Scan your palm for free and receive instant insights into your love life, career trajectory, and timing windows. Safe, private, and precise.",
    alternates: {
        canonical: "/ai-palm-reading",
    },
    openGraph: {
        title: "AI Palm Reading Online - Free Biometric Palmistry Scanner",
        description:
            "Get a high-fidelity mapping of your destiny. Our AI Palm Reader analyzes 10,000+ data points for accurate personal insights. 100% private.",
        url: "/ai-palm-reading",
        type: "article",
        images: ["/palm-scan-preview.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Free AI Palm Reading Online | AI Fortune",
        description: "Scan your palm for instant insights into your love, career, and future. Private and encrypted.",
        images: ["/palm-scan-preview.png"],
    },
};

export default function PalmLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

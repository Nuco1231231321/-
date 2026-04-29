"use client";

import React, { useState, useEffect } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    ScanEye,
    ShieldCheck,
    Lock,
    Heart,
    Zap,
    ArrowRight,
    X,
    Target,
    Sparkles,
    Star,
    Activity,
    AlertCircle,
    Loader2
} from "lucide-react";

const SCANNING_PHASES = [
    { id: "P1", label: "Neural Pattern Initialization..." },
    { id: "P2", label: "Mapping Topographic Intersections..." },
    { id: "P3", label: "Decoding Destiny Markers..." },
    { id: "P4", label: "Analysing Temporal Flow..." },
    { id: "P5", label: "Final Synthesis Protocol..." }
];

export default function AnalysisPage() {
    const [phase, setPhase] = useState<"scanning" | "results">("scanning");
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [userImage, setUserImage] = useState<string | null>(null);
    const [reportData, setReportData] = useState<any>(null);
    const [loadingError, setLoadingError] = useState<string | null>(null);

    // 1. Initial Load: Image & API Request
    useEffect(() => {
        const imageUrl = localStorage.getItem("uploaded_palm_image_url");
        const localBase64 = localStorage.getItem("uploaded_palm_image_base64");

        console.log("Analysis Component Mounted. Checking for staged image...");

        if (localBase64) setUserImage(localBase64); // 即时显示本地图片防止留白

        if (imageUrl) {
            console.log("Ready to analyze. Source:", imageUrl.startsWith('http') ? 'R2 Cloud' : 'Local Fallback');

            const analyzePalm = async () => {
                console.log("Initiating analysis via R2 link...");
                try {
                    const response = await fetch('/api/palm/analyze', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ image_url: imageUrl })
                    });

                    console.log("API Response status:", response.status);
                    if (!response.ok) {
                        const errText = await response.text();
                        throw new Error(`Server returned ${response.status}: ${errText}`);
                    }

                    const data = await response.json();
                    console.log("AI Analysis Successful! Data received:", data);
                    setReportData(data);
                } catch (err: any) {
                    console.error("ANALYSIS ERROR:", err);
                    setLoadingError(err.message || "Connection to analysis cluster interrupted.");
                }
            };

            analyzePalm();
        } else {
            console.warn("No image found in localStorage. User may have bypassed upload.");
        }
    }, []);

    // 2. Scan Phase Animation
    useEffect(() => {
        if (phase === "scanning") {
            const interval = setInterval(() => {
                setPhaseIndex((prev) => {
                    if (prev < SCANNING_PHASES.length - 1) return prev + 1;

                    // 如果数据还没回来，就停在最后一帧等待
                    if (!reportData && !loadingError) return prev;

                    clearInterval(interval);
                    setTimeout(() => setPhase("results"), 1200);
                    return prev;
                });
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [phase, reportData, loadingError]);

    if (loadingError && phase === "scanning") {
        return (
            <PageWrapper navbar={<Navbar />} footer={<Footer />}>
                <div className="min-h-screen flex items-center justify-center bg-[#F5F2ED] p-6">
                    <div className="text-center space-y-6 max-w-sm">
                        <AlertCircle className="size-12 text-accent-primary mx-auto opacity-50" />
                        <div className="space-y-2">
                            <h3 className="font-serif text-2xl italic font-bold">Network Disturbance</h3>
                            <p className="text-text-primary/60 font-serif italic">{loadingError}</p>
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="text-[10px] font-bold uppercase tracking-widest underline decoration-accent-primary underline-offset-8"
                        >
                            Re-initialize Scanning
                        </button>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper navbar={<Navbar />} footer={<Footer />}>
            <div className="absolute inset-0 z-0 bg-[#F5F2ED]" />
            <div className="absolute inset-0 z-[1] bg-[url('/noise.png')] opacity-[0.05] pointer-events-none" />

            <Section className="relative min-h-[90vh] pt-32 pb-20 z-10">
                <Container className="max-w-4xl mx-auto">

                    {phase === "scanning" ? (
                        <div className="flex flex-col items-center justify-center space-y-12 min-h-[75vh]">
                            <div className="text-center space-y-4">
                                <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent-primary animate-pulse">
                                    Encryption Layer: Deep-Bio Scan
                                </div>
                                <h1 className="font-serif text-[42px] font-medium leading-tight text-text-primary italic">
                                    Decoding your trajectory.
                                </h1>
                            </div>

                            <div className="relative w-full max-w-sm aspect-[3/4] bg-white shadow-2xl border border-text-primary/5 p-4 group overflow-hidden">
                                <div className="relative w-full h-full overflow-hidden bg-bg-surface flex items-center justify-center">
                                    {(reportData?.image_url || userImage) ? (
                                        <img
                                            src={reportData?.image_url || userImage}
                                            className="w-full h-full object-cover grayscale opacity-90 scale-[1.05]"
                                            alt="Scan Target"
                                        />
                                    ) : (
                                        <ScanEye className="size-24 text-text-primary/10" strokeWidth={0.5} />
                                    )}
                                    <div className="absolute inset-x-0 w-full h-[2px] bg-accent-primary shadow-[0_0_20px_rgba(var(--accent-primary-rgb),1)] animate-scan z-20" />
                                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none z-10 border border-accent-primary/20" />
                                </div>
                            </div>

                            <div className="text-center space-y-3">
                                <div className="flex items-center justify-center gap-3 font-serif italic text-2xl text-text-primary">
                                    {!reportData && phaseIndex === SCANNING_PHASES.length - 1 && <Loader2 className="size-5 animate-spin text-accent-primary" />}
                                    {SCANNING_PHASES[phaseIndex].label}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* RESULTS PREVIEW WITH REAL DATA */
                        <div className="space-y-16 animate-in fade-in duration-2000">
                            <div className="text-center space-y-4 border-b border-text-primary/10 pb-12">
                                <h2 className="font-serif text-[52px] font-bold italic text-text-primary leading-none">The Analysis Record.</h2>
                                <p className="text-text-primary/70 font-serif text-lg italic italic">
                                    Trajectory ID: <span className="uppercase tracking-widest font-sans font-bold text-xs">{reportData?.trajectory_id || "TR-9902"}</span>
                                </p>
                            </div>

                            {/* Dynamic Discovery Card */}
                            <div
                                onClick={() => setShowModal(true)}
                                className="bg-white border border-text-primary/10 p-10 text-center space-y-4 relative shadow-sm hover:shadow-md transition-all cursor-pointer group"
                            >
                                <Sparkles className="size-5 text-accent-primary mx-auto" />
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-primary">Critical Recognition</p>
                                    <h3 className="font-serif text-[32px] font-bold italic text-text-primary">{reportData?.rare_marker?.label || "The Fork of Intuition"}</h3>
                                </div>
                                <p className="text-text-primary font-serif text-lg leading-relaxed max-w-lg mx-auto italic">
                                    A rare biological signature identified in approximately **{reportData?.rare_marker?.rarity || "11.2%"}** of cases.
                                </p>
                                <p className="text-sm font-serif italic opacity-60">“{reportData?.rare_marker?.description}”</p>
                                <div className="pt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-text-primary group-hover:text-accent-primary transition-all underline underline-offset-8 decoration-accent-primary/40">
                                    Retrieve Complete Biography <ArrowRight className="size-3" />
                                </div>
                            </div>

                            {/* Dynamic Pillars */}
                            <div className="grid gap-6 sm:grid-cols-3">
                                <div className="bg-white border border-text-primary/10 p-8 text-center space-y-4 shadow-sm">
                                    <Zap className="size-5 text-accent-primary mx-auto" />
                                    <div className="text-3xl font-serif font-bold italic">{reportData?.pillars?.life_energy || 84}<span className="text-sm opacity-20 italic">/100</span></div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-primary">Life Energy</p>
                                </div>
                                <div className="bg-white border border-text-primary/10 p-8 text-center space-y-4 shadow-sm">
                                    <Target className="size-5 text-accent-primary mx-auto" />
                                    <div className="text-3xl font-serif font-bold italic">{reportData?.pillars?.career_clarity || 63}<span className="text-sm opacity-20 italic">/100</span></div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-primary">Career Path</p>
                                </div>
                                <div className="bg-white border border-text-primary/10 p-8 text-center space-y-4 shadow-sm">
                                    <Heart className="size-5 text-accent-primary mx-auto" />
                                    <div className="text-3xl font-serif font-bold italic">{reportData?.pillars?.emotional_depth || 91}<span className="text-sm opacity-20 italic">/100</span></div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-text-primary">Emotional Core</p>
                                </div>
                            </div>

                            {/* Dynamic Insights Map */}
                            {reportData?.insights?.map((insight: any, idx: number) => (
                                <div key={idx} className="bg-white border border-text-primary/10 p-12 lg:p-16 space-y-10 shadow-sm relative overflow-hidden">
                                    <div className="text-center space-y-2">
                                        <span className="font-serif italic text-accent-primary text-base">Verified Insight {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                        <h3 className="font-serif text-[32px] font-bold italic text-text-primary leading-tight">
                                            {insight.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-10 text-xl font-serif text-text-primary/90 leading-[1.8] italic text-center max-w-2xl mx-auto">
                                        <p className="font-bold underline decoration-accent-primary/20 underline-offset-8">“{insight.summary}”</p>

                                        <div className="relative pb-20">
                                            <p className={cn(
                                                "text-2xl leading-[2.2] text-text-primary transition-all duration-1000 select-none",
                                                idx === 0 ? "opacity-10 blur-[9px]" : "opacity-0 blur-[20px]"
                                            )}>
                                                {insight.full_reveal}
                                                {" ".repeat(200)}
                                            </p>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                                                <Lock className="size-8 text-accent-primary/50" />
                                                <button
                                                    onClick={() => setShowModal(true)}
                                                    className="bg-text-primary text-white px-14 h-16 text-[10px] font-bold uppercase tracking-[0.4em] shadow-2xl hover:bg-accent-primary transition-all active:scale-95"
                                                >
                                                    Decrypt detailed {insight.title.toLowerCase()} findings
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Pricing & CTA */}
                            <div className="bg-text-primary p-12 lg:p-20 text-white text-center space-y-12 shadow-2xl relative">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.7em] text-accent-primary">The Final Decryption</p>
                                    <h3 className="font-serif text-[52px] font-bold italic leading-[0.9]">Your Life Trajectory.</h3>
                                </div>

                                <div className="max-w-md mx-auto space-y-12">
                                    <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-sm border-y border-white/10 py-12 italic font-serif">
                                        <div className="text-left opacity-50">12-Page Analysis</div><div className="text-right font-bold">✓ Complete</div>
                                        <div className="text-left opacity-50">18-Month Roadmap</div><div className="text-right font-bold">✓ Calibrated</div>
                                        <div className="text-left opacity-50">Rare Markers</div><div className="text-right font-bold">✓ Isolated</div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="space-y-2">
                                            <div className="text-6xl font-serif font-bold tracking-tight">
                                                $9.99 <span className="text-base opacity-30 line-through ml-2 font-light italic">$16.99</span>
                                            </div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-primary">Payment secures dynamic decryption key</p>
                                        </div>

                                        <button
                                            onClick={() => setShowModal(true)}
                                            className={cn(buttonVariants({ variant: "secondary" }), "w-full h-20 py-8 !rounded-none !bg-accent-primary !text-white text-2xl font-bold tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_-10px_rgba(var(--accent-primary-rgb),0.5)]")}
                                        >
                                            REVEAL MY BIOGRAPHY
                                        </button>

                                        <div className="flex justify-center gap-10 text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 italic">
                                            <span className="flex items-center gap-2"><ShieldCheck className="size-3" /> 30D Guarantee</span>
                                            <span className="flex items-center gap-2"><Lock className="size-3" /> Encrypted Protocol</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                {[
                                    { name: "Jamie L.", location: "London", content: "The AI detection of my Guardian Line was hauntingly precise. It's like someone who's known me for years." },
                                    { name: "Alexander K.", location: "New York", content: "I've spent hundreds on physical readings, but this gave me more concrete timing in 30 seconds." }
                                ].map((t, i) => (
                                    <div key={i} className="bg-white border border-text-primary/5 p-12 space-y-6">
                                        <div className="flex gap-1 text-accent-primary"><Star className="size-3 fill-current" /></div>
                                        <p className="font-serif text-xl leading-relaxed italic text-text-primary">"{t.content}"</p>
                                        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-tertiary pt-6 border-t border-text-primary/5">
                                            {t.name} — {t.location}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-20 text-center">
                                <p className="opacity-20 text-[9px] font-bold uppercase tracking-[0.5em]">End of Preview Record</p>
                            </div>
                        </div>
                    )}
                </Container>
            </Section>

            {/* --- PAYMENT MODAL --- */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-text-primary/98 backdrop-blur-xl animate-in fade-in duration-500">
                    <div className="relative w-full max-w-lg bg-[#FAF9F6] p-12 lg:p-16 shadow-2xl animate-in zoom-in-95 duration-500">
                        <button onClick={() => setShowModal(false)} className="absolute top-10 right-10 text-text-tertiary hover:text-text-primary transition-colors"><X className="size-6" /></button>
                        <div className="space-y-12 text-center">
                            <div className="space-y-4">
                                <div className="inline-block border border-accent-primary/40 bg-accent-primary/5 text-accent-primary px-6 py-2 text-[10px] font-bold uppercase tracking-widest font-sans">New Perspective Awaits</div>
                                <h3 className="font-serif text-[48px] font-bold italic leading-tight">Retrieve Record</h3>
                                <p className="text-text-primary font-serif text-lg italic opacity-80 max-w-xs mx-auto">Your report is 100% computed. Payment initiates the decryption sequence.</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-7xl font-serif font-bold">$9.99</span>
                                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-text-tertiary font-bold">One-time Assessment Fee</p>
                            </div>
                            <button onClick={() => setShowModal(false)} className={cn(buttonVariants({ variant: "primary" }), "w-full h-20 !rounded-none !bg-text-primary !text-white text-2xl font-bold tracking-[0.2em] shadow-2xl hover:bg-accent-primary transition-all")}>
                                Finalize Retrieval
                            </button>
                            <div className="opacity-30 text-[10px] font-bold uppercase tracking-[0.5em] space-y-8 font-sans">
                                <div className="flex justify-center gap-8 font-bold"><span>STRIPE</span><span>APPLE PAY</span><span>PAYPAL</span></div>
                                <p className="font-bold flex items-center justify-center gap-2"><Lock className="size-3" /> SECURE SSL ENCRYPTION ACTIVE</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
        </PageWrapper>
    );
}

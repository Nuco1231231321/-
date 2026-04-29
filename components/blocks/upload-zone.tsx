"use client";

import React, { useRef } from "react";
import { Hand, Sparkles, Plus, ScanEye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type UploadZoneProps = {
  title: string;
  description: string;
  helperText?: string;
  actionLabel?: string;
  disabled?: boolean;
  isScanning?: boolean;
  scanningStep?: string;
  error?: string;
  onUpload?: (file: File) => void;
  className?: string;
};

export function UploadZone({
  title,
  description,
  helperText,
  actionLabel = "Upload image",
  disabled = false,
  isScanning = false,
  scanningStep = "Initializing digital mapping...",
  error,
  onUpload,
  className,
}: UploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTriggerUpload = () => {
    if (disabled || isScanning) return;
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onUpload) {
      onUpload(file);
    }
    // Reset value to allow uploading the same file again
    if (event.target) event.target.value = "";
  };

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center rounded-xl border-[1.5px] border-dashed bg-bg-surface p-6 text-center transition-all duration-500 ease-out sm:p-8",
        "border-border-strong hover:border-accent-primary hover:bg-bg-elevated cursor-pointer",
        (disabled || isScanning) && "cursor-not-allowed opacity-90",
        error && "border-ui-error hover:border-ui-error",
        className,
      )}
      onClick={handleTriggerUpload}
      aria-disabled={disabled || isScanning}
    >
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Phantom Hand Watermark - Dynamic in scanning */}
      <div className={cn(
        "absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] transition-all duration-1000",
        isScanning ? "scale-125 opacity-[0.08] animate-pulse" : "group-hover:scale-110 group-hover:opacity-[0.05]"
      )}>
        <Hand className="h-[80%] w-auto stroke-[0.5]" />
      </div>

      {/* Decorative Scanner Corners */}
      <div className={cn("pointer-events-none absolute left-4 top-4 size-4 border-l border-t border-border-strong/40 transition-colors", (isScanning || error) ? "border-accent-primary" : "group-hover:border-accent-primary/40")} />
      <div className={cn("pointer-events-none absolute right-4 top-4 size-4 border-r border-t border-border-strong/40 transition-colors", (isScanning || error) ? "border-accent-primary" : "group-hover:border-accent-primary/40")} />
      <div className={cn("pointer-events-none absolute bottom-4 left-4 size-4 border-l border-b border-border-strong/40 transition-colors", (isScanning || error) ? "border-accent-primary" : "group-hover:border-accent-primary/40")} />
      <div className={cn("pointer-events-none absolute bottom-4 right-4 size-4 border-r border-b border-border-strong/40 transition-colors", (isScanning || error) ? "border-accent-primary" : "group-hover:border-accent-primary/40")} />

      {/* Scanning Line Animation */}
      {isScanning && (
        <div className="absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent animate-scan-line shadow-[0_0_15px_rgba(var(--accent-primary-rgb),0.5)]" />
      )}

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 pointer-events-none">
        {isScanning ? (
          <div className="space-y-8 py-10">
            <div className="relative flex items-center justify-center">
              <div className="size-24 rounded-full border border-accent-primary/20 animate-ping absolute" />
              <div className="size-20 rounded-full border-2 border-accent-primary/40 flex items-center justify-center bg-bg-base shadow-xl">
                <ScanEye className="size-10 text-accent-primary animate-pulse" />
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-accent-primary animate-pulse">
                {scanningStep}
              </h3>
              <p className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                Protocol-X.BioMapping.Active
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="relative pointer-events-auto" onClick={(e) => { e.stopPropagation(); handleTriggerUpload(); }}>
              <div className="flex size-16 items-center justify-center rounded-full border border-border-default bg-bg-elevated shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:border-accent-primary/50">
                <Hand className="size-8 text-accent-primary" strokeWidth={1.5} />
              </div>
              <div className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-accent-primary text-white shadow-lg">
                <Plus className="size-4" />
              </div>
            </div>

            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="size-3 text-accent-primary animate-pulse" />
                <h3 className="font-serif text-[26px] leading-[1.2] font-semibold tracking-[-0.02em] text-text-primary px-4">
                  {title}
                </h3>
              </div>
              <p className="max-w-xs text-[15px] leading-[1.6] text-text-secondary opacity-80">
                {description}
              </p>
            </div>

            <div className="pointer-events-auto">
              <Button disabled={disabled} variant="secondary" className="h-12 px-8 !rounded-none border-border-strong hover:bg-white hover:shadow-md transition-all">
                {actionLabel}
              </Button>
            </div>

            {helperText ? (
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-text-tertiary">
                {helperText}
              </p>
            ) : null}
          </>
        )}

        {error ? <p className="text-sm font-medium text-ui-error">{error}</p> : null}
      </div>
    </div>
  );
}

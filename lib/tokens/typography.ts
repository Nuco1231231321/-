export const typography = {
  fontFamily: {
    sans: "var(--font-manrope), Arial, sans-serif",
    serif: "var(--font-cormorant), Georgia, serif",
  },
  desktop: {
    displayXl: { fontSize: "72px", lineHeight: "1.02", fontWeight: 500 },
    displayLg: { fontSize: "56px", lineHeight: "1.05", fontWeight: 500 },
    headingXl: { fontSize: "40px", lineHeight: "1.10", fontWeight: 500 },
    headingLg: { fontSize: "32px", lineHeight: "1.15", fontWeight: 500 },
    headingMd: { fontSize: "24px", lineHeight: "1.20", fontWeight: 600 },
    bodyLg: { fontSize: "20px", lineHeight: "1.60", fontWeight: 400 },
    bodyMd: { fontSize: "16px", lineHeight: "1.65", fontWeight: 400 },
    bodySm: { fontSize: "14px", lineHeight: "1.60", fontWeight: 500 },
    label: { fontSize: "13px", lineHeight: "1.40", fontWeight: 600 },
  },
  mobile: {
    displayXl: { fontSize: "44px", lineHeight: "1.05", fontWeight: 500 },
    displayLg: { fontSize: "36px", lineHeight: "1.08", fontWeight: 500 },
    headingXl: { fontSize: "30px", lineHeight: "1.15", fontWeight: 500 },
    headingLg: { fontSize: "24px", lineHeight: "1.20", fontWeight: 500 },
    headingMd: { fontSize: "20px", lineHeight: "1.25", fontWeight: 600 },
    bodyLg: { fontSize: "18px", lineHeight: "1.60", fontWeight: 400 },
    bodyMd: { fontSize: "16px", lineHeight: "1.65", fontWeight: 400 },
    bodySm: { fontSize: "14px", lineHeight: "1.60", fontWeight: 500 },
    label: { fontSize: "12px", lineHeight: "1.40", fontWeight: 600 },
  },
} as const;

import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Palm", href: "/ai-palm-reading" },
  { label: "Fortune", href: "/online-fortune-telling" },
  { label: "Checkout", href: "/checkout" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-default/80 bg-bg-base/95 backdrop-blur">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-[24px] font-semibold tracking-[-0.02em] text-text-primary"
          >
            AI Fortune
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button size="sm" variant="secondary">
            Start free
          </Button>
        </div>
      </Container>
    </header>
  );
}

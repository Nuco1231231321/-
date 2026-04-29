import Link from "next/link";

import { Container } from "@/components/layout/container";

export function CheckoutHeader() {
  return (
    <header className="border-b border-border-default bg-bg-base">
      <Container size="md">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-[24px] font-semibold tracking-[-0.02em] text-text-primary"
          >
            AI Fortune
          </Link>
          <Link
            href="/online-fortune-telling"
            className="text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
          >
            Need help?
          </Link>
        </div>
      </Container>
    </header>
  );
}

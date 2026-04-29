import Link from "next/link";

import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-base py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-[22px] font-semibold tracking-[-0.02em] text-text-primary">
              AI Fortune
            </p>
            <p className="mt-2 max-w-md text-sm leading-[1.6] text-text-secondary">
              Foundation layer for a trust-first fortune and personal reading
              product.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-text-secondary">
            <Link href="/ai-palm-reading" className="transition-colors hover:text-text-primary">
              Palm
            </Link>
            <Link href="/online-fortune-telling" className="transition-colors hover:text-text-primary">
              Fortune
            </Link>
            <Link href="/checkout" className="transition-colors hover:text-text-primary">
              Checkout
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

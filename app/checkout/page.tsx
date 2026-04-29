import { checkoutFaqs, checkoutIncludes, homepageTrustItems } from "@/content/site-content";
import { CheckoutHeader } from "@/components/layout/checkout-header";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { CheckoutPageShell } from "@/components/sections/checkout-page-shell";

export default function CheckoutPage() {
  return (
    <PageWrapper navbar={<CheckoutHeader />}>
      <CheckoutPageShell
        title="Checkout should remove doubt, not restart the sales pitch."
        description="This page shell protects the final conversion moment by narrowing focus, restating value clearly, and reserving exact space for the payment module."
        price="$9.90"
        interval="one-time report"
        trustItems={homepageTrustItems}
        includes={
          <ul className="space-y-4">
            {checkoutIncludes.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-9 items-center justify-center rounded-md border border-border-default bg-bg-elevated">
                    <Icon className="size-[18px] text-accent-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                    <p className="mt-1 text-sm leading-[1.6] text-text-secondary">
                      This section remains part of the same reading narrative and must not feel like an unrelated product bundle.
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        }
        faqs={checkoutFaqs}
      />
    </PageWrapper>
  );
}

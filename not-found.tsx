import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section className="text-center max-w-xl mx-auto py-24">
      <p className="font-display text-7xl text-brand-brown">404</p>
      <h1 className="heading-md mt-3">This page is not in our pantry.</h1>
      <p className="text-ink-soft mt-3">
        The link you followed may be broken, or the page may have been moved.
        Let's get you back to the spices.
      </p>
      <div className="flex gap-3 justify-center mt-8">
        <Link href="/" className="btn-secondary">
          Home
        </Link>
        <Link href="/shop" className="btn-primary">
          Browse Spices
        </Link>
      </div>
    </Section>
  );
}
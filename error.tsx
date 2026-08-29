"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-5xl text-brand-brown">Something went wrong</p>
        <p className="text-ink-soft mt-3">
          We hit a snag while preparing this page. Please try again, or head
          back home.
        </p>
        <div className="flex gap-3 justify-center mt-8">
          <button onClick={reset} className="btn-secondary">
            Try Again
          </button>
          <Link href="/" className="btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
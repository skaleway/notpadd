import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 border-y border-border/50 w-full">
      <div className="text-center">
        <h2 className="text-balance text-4xl font-semibold lg:text-5xl font-lora">
          Ready to Start integrating??
        </h2>
        <p className="mt-4">
          We offer a range of integrations to help you get started.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="w-fit">
            <Link href="/">
              <span>Get Started</span>
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/">
              <span>Book Demo</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

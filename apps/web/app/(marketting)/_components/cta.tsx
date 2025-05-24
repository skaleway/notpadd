import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-6 py-10 border-t border-border/50 w-full"
    >
      <div className="text-center">
        <h2 className="text-balance text-3xl font-semibold lg:text-4xl font-lora">
          Ready to Start integrating??
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
          We offer a range of integrations to help you get started.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="w-fit">
            <Link href="/sign-in">
              <span>Get Started</span>
            </Link>
          </Button>

          <Button asChild size="lg" variant="secondary">
            <Link href="/sign-in">
              <span>Book a Demo</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

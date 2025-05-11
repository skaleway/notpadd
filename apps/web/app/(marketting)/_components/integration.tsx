import { cn } from "@workspace/ui/lib/utils";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { Icons } from "@workspace/ui/components/icons";

export default function IntegrationsSection() {
  return (
    <section>
      <div className="">
        <div className="mx-auto max-w-5xl px-6 ">
          <div className="relative mx-auto w-fit">
            <div
              role="presentation"
              className="absolute inset-0 z-10 bg-[radial-gradient(circle,transparent_0%,hsl(var(--background))_70%)]"
            />
            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
              <IntegrationCard>
                <Icons.nextjs />
              </IntegrationCard>
              <IntegrationCard>
                <Icons.vite />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <IntegrationCard>
                <Icons.solid />
              </IntegrationCard>
              <IntegrationCard
                borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                className="dark:bg-white/10"
              >
                <Icons.logo />
              </IntegrationCard>
              <IntegrationCard>
                <Icons.tailwindcss />
              </IntegrationCard>
            </div>

            <div className="mx-auto flex w-fit justify-center gap-2">
              <IntegrationCard>
                <Icons.github />
              </IntegrationCard>

              <IntegrationCard>
                <Icons.react />
              </IntegrationCard>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl font-lora">
              Integrate with your favorite tools
            </h2>
            <p className="text-muted-foreground">
              {
                "Don't change your stack, just continue with what you already by setting it up once and use anywhere."
              }
            </p>

            <Button variant="outline" size="sm" asChild>
              <Link href="#">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-20 rounded-xl dark:bg-transparent",
        className
      )}
    >
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  );
};

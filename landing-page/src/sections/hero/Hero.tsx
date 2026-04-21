import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <h1>Never miss a Valorant Patch again!</h1>

        <p className="text-lg text-muted-foreground mt-4 mb-4 max-w-[55ch]">
          Get instant, clean, easy-to-read patch notes delivered straight to
          your Discord server.
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span>
            <strong className="text-foreground font-semibold">250+</strong> servers
          </span>
          <span className="text-muted-foreground/40">·</span>
          <span>
            <strong className="text-foreground font-semibold">12,000+</strong> users
          </span>
        </div>

        <a
          href="https://discord.com/oauth2/authorize?client_id=1204815740918693898"
          target="_blank"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-brand-accent text-black hover:bg-brand-accent/90"
          )}
        >
          Invite to server
        </a>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Statistics from "@/components/ui/Statistics";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        <h1>Never miss a Valorant Patch again!</h1>

        <p className="text-lg text-muted-foreground mt-4 mb-4 max-w-[55ch]">
          Get instant, clean, easy-to-read patch notes delivered straight to
          your Discord server.
        </p>
        <Statistics />
        <a
          href="https://discord.com/oauth2/authorize?client_id=1204815740918693898"
          target="_blank"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-brand-accent text-black hover:bg-brand-accent/90",
          )}
        >
          Invite to server
        </a>
      </div>
    </section>
  );
}

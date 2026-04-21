"use client";
import { buttonVariants } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="section">
      <div className="container">
        <h2>Ready to stay up to date? </h2>
        <p>Add the bot to your server and never miss an update!</p>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1204815740918693898"
          target="_blank"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Invite to server
        </a>
      </div>
    </section>
  );
}

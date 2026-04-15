import { HowItWorksSteps } from "@/components/ui/howItWorksStep";

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container space-y-24">
        <HowItWorksSteps
          step="01"
          title="Invite the Bot"
          description="Add the bot to your discord server in seconds."
          image=""
        />
      </div>
    </section>
  );
}

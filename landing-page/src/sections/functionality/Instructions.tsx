import { InstructionSteps } from "@/components/ui/howItWorksStep";

export default function Instructions() {
  return (
    <section className="section">
      <div className="container space-y-24">
        <InstructionSteps
          step="01"
          title="Invite the Bot"
          description="Add the bot to your discord server in seconds."
          image=""
        />
      </div>
    </section>
  );
}

import { InstructionSteps } from "@/components/ui/Instructions";
import { instructions } from "@/data/instructions";

export default function Instructions() {
  return (
    <section className="section">
      <div className="container space-y-24">
        {instructions.map((instruction) => (
          <InstructionSteps key={instruction.title} instruction={instruction} />
        ))}
      </div>
    </section>
  );
}

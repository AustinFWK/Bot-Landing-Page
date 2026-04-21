import { Card, CardContent } from "./card";
import { type Instruction } from "@/data/instructions";

interface InstructionStepsProps {
  instruction: Instruction;
}

export function InstructionSteps({ instruction }: InstructionStepsProps) {
  const { step, title, description, image, reverse } = instruction;
  return (
    <div
      className={`grid gap-12 items-center md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Card className="border-muted">
        <CardContent className="p-8 space-y-4">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/25 rounded px-2 py-0.5">
            Step {step}
          </span>

          <h3>{title}</h3>

          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>

      <div className="rounded-xl overflow-hidden border bg-muted">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
}

import { Badge } from "./badge";
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
      {/* Text */}
      <Card className="border-muted">
        <CardContent className="p-8 space-y-4">
          <Badge variant="secondary">{step}</Badge>

          <h3 className="text-muted-foreground">{title}</h3>

          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>

      {/* Images */}
      <div className="rounded-xl overflow-hidden border bg-muted">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
}

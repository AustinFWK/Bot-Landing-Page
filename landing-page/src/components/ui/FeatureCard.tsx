import { type Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon } = feature;
  return (
    <div className="rounded-xl p-6 bg-muted/50 hover:bg-muted transition-colors transition-all hover:scale-[1.02]">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

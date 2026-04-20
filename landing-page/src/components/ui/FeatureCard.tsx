import { type Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon } = feature;
  return (
    <div className="grid">
      <div className="border rounded-lg p-6 bg-muted">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

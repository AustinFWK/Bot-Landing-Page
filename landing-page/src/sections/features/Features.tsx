import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Powerful but simple</h2>
        <h3 className="text-muted-foreground mb-12">
          Everything you need. Nothing you don't.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

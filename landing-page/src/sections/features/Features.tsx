import { FeatureCard } from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <h2>Powerful but simple</h2>
        <div className="grid">
          <h3>Everything you need. Nothing you don't.</h3>
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

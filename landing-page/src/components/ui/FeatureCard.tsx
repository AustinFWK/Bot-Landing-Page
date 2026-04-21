import { type Feature } from "@/data/features";

interface FeatureCardProps {
  feature: Feature;
}

function DiscordPreview() {
  return (
    <div className="mt-auto rounded-lg bg-[#313338] p-3 flex gap-2.5">
      <div className="w-8 h-8 rounded-full bg-brand-accent flex-shrink-0 flex items-center justify-center text-xs font-black text-black">
        V
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-[11px] font-bold text-white">Valorant News</span>
          <span className="text-[8px] font-bold bg-[#5865f2] text-white rounded px-1 py-px">APP</span>
        </div>
        <div className="text-[10px] text-[#b5bac1] leading-relaxed">
          <div>Patch 12.03 — TL:DR</div>
          <div>• Skirmish arrives as a 2v2 mode</div>
          <div>• Pick'Ems ready for Masters Santiago</div>
          <div className="font-bold text-white mt-1 mb-0.5">AGENT UPDATES</div>
          <div className="font-bold">Gekko</div>
          <div className="pl-3">• Reclaim timer increased 15s → 20s</div>
          <div className="pl-3">• Mosh Pit is now reclaimable</div>
          <div className="mt-1 border-l-2 border-brand-accent/40 pl-2 bg-[#2b2d31] rounded-r text-[9px] text-[#888]">
            <div className="font-semibold text-[#ccc] text-[10px]">VALORANT Patch Notes 12.03</div>
            <div>Modes updates, Gekko changes, and more.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { title, description, icon: IconComponent, tier } = feature;

  if (tier === "hero") {
    return (
      <div className="h-full flex flex-col gap-4 rounded-xl p-6 bg-brand-accent/[0.06] border border-brand-accent/20">
        <div>
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-brand-accent/10 text-brand-accent border border-brand-accent/25 rounded px-2 py-0.5 mb-4">
            Core Feature
          </span>
          <div className="text-2xl mb-3 text-brand-accent">
            <IconComponent />
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <DiscordPreview />
      </div>
    );
  }

  if (tier === "mid") {
    return (
      <div className="rounded-xl p-5 bg-brand-accent/[0.03] border border-brand-accent/[0.13] flex flex-col gap-2">
        <div className="text-xl text-brand-accent/80">
          <IconComponent />
        </div>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

  // chip
  return (
    <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
      <div className="text-base text-muted-foreground/60">
        <IconComponent />
      </div>
      <div>
        <div className="text-sm font-semibold text-muted-foreground">{title}</div>
        <div className="text-xs text-muted-foreground/60 leading-relaxed">{description}</div>
      </div>
    </div>
  );
}

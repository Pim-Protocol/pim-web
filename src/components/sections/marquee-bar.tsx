import {
  Brain,
  Cpu,
  Globe,
  KeyRound,
  Landmark,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const items = [
  {
    icon: Zap,
    text: "PoEM Consensus",
  },
  {
    icon: Shield,
    text: "NIST FIPS 203/204/205 + HQC",
  },
  {
    icon: Cpu,
    text: "PIM-VM Hybrid",
  },
  {
    icon: Zap,
    text: "QOL Energy Flatcoin",
  },
  {
    icon: Landmark,
    text: "PYM Cell Model",
  },
  {
    icon: Brain,
    text: "DALI Federated AI",
  },
  {
    icon: Globe,
    text: "Pim Hotspot Mesh",
  },
  {
    icon: KeyRound,
    text: "ML-DSA from Genesis",
  },
  {
    icon: Zap,
    text: "0.00034 kWh / tx",
  },
  {
    icon: Shield,
    text: "PoEC On-Chain Verified",
  },
  {
    icon: Smartphone,
    text: "$3 Node Support",
  },
  {
    icon: Globe,
    text: "Built for Africa",
  },
];

export function MarqueeBar() {
  const duplicatedItems = [...items, ...items];

  return (
    <section
      className="
        border-y
        border-border/50
        bg-muted-foreground/10
        overflow-hidden
      "
    >
      <div
        className="
          flex
          whitespace-nowrap
          py-3
        "
      >
        <div
          className="
            flex
            min-w-max
            animate-marquee
          "
        >
          {duplicatedItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.text}-${index}`}
                className="
                  group
                  flex
                  items-center
                  gap-2

                  px-8

                  text-xs
                  font-mono
                  tracking-wide
                  text-muted-foreground

                  transition-colors
                  duration-300

                  hover:text-primary
                "
              >
                <Icon
                  size={14}
                  className="
                    transition-colors
                    group-hover:text-primary
                  "
                />

                <span>{item.text}</span>

                <span
                  className="
                    h-1
                    w-1
                    rounded-full
                    bg-border
                    ml-4
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

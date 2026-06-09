import { Cpu, Server, Smartphone, Zap } from "lucide-react";

import { Container } from "@/components/layout/container";

const tiers = [
  {
    id: "Tier 0",
    title: "Sovereign Edge",
    icon: Zap,
    description:
      "$3–$30 microcontroller nodes designed for rural and off-grid deployment.",
    features: [
      "PoEC attestation",
      "Lite DALI intelligence",
      "Cash mode wallet",
      "Mesh routing",
    ],
  },
  {
    id: "Tier 1–2",
    title: "Embedded Node",
    icon: Smartphone,
    description:
      "Mobile, IoT and embedded devices running the complete protocol stack.",
    features: [
      "Full chain verification",
      "UTXO validation",
      "PoEC bond submission",
      "Offline capable",
    ],
  },
  {
    id: "Tier 3",
    title: "Validation Node",
    icon: Cpu,
    description:
      "Desktop-class hardware validating shards and protocol security.",
    features: [
      "Shard validation",
      "Cross-shard coordination",
      "Cash mode mixing",
      "TrustZone support",
    ],
  },
  {
    id: "Tier 4",
    title: "Producer Node",
    icon: Server,
    description:
      "GPU-backed infrastructure securing consensus and producing blocks.",
    features: [
      "Block production",
      "zk-STARK proofs",
      "AI inference engine",
      "Protocol backbone",
    ],
  },
];

export function NodeArchitecture() {
  return (
    <section className="py-18 bg-background">
      <Container>
        {/* Header */}

        <div className="max-w-4xl">
          <p
            className="
              font-mono
              text-[12px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-primary
            "
          >
            Node Architecture
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight

              lg:text-4xl
            "
          >
            Four tiers. One network.
            <br />
            <span className="text-primary">Impractical to attack.</span>
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              leading-8
              text-muted-foreground
            "
          >
            A 51% attack requires simultaneous compromise of all node tiers
            across DALI shards. Each tier uses different hardware, software,
            connectivity, and geography.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-14

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {tiers.map((tier) => {
            const Icon = tier.icon;

            return (
              <div
                key={tier.title}
                className="
                  rounded-2xl
                  border
                  border-border

                  bg-background

                  p-6

                  transition-all
                  duration-300

                  hover:border-primary/30
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-lg

                    border

                    bg-primary/5
                  "
                >
                  <Icon size={18} className="text-primary" />
                </div>

                <p
                  className="
                    mt-4

                    font-mono
                    text-[10px]

                    uppercase
                    tracking-[0.3em]

                    text-primary
                  "
                >
                  {tier.id}
                </p>

                <h3
                  className="
                    mt-3
                    font-semibold
                  "
                >
                  {tier.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    leading-7

                    text-muted-foreground
                  "
                >
                  {tier.description}
                </p>

                <ul
                  className="
                    mt-6
                    space-y-3
                  "
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                          flex
                          gap-2

                          text-sm
                          text-muted-foreground
                        "
                    >
                      <span className="text-primary">•</span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

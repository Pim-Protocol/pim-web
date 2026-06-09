import { Brain, Coins, Cpu, Globe, Shield, Zap } from "lucide-react";

import { Container } from "@/components/layout/container";

const layers = [
  {
    id: "01",
    title: "Consensus Layer",
    icon: Zap,
    description:
      "PoEM + MergedShard PoW + DFB + GHOST. Single objective winner per block via BLAKE3 XOF entropy weight.",
    footer: "0.1ms block selection • 100 DALI shards",
  },
  {
    id: "02",
    title: "PIM-VM Hybrid",
    icon: Cpu,
    description:
      "RISC lite + 64 KB, wasm3/WAMR for IoT and RISC-V. Shared Host API guarantees identical ledger effects.",
    footer: "0.5ms post-deploy • arxiv:2504.16532",
  },
  {
    id: "03",
    title: "Economy — ADTMS",
    icon: Coins,
    description:
      "Adaptive Dual Token Monetary Switchtable. Critical states, QOL UTXO for payments.",
    footer: "6 stability mechanisms • demand-factor minting",
  },
  {
    id: "04",
    title: "Post-Quantum Crypto",
    icon: Shield,
    description: "ML-DSA, HQC backup KEM, all from genesis block zero.",
    footer: "NIST FIPS 203/204/205 • HQC • Genesis",
  },
  {
    id: "05",
    title: "DALI Intelligence",
    icon: Brain,
    description: "Self-improving federated AI. Models update every four hours.",
    footer: "93% PVT accuracy • 97% fraud detection",
  },
  {
    id: "06",
    title: "Pim Hotspot Mesh",
    icon: Globe,
    description:
      "Censorship-resistant micro mesh. Wi-Fi HaLow, LoRa and cellular fallback.",
    footer: "Zero ISP dependency • Post-quantum transport",
  },
];

export function ProtocolLayers() {
  return (
    <section
      className="
        py-18
        bg-muted/30
      "
    >
      <Container>
        {/* Header */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-2
          "
        >
          <div>
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
              Architecture
            </p>

            <h2
              className="
                mt-4

                text-4xl
                font-bold

                lg:text-4xl
              "
            >
              Five layers.
              <br />
              <span className="text-primary">One protocol.</span>
            </h2>
          </div>

          <div
            className="
              max-w-lg

              text-muted-foreground

              leading-8
            "
          >
            Each layer operates identically across all node tiers — from a 64 KB
            microcontroller to a GPU server. No compromises. No second-class
            nodes.
          </div>
        </div>

        {/* Cards */}

        <div
          className="
            mt-16

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {layers.map((layer) => {
            const Icon = layer.icon;

            return (
              <div
                key={layer.id}
                className="
                  group

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
                <p
                  className="
                    font-mono
                    text-[10px]

                    tracking-[0.3em]

                    text-primary
                  "
                >
                  {layer.id}
                </p>

                <div
                  className="
                    mt-4

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

                <h3
                  className="
                    mt-4

                    font-semibold
                  "
                >
                  {layer.title}
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    leading-7

                    text-muted-foreground
                  "
                >
                  {layer.description}
                </p>

                <div
                  className="
                    my-5
                    h-px
                    bg-border
                  "
                />

                <p
                  className="
                    font-mono
                    text-[10px]

                    tracking-wide

                    text-primary
                  "
                >
                  {layer.footer}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

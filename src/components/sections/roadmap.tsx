import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

const roadmapItems = [
  {
    period: "2024 — Q2 2026",
    title: "Research & Specification",
    active: true,
    description:
      "Full protocol specification published. Whitepaper finalised. Research foundation validated.",
    tags: ["Whitepaper", "Architecture", "Research", "Partnership"],
  },
  {
    period: "Q3 2026",
    title: "Testnet Launch",
    active: true,
    description:
      "Public testnet with PoEC, PYM Cell Model, PIM-VM Hybrid and 100-shard network.",
    tags: ["Testnet", "PIM-VM", "PoEC", "SEL", "100 Shards"],
  },
  {
    period: "Q1 2027",
    title: "Mainnet Launch",
    active: false,
    description:
      "Dual-token economy live, validator onboarding and large-scale deployment.",
    tags: ["Mainnet", "QoL", "Nigeria", "5K+ Nodes"],
  },
  {
    period: "2028 — 2035",
    title: "Scale & Expansion",
    active: false,
    description:
      "Continental mesh network, renewable nodes, SDK ecosystem and global expansion.",
    tags: ["5M+ Users", "IoT SDK", "Mesh Network", "Renewable"],
  },
];

export function Roadmap() {
  return (
    <section className="bg-background py-18" id="roadmap">
      <Container>
        <div
          className="
            grid
            gap-20

            lg:grid-cols-[420px_1fr]
            lg:items-start
          "
        >
          {/* Left Side */}

          <div className="max-w-lg">
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
              Roadmap
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
                leading-[1.05]
                tracking-tight

                lg:text-4xl
              "
            >
              Engineering in progress.
              <br />
              <span className="text-primary">Testnet Q3 2026.</span>
            </h2>

            <p
              className="
                mt-8
                max-w-md
                text-base
                leading-8
                text-muted-foreground
              "
            >
              Pim Protocol is currently in active development by Pim Global
              Limited and QoLLabs Ltd. Every milestone below represents a
              published engineering objective.
            </p>
          </div>

          {/* Right Side */}

          <div className="relative pl-10">
            {/* Timeline Line */}

            <div
              className="
                absolute
                left-1
                top-0
                h-full
                w-px
                bg-border
              "
            />

            {roadmapItems.map((item) => (
              <div
                key={item.title}
                className="
                  relative
                  mb-12
                  last:mb-0
                "
              >
                {/* Timeline Dot */}

                <div
                  className={`
                    absolute
                    -left-[43px]
                    top-1

                    h-4
                    w-4
                    rounded-full
                    border-4

                    ${
                      item.active
                        ? "border-primary bg-primary"
                        : "border-border bg-background"
                    }
                  `}
                />

                {/* Period */}

                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-muted-foreground
                  "
                >
                  {item.period}
                </p>

                {/* Title */}

                <h3
                  className="
                    mt-2
                    text-xl
                    font-semibold
                    tracking-tight
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {item.description}
                </p>

                {/* Tags */}

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {item.tags.map((tag) => (
                    <Badge
                      key={`${item.title}-${tag}`}
                      className="
                        rounded-md
                        px-2.5
                        py-1

                        font-mono
                        text-[10px]

                        tracking-wider
                      "
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

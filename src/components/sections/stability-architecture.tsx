import { Container } from "@/components/layout/container";

const layers = [
  {
    id: "01",
    title: "Predictive Volatility Trigger",
    description:
      "DALI detects inflation minutes ahead at >97% accuracy. Acts before crisis.",
  },
  {
    id: "02",
    title: "Economic Circuit Breaker",
    description:
      "Volatility >10% triggers 12-hour minting halt and escalated buyback intensity.",
  },
  {
    id: "03",
    title: "PYM-Powered Buybacks",
    description:
      "PVT-activated buybacks from SRP reserve capped at 10% SRP_PYM/hr.",
  },
  {
    id: "04",
    title: "Dynamic Fee Scaling",
    description:
      "Burns escalate from 20% (Stable) → 80% (Transition) → 100% (Critical).",
  },
  {
    id: "05",
    title: "PoEC Slashing → SRP",
    description:
      "Slashed PYM routes to SRP reserve — not burned. Pro-stability.",
  },
  {
    id: "06",
    title: "Ecosystem Flywheel",
    description:
      "More usage → more fees → more reserve growth → stronger stability.",
  },
];

export function StabilityArchitecture() {
  return (
    <section
      className="
        py-18
        bg-muted/30
      "
      id="architecture"
    >
      <Container>
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
            Stability Architecture
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
            QOL defended at <span className="text-primary">six layers</span>
            <br />
            simultaneously.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              leading-8
              text-muted-foreground
            "
          >
            A volatility event bypassing the first layer is caught by the
            second. No single failure can destabilise QOL — it must defeat all
            six simultaneously.
          </p>
        </div>

        <div
          className="
            mt-14

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {layers.map((layer) => (
            <div
              key={layer.id}
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
              <p
                className="
                  font-mono
                  text-lg
                  font-bold
                  text-primary
                "
              >
                {layer.id}
              </p>

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
            </div>
          ))}
        </div>

        <div
          className="
            mt-12

            rounded-2xl
            border

            bg-background

            p-6
          "
        >
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
            QOL Volatility Target
          </p>

          <p
            className="
              mt-3
              text-4xl
              font-bold
              text-primary
            "
          >
            1–2%
          </p>

          <p className="mt-2 text-muted-foreground">
            Daily target range maintained by six independent stabilization
            mechanisms.
          </p>
        </div>
      </Container>
    </section>
  );
}

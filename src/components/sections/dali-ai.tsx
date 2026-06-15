import { Brain, Shield, TrendingUp, Zap } from "lucide-react";

import { Container } from "@/components/layout/container";

const metrics = [
  {
    value: ">97%",
    label: "Volatility Accuracy",
  },
  {
    value: ">97%",
    label: "Fraud Detection",
  },
  {
    value: "4hr",
    label: "Model Cycle",
  },
];

const capabilities = [
  {
    icon: TrendingUp,
    title: "Predictive Volatility Trigger",
    description: "Detects QOL inflation before it impacts market stability.",
  },
  {
    icon: Brain,
    title: "Q-Learning Shard Assignment",
    description: "Optimizes transaction routing and shard balancing.",
  },
  {
    icon: Shield,
    title: "PoEC Fraud Detection",
    description: "Identifies abnormal energy reporting and validator behavior.",
  },
  {
    icon: Zap,
    title: "EQCF Daily Calibration",
    description: "Rebalances Energy Quotient Calibration Formula every cycle.",
  },
];

export function DaliAI() {
  return (
    <section
      id="dali"
      className="
        py-18
        bg-muted/30
      "
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
            DALI • Decentralized Adaptive Learning Intelligence
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
            The network&apos;s{" "}
            <span className="text-primary">self-improving</span>
            <br />
            mind.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              leading-8
              text-muted-foreground
            "
          >
            DALI is a perpetually self-improving federated AI framework
            coordinating protocol-level intelligence across volatility control,
            fraud detection, shard optimization, and network efficiency.
          </p>
        </div>

        {/* Metrics */}

        <div
          className="
            mt-12
            grid
            gap-4

            md:grid-cols-3
          "
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="
                rounded-2xl
                border
                bg-background
                p-6
                text-center
              "
            >
              <div
                className="
                  text-3xl
                  font-bold
                  text-primary
                "
              >
                {metric.value}
              </div>

              <div
                className="
                  mt-2

                  font-mono
                  text-[10px]

                  uppercase

                  tracking-[0.3em]

                  text-muted-foreground
                "
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Capability Cards */}

        <div
          className="
            mt-8

            grid
            gap-4

            md:grid-cols-2
          "
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  bg-background
                  p-6

                  transition-all
                  duration-300

                  hover:border-primary/30
                "
              >
                <Icon size={18} className="text-primary" />

                <h3
                  className="
                    mt-4
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

const metrics = [
  {
    value: "100K",
    label: "TPS THEORETICAL",
    highlight: true,
  },
  {
    value: "0.3s",
    label: "INTRA-SHARD CONFIRM",
  },
  {
    value: "440×",
    label: "MORE EFFICIENT VS BITCOIN",
    highlight: true,
  },
  {
    value: "100M",
    label: "PYM HARD CAP • FIXED",
  },
  {
    value: "1–2%",
    label: "QOL VOLATILITY TARGET",
    highlight: true,
  },
  {
    value: "NIST",
    label: "PQC FROM GENESIS BLOCK",
  },
];

export function MetricsGrid() {
  return (
    <section className="border-b border-border py-14">
      <div
        className="
          mx-auto
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            overflow-hidden

            rounded-3xl

            border
            border-border

            bg-background
          "
        >
          <div
            className="
              grid

              grid-cols-2

              md:grid-cols-3
              xl:grid-cols-6
            "
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  group

                  flex
                  min-h-[140px]

                  flex-col
                  items-center
                  justify-center

                  border-b
                  border-r
                  border-border

                  px-6

                  text-center

                  transition-all
                  duration-300

                  hover:bg-primary/5
                "
              >
                <h3
                  className={`
                    text-2xl
                    font-bold
                    tracking-tight
                    transition-colors

                    ${metric.highlight ? "text-primary" : "text-foreground"}

                    group-hover:text-primary
                  `}
                >
                  {metric.value}
                </h3>

                <p
                  className="
                    mt-4

                    font-mono

                    text-[10px]

                    uppercase

                    tracking-[0.3em]

                    text-muted-foreground
                  "
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

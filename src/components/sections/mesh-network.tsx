import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";

const radios = [
  {
    name: "Wi-Fi HaLow — IEEE 802.11ah",
    description: "900 MHz ISM • Primary backbone bearer",
    range: "1–3 km",
    color: "bg-primary",
  },
  {
    name: "Wi-Fi 6 — IEEE 802.11ax",
    description: "2.4 / 5 / 6 GHz • Dense user-access layer",
    range: "200 m",
    color: "bg-emerald-500",
  },
  {
    name: "LoRa Chirp-Spread-Spectrum",
    description: "863/915 MHz ISM • Rural fallback bearer",
    range: "50 km",
    color: "bg-red-500",
  },
];

export function MeshNetwork() {
  return (
    <section className="py-18 bg-background" id="mesh">
      <Container>
        <div
          className="
            grid
            gap-16

            lg:grid-cols-2
            lg:items-start
          "
        >
          {/* Left */}

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
              Pim Hotspot Mesh
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
              Blockchain without{" "}
              <span className="text-primary">the Internet.</span>
            </h2>

            <p
              className="
                mt-8
                leading-8
                text-muted-foreground
              "
            >
              Pim Protocol is designed to settle transactions, propagate blocks,
              and maintain consensus even when traditional internet
              infrastructure is unavailable.
            </p>

            <p
              className="
                mt-6
                leading-8
                text-muted-foreground
              "
            >
              Three simultaneous radio bearers operate independently. Jamming
              all three requires coordinated attacks across multiple frequencies
              and transmission methods.
            </p>

            <div className="mt-8">
              <Badge>Post-Quantum Mesh Transport</Badge>
            </div>
          </div>

          {/* Right */}

          <div
            className="
              rounded-3xl
              border
              border-border

              bg-background

              overflow-hidden
            "
          >
            {radios.map((radio) => (
              <div
                key={radio.name}
                className="
                  flex
                  items-center
                  justify-between

                  border-b
                  border-border

                  px-6
                  py-6

                  last:border-0

                  transition-colors

                  hover:bg-primary/[0.03]
                "
              >
                <div className="flex gap-4">
                  <div
                    className={`
                      mt-1
                      h-3
                      w-3
                      rounded-full
                      ${radio.color}
                    `}
                  />

                  <div>
                    <h3 className="font-medium">{radio.name}</h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-muted-foreground
                      "
                    >
                      {radio.description}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    font-semibold
                    text-sm
                  "
                >
                  {radio.range}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

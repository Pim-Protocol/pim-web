import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";

const protocolPills = [
  "PoEM Consensus",
  "UTXO Native",
  "PIM-VM Hybrid",
  "Energy Verified",
  "Post-Quantum",
  "Embedded-First",
  "Federated AI",
  "Mesh Network",
];

export function AboutProtocol() {
  return (
    <section className="py-18" id="about">
      <Container>
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
            lg:items-center
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
              About Pim Protocol
            </p>

            <h2
              className="
                mt-5

                max-w-2xl
                text-4xl
                font-bold
                leading-tight
                lg:text-4xl
              "
            >
              The most complete Layer-1 specification{" "}
              <span className="text-primary">in the public domain.</span>
            </h2>

            <p
              className="
                mt-8

                max-w-xl

                leading-8

                text-muted-foreground
              "
            >
              Pim Protocol synthesises Minima&apos;s embedded node model and
              Quai Network&apos;s PoEM consensus with eleven original
              contributions found in no other blockchain — demand-responsive QOL
              minting, cryptographically verified energy costs, UTXO-native
              governance, adaptive hybrid VM, self-improving federated AI, and
              six layered stability mechanisms.
            </p>

            <p
              className="
                mt-6

                max-w-xl

                leading-8

                text-muted-foreground
              "
            >
              Every feature is designed to operate identically across all node
              tiers — from a $3 microcontroller in rural Nigeria to a GPU node
              in a data centre.
              <strong className="text-foreground">
                {" "}
                Same ledger. Same cryptographic guarantees. Same protocol
                primitives. Quantum-resistant from genesis block zero.
              </strong>
            </p>

            <div
              className="
                mt-8

                flex
                flex-wrap
                gap-2
              "
            >
              {protocolPills.map((pill) => (
                <Badge
                  key={pill}
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                  "
                >
                  {pill}
                </Badge>
              ))}
            </div>

            <div className="mt-8">
              <Button>Read Full Specification →</Button>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div
              className="
                rounded-[32px]

                border
                border-border

                bg-background

                p-4

                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <div
                className="
                  relative

                  flex
                  aspect-[4/3]

                  items-center
                  justify-center

                  rounded-3xl

                  border

                  bg-primary/10
                "
              >
                <div
                  className="
                    absolute
                    left-4
                    top-4

                    rounded-md
                    border

                    px-3
                    py-1

                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-muted-foreground
                  "
                >
                  Infographic
                </div>

                <div
                  className="
                    flex
                    flex-col
                    items-center
                    gap-4
                  "
                >
                  <Globe size={42} className="text-primary" />

                  <p
                    className="
                      font-mono
                      text-[11px]

                      uppercase

                      tracking-[0.3em]

                      text-muted-foreground
                    "
                  >
                    world&apos;s 2 billion unbanked
                  </p>

                  <p
                    className="
                      text-sm
                      text-muted-foreground
                    "
                  >
                    Sub-Saharan Africa First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

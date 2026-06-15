import { Container } from "@/components/layout/container";

const qolFeatures = [
  "Cell Model UTXO • 1–2% Volatility Target",
  "PoEC-Verified Energy Backing every 12h",
  "DemandFactor Responsive Minting",
  "Six Layered Stability Mechanisms",
  "QolEx AMM Protocol-Level Buybacks",
  "Satoshi's Wormhole Quantum-Resistant Burn",
];

const pymFeatures = [
  "Cell Model UTXO • 100M Fixed Cap Forever",
  "ML-DSA Lock Scripts from Genesis Block",
  "Governance Cells • Staking Cells",
  "PoEC Bond Cells • Protocol Security",
  "QolEx Buybacks • SRP Slashing Routing",
  "First UTXO-Native Governance Token",
];

export function TokenSystem() {
  return (
    <section className="py-18 bg-background" id="token-system">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
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
            Dual-Token System
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
            Two tokens. <span className="text-primary">One complete</span>
            <br />
            monetary system.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-muted-foreground
              leading-8
            "
          >
            QOL for everyday payments. PYM for governance and protocol security.
            The first fully verifiable, embedded-native dual-token system in any
            blockchain specification.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-6

            lg:grid-cols-2
          "
        >
          {/* QOL */}

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-primary/30
              bg-primary/5
              p-8
            "
          >
            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-primary
                font-bold
              "
            >
              QOL • Flatcoin
            </p>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                leading-tight
              "
            >
              Energy-Backed
              <br />
              Flatcoin
            </h3>

            <p
              className="
                mt-6
                text-muted-foreground
                leading-8
              "
            >
              The world&apos;s first on-chain cryptographically-verified
              energy-backed flatcoin. Demand-responsive minting via DemandFactor
              clamped to [0.5, 1.5]. PoEC-verified energy proofs every 12 hours
              make QOL&apos;s backing cryptographically real — not merely
              claimed.
            </p>

            <ul
              className="
                mt-8
                space-y-4
              "
            >
              {qolFeatures.map((feature) => (
                <li
                  key={feature}
                  className="
                    flex
                    items-start
                    gap-3

                    text-sm
                    text-muted-foreground
                  "
                >
                  <span className="text-primary">•</span>

                  {feature}
                </li>
              ))}
            </ul>

            <span
              className="
                absolute
                bottom-4
                right-6

                text-7xl
                font-bold

                text-primary/10
              "
            >
              QOL
            </span>
          </div>

          {/* PYM */}

          <div
            className="
              relative
              overflow-hidden

              rounded-3xl

              border

              bg-background

              p-8
            "
          >
            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-muted-foreground
                font-bold
              "
            >
              PYM • Governance
            </p>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                leading-tight
              "
            >
              Fixed-Supply
              <br />
              Governance Token
            </h3>

            <p
              className="
                mt-6
                text-muted-foreground
                leading-8
              "
            >
              100 million PYM. Hard cap enforced from genesis. No additional
              minting ever — not during instability, not under any governance
              vote. PYM accrues value through utility: PoEC staking, governance,
              QolEx liquidity, and protocol-level QOL buybacks.
            </p>

            <ul
              className="
                mt-8
                space-y-4
              "
            >
              {pymFeatures.map((feature) => (
                <li
                  key={feature}
                  className="
                    flex
                    items-start
                    gap-3

                    text-sm
                    text-muted-foreground
                  "
                >
                  <span className="text-foreground">•</span>

                  {feature}
                </li>
              ))}
            </ul>

            <span
              className="
                absolute
                bottom-4
                right-6

                text-7xl
                font-bold

                text-foreground/5
              "
            >
              PYM
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

const columns = [
  "Feature",
  "Pim Protocol",
  "Minima",
  "Quai",
  "Ethereum",
  "Bitcoin",
];

const rows = [
  [
    "TPS Throughput",
    "100K (60–80K sustained)",
    "~1,000",
    "50,000+",
    "15–30",
    "7",
  ],
  ["Embedded / IoT Nodes", "✓ 256KB • $3", "✓ Core Design", "✗", "✗", "✗"],
  ["Energy-Backed Flatcoin", "✓ QOL • PoEC Verified", "✗", "✓ QI", "✗", "✗"],
  ["Post-Quantum from Genesis", "✓ FIPS 203/204/205 + HQC", "✗", "✗", "✗", "✗"],
  ["UTXO-Native Governance", "✓ PYM Cell Model", "✗", "✗", "✗", "✗"],
  [
    "Adaptive VM",
    "✓ PIM-VM Hybrid",
    "KISS only",
    "WASM only",
    "EVM only",
    "Script only",
  ],
  ["Federated AI", "✓ DALI LSTM", "✗", "✗", "✗", "✗"],
  ["Mesh Network", "✓ Pim Hotspot", "Maxima P2P", "✗", "✗", "✗"],
];

import { Container } from "@/components/layout/container";

export function Comparison() {
  return (
    <section className="py-18 bg-muted/30">
      <Container>
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
            Comparison
          </p>

          <h2
            className="
              mt-5
              text-4xl
              font-bold

              lg:text-4xl
            "
          >
            Pim Protocol vs.
            <span className="text-primary"> the field.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              leading-8
              text-muted-foreground
            "
          >
            Eleven original contributions found in no other blockchain. Not
            incremental improvements — architectural innovations.
          </p>
        </div>

        <div
          className="
            mt-14

            overflow-x-auto

            rounded-3xl
            border

            bg-background
          "
        >
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b">
                {columns.map((column, index) => (
                  <th
                    key={column}
                    className={`
                      px-6
                      py-5

                      text-left

                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.25em]

                      ${
                        index === 1
                          ? "relative bg-primary/5 text-primary transition-all duration-300 hover:z-10 hover:bg-primary/10 hover:shadow-[0_0_28px_rgba(245,158,11,0.18)]"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row[0]}
                  className="
        border-b
        last:border-0
      "
                >
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${index}`}
                      className={`
            px-6
            py-5
            text-sm

            ${
              index === 1
                ? "relative bg-primary/[0.03] transition-all duration-300 hover:z-10 hover:bg-primary/10 hover:text-primary hover:shadow-[0_0_28px_rgba(245,158,11,0.18)]"
                : ""
            }
          `}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/container";

const researchPapers = [
  {
    source: "ArXiv:2504.16552 • Apr 2025",
    title: "DTVM: Deterministic VM",
    description:
      "Hybrid lazy-JIT execution architecture forming the basis of PIM-VM Full Mode.",
  },
  {
    source: "ArXiv:2512.00835 • Nov 2025",
    title: "WASM on IoT Devices",
    description:
      "Validation of lightweight WASM execution across ESP32, RP2040 and ARM platforms.",
  },
  {
    source: "ACM TOSEM • ArXiv:2404.12621",
    title: "WASM Runtime Survey",
    description:
      "Comparative analysis of Wasmtime, WasmEdge, WAMR and embedded runtimes.",
  },
  {
    source: "NIST FIPS 203/204/205 • Aug 2024",
    title: "Post-Quantum Standards",
    description:
      "ML-KEM, ML-DSA and SLH-DSA cryptographic standards integrated from genesis.",
  },
  {
    source: "ArXiv:2206.12888",
    title: "WASM Cloud-Edge Continuum",
    description:
      "Unified execution model across cloud, edge and embedded environments.",
  },
  {
    source: "Watkins & Dayan • 1992",
    title: "Q-Learning Sharding",
    description:
      "Research foundation behind DALI shard optimization and adaptive routing.",
  },
];

export function Research() {
  return (
    <section className="bg-background py-18" id="research">
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
            Research Foundation
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              tracking-tight

              lg:text-4xl
            "
          >
            Built on <span className="text-primary">peer-reviewed</span>{" "}
            research.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              leading-8
              text-muted-foreground
            "
          >
            Pim Protocol combines academic research from distributed systems,
            post-quantum cryptography, WASM execution environments, AI systems,
            and blockchain consensus design.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            gap-4

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {researchPapers.map((paper) => (
            <article
              key={paper.title}
              className="
                rounded-2xl
                border
                border-border

                bg-background

                p-6

                transition-all
                duration-300

                hover:border-primary/30
                hover:bg-primary/[0.02]
              "
            >
              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-primary
                "
              >
                {paper.source}
              </p>

              <h3
                className="
                  mt-4
                  text-lg
                  font-semibold
                "
              >
                {paper.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-muted-foreground
                "
              >
                {paper.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

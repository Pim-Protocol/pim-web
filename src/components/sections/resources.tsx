import Link from "next/link";

import {
  FileText,
  Presentation,
  ClipboardList,
  Cog,
  Download,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Technical Whitepaper",
    format: "PDF",
    description: "Full Specification",
    icon: FileText,
    href: "/documents/pim-whitepaper.pdf",
  },
  {
    title: "Investor Pitch Deck",
    format: "PDF",
    description: "PowerPoint Deck",
    icon: Presentation,
    href: "/documents/pim-pitch-deck.pdf",
  },
  {
    title: "Executive One-Pager",
    format: "PDF",
    description: "2 Pages",
    icon: ClipboardList,
    href: "/documents/pim-one-pager.pdf",
  },
  {
    title: "Technical Specifications",
    format: "PDF",
    description: "Protocol Specs",
    icon: Cog,
    href: "/documents/pim-specification.pdf",
  },
];

export function Resources() {
  return (
    <section className="relative bg-muted/30 py-18" id="resources">
      <Container>
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
          Company Resources
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
          Whitepaper & <span className="text-primary">Pitch Deck</span>
        </h2>

        <div
          className="
            mt-12

            rounded-3xl
            border
            border-border

            bg-background

            p-8

            lg:grid
            lg:grid-cols-[1fr_320px]
            lg:gap-12
          "
        >
          {/* Left */}

          <div>
            <p
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              Available Now
            </p>

            <h3
              className="
                mt-4
                text-2xl
                font-semibold
              "
            >
              Access All Documents
            </h3>

            <p
              className="
                mt-5
                max-w-xl
                leading-8
                text-muted-foreground
              "
            >
              Download the complete Pim Protocol technical whitepaper, investor
              pitch deck, executive summary, and supporting protocol
              specifications.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <Button asChild variant="outline">
                <Link href="/documents/pim-whitepaper.pdf">Whitepaper PDF</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/documents/pim-pitch-deck.pdf">Pitch Deck PDF</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/documents/pim-pitch-deck.pptx">
                  Pitch Deck PPT
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/documents/pim-one-pager.pdf">One-Pager</Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/documents/pim-specification.pdf">Tech Specs</Link>
              </Button>
            </div>

            <p
              className="
                mt-8

                font-mono
                text-xs

                text-muted-foreground
              "
            >
              Investor relations:
              <span className="ml-2 text-primary">contact@pimprotocol.org</span>
            </p>
          </div>

          {/* Right */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-3

              lg:mt-0
            "
          >
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    rounded-2xl
                    border

                    bg-background

                    p-4

                    transition-all
                    duration-300

                    hover:border-primary/30
                    hover:bg-primary/[0.03]
                  "
                >
                  <div className="flex gap-3">
                    <Icon
                      size={18}
                      className="
                        mt-0.5
                        text-primary
                      "
                    />

                    <div>
                      <h4
                        className="
                          text-sm
                          font-medium
                        "
                      >
                        {resource.title}
                      </h4>

                      <p
                        className="
                          mt-1

                          font-mono
                          text-[10px]

                          uppercase

                          tracking-wider

                          text-muted-foreground
                        "
                      >
                        {resource.format}
                        {" • "}
                        {resource.description}
                      </p>
                    </div>
                  </div>

                  <Download
                    size={16}
                    className="
                      text-muted-foreground
                      transition-colors

                      group-hover:text-primary
                    "
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Coming Soon overlay */}
      <div
        className="
          absolute
          inset-0

          flex
          flex-col
          items-center
          justify-center
          gap-3

          rounded-none
          backdrop-blur-sm

          bg-background/60
        "
      >
        <p
          className="
            font-mono
            text-[11px]
            font-bold
            uppercase
            tracking-[0.3em]
            text-primary
          "
        >
          Coming Soon
        </p>

        <p className="text-sm text-muted-foreground">
          Documents will be available here once published.
        </p>
      </div>
    </section>
  );
}
